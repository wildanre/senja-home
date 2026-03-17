"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [containerOpacity, setContainerOpacity] = useState(1);

  // Refs to keep track of heavy objects cleanup
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const handleResize = useCallback(() => {
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
  }, []);

  const cleanup = useCallback(() => {
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
  }, [handleResize]);

  const createTextPoints = useCallback((text: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return [];

    const fontSize = 80;
    const fontFamily = "Arial, sans-serif";

    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = fontSize * 1.5;

    canvas.width = textWidth + 100;
    canvas.height = textHeight + 100;

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

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] > threshold) {
        const x = (i / 4) % canvas.width;
        const y = Math.floor(i / 4 / canvas.width);

        if (Math.random() < 0.25) {
          points.push({
            x: (x - canvas.width / 2) / (fontSize / 8),
            y: -(y - canvas.height / 2) / (fontSize / 8),
          });
        }
      }
    }
    return points;
  }, []);

  const morphToText = useCallback(
    (textStr: string, particles: THREE.Points, count: number) => {
      const textPoints = createTextPoints(textStr);

      if (textPoints.length === 0) {
        console.error("No text points generated!");
      }

      const positions = particles.geometry.attributes.position
        .array as Float32Array;
      const targetPositions = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        if (i < textPoints.length) {
          targetPositions[i * 3] = textPoints[i].x;
          targetPositions[i * 3 + 1] = textPoints[i].y;
          targetPositions[i * 3 + 2] = 0;
        } else {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * 30 + 20;

          targetPositions[i * 3] = Math.cos(angle) * radius;
          targetPositions[i * 3 + 1] = Math.sin(angle) * radius;
          targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
      }

      const startPositions = Float32Array.from(positions);
      const animationObj = { progress: 0 };

      gsap.to(animationObj, {
        progress: 1,
        duration: 3,
        ease: "power2.out",
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
          const explosionPositions = new Float32Array(count * 3);
          for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.random() * 50 + 20;

            explosionPositions[i * 3] =
              positions[i * 3] * 5 + Math.cos(angle) * r;
            explosionPositions[i * 3 + 1] =
              positions[i * 3 + 1] * 5 + Math.sin(angle) * r;
            explosionPositions[i * 3 + 2] =
              positions[i * 3 + 2] + Math.random() * 100 + 50;
          }

          const startExplosion = Float32Array.from(positions);
          const explodeObj = { p: 0 };

          gsap.to(explodeObj, {
            p: 1,
            duration: 0.8,
            ease: "power2.in",
            onUpdate: () => {
              const p = explodeObj.p;
              for (let i = 0; i < count; i++) {
                positions[i * 3] =
                  startExplosion[i * 3] +
                  (explosionPositions[i * 3] - startExplosion[i * 3]) * p;
                positions[i * 3 + 1] =
                  startExplosion[i * 3 + 1] +
                  (explosionPositions[i * 3 + 1] - startExplosion[i * 3 + 1]) *
                    p;
                positions[i * 3 + 2] =
                  startExplosion[i * 3 + 2] +
                  (explosionPositions[i * 3 + 2] - startExplosion[i * 3 + 2]) *
                    p;
              }
              particles.geometry.attributes.position.needsUpdate = true;

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
                }, 500);
              }
            },
          });
        },
      });
    },
    [createTextPoints, onComplete, redirectTo, router]
  );

  const initAnimation = useCallback(() => {
    if (!containerRef.current) return;

    if (rendererRef.current) cleanup();

    const scene = new THREE.Scene();
    sceneRef.current = scene;

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

    window.addEventListener("resize", handleResize);

    const count = 15000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const range = 40;
      positions[i * 3] = (Math.random() - 0.5) * range * 1.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * range;
      positions[i * 3 + 2] = (Math.random() - 0.5) * range;

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

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    morphToText(text, particles, count);
  }, [cleanup, handleResize, morphToText, text]);

  useEffect(() => {
    let safetyTimer: NodeJS.Timeout | undefined;
    let startTimer: NodeJS.Timeout | undefined;

    if (trigger) {
      startTimer = setTimeout(() => {
        try {
          if (!containerRef.current) {
            console.error("Container ref missing, retrying...");
            setTimeout(initAnimation, 50);
          } else {
            initAnimation();
          }
        } catch (error) {
          console.error("Animation Init Failed:", error);
          if (redirectTo) router.push(redirectTo);
        }
      }, 20);

      safetyTimer = setTimeout(() => {
        if (redirectTo) router.push(redirectTo);
        if (onComplete) onComplete();
      }, 5000);
    }

    return () => {
      cleanup();
      if (safetyTimer) clearTimeout(safetyTimer);
      if (startTimer) clearTimeout(startTimer);
    };
  }, [cleanup, initAnimation, onComplete, redirectTo, router, trigger]);

  if (!trigger) return null;

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
