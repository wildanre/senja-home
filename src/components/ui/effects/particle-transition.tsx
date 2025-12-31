"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import gsap from "gsap";
import { useRouter } from "next/navigation";

interface ParticleTransitionProps {
  onComplete?: () => void;
  trigger: boolean;
  text?: string;
  redirectTo?: string;
}

export function ParticleTransition({
  onComplete,
  trigger,
  text = "Senja",
  redirectTo,
}: ParticleTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [containerOpacity, setContainerOpacity] = useState(1);

  // Refs to keep track of heavy objects cleanup
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let safetyTimer: NodeJS.Timeout;
    let startTimer: NodeJS.Timeout;
    if (trigger) {
      setIsActive(true);
      setContainerOpacity(1);

      // Run animation with minimal delay to ensure DOM is ready
      // 0ms or requestAnimationFrame might be too fast for Ref to attach in Portal
      startTimer = setTimeout(() => {
        try {
          if (!containerRef.current) {
            console.error("Container ref missing, retrying...");
            setTimeout(initAnimation, 50); // Retry once
          } else {
            initAnimation();
          }
        } catch (e) {
          console.error("Animation Init Failed:", e);
          if (redirectTo) router.push(redirectTo);
        }
      }, 20);

      // Safety: Force redirect after 5s
      safetyTimer = setTimeout(() => {
        if (redirectTo) router.push(redirectTo);
        if (onComplete) onComplete();
      }, 5000);
    }

    return () => {
      cleanup();
      clearTimeout(safetyTimer);
      clearTimeout(startTimer);
    };
  }, [trigger]);

  const cleanup = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    if (rendererRef.current) {
      const renderer = rendererRef.current;
      // Safely remove dom element
      if (
        renderer.domElement &&
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose resources
      renderer.dispose();
      renderer.forceContextLoss();
      rendererRef.current = null;
    }

    if (sceneRef.current) {
      sceneRef.current.traverse((object) => {
        if (object instanceof THREE.Points) {
          if (object.geometry) object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      sceneRef.current = null;
    }

    window.removeEventListener("resize", handleResize);
  };

  // Define handleResize outside initAnimation so it can be removed in cleanup
  const handleResize = () => {
    if (sceneRef.current && rendererRef.current) {
      const camera = sceneRef.current.children.find(
        (obj) => obj instanceof THREE.PerspectiveCamera
      ) as THREE.PerspectiveCamera;
      if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  };

  const initAnimation = () => {
    if (!containerRef.current) return;

    // Double check cleanup
    if (rendererRef.current) cleanup();

    // Setup basic Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30; // Move back slightly
    scene.add(camera); // Add camera to scene for easier access in resize handler

    // Robust Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add resize handler
    window.addEventListener("resize", handleResize);

    // Particle params
    const count = 15000; // slightly more for density

    // Create initial sphere particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Initial Random Spread (No sphere)
    for (let i = 0; i < count; i++) {
      // Spread widely across the screen
      const range = 40;
      positions[i * 3] = (Math.random() - 0.5) * range * 1.5; // X spread width
      positions[i * 3 + 1] = (Math.random() - 0.5) * range; // Y spread height
      positions[i * 3 + 2] = (Math.random() - 0.5) * range; // Z depth spread

      // Color: Senja theme (Gold/Orange/Warm)
      const color = new THREE.Color();
      const depth = Math.abs(positions[i * 3 + 2]) / 20;
      color.setHSL(
        0.08 + Math.random() * 0.05,
        0.6 + depth * 0.2,
        0.5 + depth * 0.2
      );

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation Loop (No rotation)
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Trigger Morph Sequence immediately
    morphToText(text, particles, count);
  };

  const morphToText = (
    textStr: string,
    particles: THREE.Points,
    count: number
  ) => {
    // Generate Text Points
    const textPoints = createTextPoints(textStr);

    if (textPoints.length === 0) {
      console.error("No text points generated!");
    }

    const positions = particles.geometry.attributes.position
      .array as Float32Array;
    const targetPositions = new Float32Array(count * 3);

    // Map points
    for (let i = 0; i < count; i++) {
      if (i < textPoints.length) {
        // Text points
        targetPositions[i * 3] = textPoints[i].x;
        targetPositions[i * 3 + 1] = textPoints[i].y;
        targetPositions[i * 3 + 2] = 0; // Flat 2D text
      } else {
        // Surplus points: scatter into a WIDER background cloud/ring
        // User requested "lebih menyebar" (more spread)
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 30 + 20; // Increased from 12-27 to 20-50

        targetPositions[i * 3] = Math.cos(angle) * radius;
        targetPositions[i * 3 + 1] = Math.sin(angle) * radius;
        // Add more depth spread too
        targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      }
    }

    // Animate positions
    // We animate 'value' and update positions in onUpdate?
    // Actually GSAP can iterate, but animating the array directly is cleaner if we do interpolation manually or use a helper object
    // Or we can just tween the array values if we chunk it, but that's heavy.
    // The efficient way in the example:
    // It tweens the array elements. GSAP is surprisingly good at this.

    // Instead of tweening 45000 properties, let's use a dummy object to drive interpolation
    // or just tween strictly necessary attributes.
    // The example code does:
    // gsap.to(particles.geometry.attributes.position.array, { [i]: target, ... }) inside a loop.
    // That creates thousands of tweens. It works for 12k particles on decent implementation.
    // Let's optimize by just using a simpler interpolation in requestAnimationFrame or use a float uniform.
    // But sticking to the example method for fidelity:

    // Actually, let's just do a simpler tween:
    // Create a 'current' array and 'target' array, and tween a progress variable.
    // But to follow the example's "randomness" (different durations/eases per particle?),
    // the example code loops and creates tweens.
    // "for (let i = 0; i < positions.length; i += 3) { gsap.to(...) }" -> This is indeed very heavy.
    // Let's assume standard modern devices handle it.

    // Optimized approach for React/Performance:
    // Tween a global "progress" from 0 to 1.
    // Store start positions and end positions.
    // Interpolate in animation loop.

    // Capture start positions
    const startPositions = Float32Array.from(positions);

    const animationObj = { progress: 0 };

    gsap.to(animationObj, {
      progress: 1,
      duration: 3,
      ease: "power2.out", // Start FAST, end slow (immediate movement)
      onUpdate: () => {
        const p = animationObj.progress;
        for (let i = 0; i < count; i++) {
          const xS = startPositions[i * 3];
          const yS = startPositions[i * 3 + 1];
          const zS = startPositions[i * 3 + 2];

          const xE = targetPositions[i * 3];
          const yE = targetPositions[i * 3 + 1];
          const zE = targetPositions[i * 3 + 2];

          positions[i * 3] = xS + (xE - xS) * p;
          positions[i * 3 + 1] = yS + (yE - yS) * p;
          positions[i * 3 + 2] = zS + (zE - zS) * p;
        }
        particles.geometry.attributes.position.needsUpdate = true;
      },
      onComplete: () => {
        // EXPLOSION PHASE 💥

        // 1. Create explosion targets (fly towards camera/outward)
        const explosionPositions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          // Much larger radius for explosion
          const r = Math.random() * 50 + 20;

          explosionPositions[i * 3] =
            positions[i * 3] * 5 + Math.cos(angle) * r;
          explosionPositions[i * 3 + 1] =
            positions[i * 3 + 1] * 5 + Math.sin(angle) * r;
          // Fly TOWARDS camera (Z positive)
          explosionPositions[i * 3 + 2] =
            positions[i * 3 + 2] + Math.random() * 100 + 50;
        }

        const startExplosion = Float32Array.from(positions);
        const explodeObj = { p: 0 };

        // 2. Animate Explosion
        gsap.to(explodeObj, {
          p: 1,
          duration: 0.8,
          ease: "power2.in", // Accelerate out
          onUpdate: () => {
            const p = explodeObj.p;
            for (let i = 0; i < count; i++) {
              positions[i * 3] =
                startExplosion[i * 3] +
                (explosionPositions[i * 3] - startExplosion[i * 3]) * p;
              positions[i * 3 + 1] =
                startExplosion[i * 3 + 1] +
                (explosionPositions[i * 3 + 1] - startExplosion[i * 3 + 1]) * p;
              positions[i * 3 + 2] =
                startExplosion[i * 3 + 2] +
                (explosionPositions[i * 3 + 2] - startExplosion[i * 3 + 2]) * p;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            // Fade out
            if (particles.material instanceof THREE.Material) {
              particles.material.opacity = 0.8 * (1 - p);
            }
          },
          onComplete: () => {
            if (redirectTo) {
              router.push(redirectTo);
            }
            if (onComplete) {
              setContainerOpacity(0);
              setTimeout(() => {
                onComplete();
              }, 500); // Wait for fade out
            }
          },
        });
      },
    });
  };

  const createTextPoints = (text: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return [];

    const fontSize = 80;
    const fontFamily = "Arial, sans-serif"; // Use standard font for reliability

    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = fontSize * 1.5;

    canvas.width = textWidth + 100;
    canvas.height = textHeight + 100;

    // Black bg, white text for contrast scanning
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffffff";
    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const points = [];
    const threshold = 128;

    // Scan pixels
    for (let i = 0; i < pixels.length; i += 4) {
      // Checking Red channel (since white text)
      if (pixels[i] > threshold) {
        const x = (i / 4) % canvas.width;
        const y = Math.floor(i / 4 / canvas.width);

        // Push points with some density factor
        if (Math.random() < 0.25) {
          // 25% of pixels
          points.push({
            x: (x - canvas.width / 2) / (fontSize / 8), // Scale down
            y: -(y - canvas.height / 2) / (fontSize / 8), // Invert Y for 3D
          });
        }
      }
    }
    return points;
  };

  if (!isActive) return null;

  // Use Portal to escape stacking contexts (hero usually has transforms)
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-0 z-99999 bg-black"
      style={{ opacity: containerOpacity, transition: "opacity 0.5s ease-out" }}
    />,
    document.body
  );
}
