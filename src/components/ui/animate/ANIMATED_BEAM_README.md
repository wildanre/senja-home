# Animated Beam Component

Komponen Animated Beam digunakan untuk membuat garis animasi yang menghubungkan elemen-elemen UI, menciptakan efek visual yang menarik untuk menunjukkan hubungan atau alur antara komponen.

## Konsep Dasar

### 1. **Container**
- Wrapper yang menampung semua elemen dan beam
- Menggunakan `AnimatedBeamContainer` untuk mengelola multiple beams

### 2. **Nodes (Elemen yang Dihubungkan)**
- Elemen HTML yang akan dihubungkan dengan beam
- Harus menggunakan `ref` untuk mendapatkan posisi elemen
- Bisa berupa div, button, card, atau elemen HTML lainnya

### 3. **Beams (Garis Animasi)**
- Garis SVG yang menghubungkan dua node
- Memiliki animasi partikel yang bergerak sepanjang path
- Dapat dikustomisasi dengan berbagai props

## Cara Penggunaan

### Contoh Sederhana

```tsx
"use client";

import { useRef } from "react";
import { AnimatedBeamContainer } from "@/components/ui/animate";

export function MyComponent() {
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);

  return (
    <AnimatedBeamContainer
      beams={[
        {
          from: node1Ref,
          to: node2Ref,
        },
      ]}
    >
      <div ref={node1Ref} className="h-20 w-20 bg-black rounded-full" />
      <div ref={node2Ref} className="h-20 w-20 bg-black rounded-full" />
    </AnimatedBeamContainer>
  );
}
```

### Contoh dengan Multiple Beams

```tsx
"use client";

import { useRef } from "react";
import { AnimatedBeamContainer } from "@/components/ui/animate";

export function MultiBeamExample() {
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);

  return (
    <AnimatedBeamContainer
      className="min-h-screen p-8"
      beams={[
        {
          from: node1Ref,
          to: node2Ref,
          curvature: 0.3,
          duration: 3,
        },
        {
          from: node2Ref,
          to: node3Ref,
          curvature: -0.2,
          duration: 3,
          delay: 0.5,
        },
      ]}
    >
      <div className="flex items-center justify-center gap-8">
        <div ref={node1Ref} className="h-24 w-24 bg-black rounded-full" />
        <div ref={node2Ref} className="h-24 w-24 bg-black rounded-full" />
        <div ref={node3Ref} className="h-24 w-24 bg-black rounded-full" />
      </div>
    </AnimatedBeamContainer>
  );
}
```

## Props

### AnimatedBeamContainer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | CSS classes untuk container |
| `children` | `ReactNode` | - | Elemen children yang akan dihubungkan |
| `beams` | `BeamConfig[]` | - | Array konfigurasi beam |

### BeamConfig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `from` | `RefObject<HTMLElement>` | - | **Required** - Ref ke elemen awal |
| `to` | `RefObject<HTMLElement>` | - | **Required** - Ref ke elemen akhir |
| `curvature` | `number` | `0` | Lengkungan beam (positif = ke atas, negatif = ke bawah) |
| `reverse` | `boolean` | `false` | Membalik arah animasi |
| `duration` | `number` | `3` | Durasi animasi dalam detik |
| `delay` | `number` | `0` | Delay sebelum animasi dimulai (detik) |
| `startXOffset` | `number` | `0` | Offset horizontal dari titik awal |
| `startYOffset` | `number` | `0` | Offset vertikal dari titik awal |
| `endXOffset` | `number` | `0` | Offset horizontal dari titik akhir |
| `endYOffset` | `number` | `0` | Offset vertikal dari titik akhir |

## Tips & Best Practices

### 1. **Posisi Container**
- Container harus memiliki `position: relative`
- Pastikan container mencakup semua node yang akan dihubungkan

### 2. **Ref Management**
- Setiap node harus memiliki ref yang unik
- Gunakan `useRef` untuk membuat ref
- Pastikan ref di-assign ke elemen yang benar

### 3. **Responsive Design**
- Beam akan otomatis menyesuaikan saat scroll atau resize
- Pastikan container memiliki ukuran yang tepat

### 4. **Performance**
- Jangan membuat terlalu banyak beam sekaligus (max 10-15)
- Gunakan `curvature` dengan bijak untuk menghindari path yang kompleks

### 5. **Styling**
- Beam menggunakan warna Senja default (`#e7b67c`)
- Anda bisa mengubah warna di komponen `AnimatedBeam` jika perlu

## Use Cases

1. **Hero Section**: Menghubungkan elemen-elemen penting di hero
2. **Feature Showcase**: Menunjukkan hubungan antar fitur
3. **Process Flow**: Menampilkan alur proses atau workflow
4. **Connection Diagram**: Diagram koneksi atau arsitektur
5. **Interactive Elements**: Menghubungkan elemen interaktif

## Troubleshooting

### Beam tidak muncul
- Pastikan `fromRef` dan `toRef` sudah di-assign dengan benar
- Pastikan container memiliki `position: relative`
- Cek apakah elemen sudah di-render sebelum beam dihitung

### Beam tidak update saat scroll
- Beam seharusnya otomatis update, tapi jika tidak, pastikan container tidak memiliki `overflow: hidden` yang memblokir event scroll

### Beam terlalu panjang/pendek
- Gunakan `startXOffset`, `startYOffset`, `endXOffset`, `endYOffset` untuk menyesuaikan titik koneksi

## Contoh Lengkap

Lihat file `animated-beam-example.tsx` untuk contoh implementasi lengkap.

