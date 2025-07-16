# React + Vite + Tailwind CSS v4

โปรเจค React ที่ติดตั้ง Tailwind CSS v4 พร้อมฟีเจอร์ใหม่ล่าสุด

## ฟีเจอร์ที่ใช้งาน

### 🚀 Tailwind CSS v4 Features
- **High-performance engine** - ประสิทธิภาพที่เร็วขึ้น 3.5x สำหรับ full builds
- **Vite Plugin** - การรวมตัวที่แน่นหนาสำหรับประสิทธิภาพสูงสุด
- **CSS-first configuration** - กำหนดค่าผ่าน CSS แทน JavaScript
- **Automatic content detection** - ตรวจจับไฟล์ template อัตโนมัติ
- **CSS theme variables** - เข้าถึง design tokens ผ่าน CSS variables

### 🎨 New Visual Features
- **Container Queries** - `@container`, `@sm:`, `@lg:` variants
- **3D Transforms** - `rotate-x-*`, `rotate-y-*`, `perspective-*`
- **Enhanced Gradients** - Linear angles, conic, radial gradients
- **Inset Shadows** - `inset-shadow-*`, `inset-ring-*`
- **P3 Color Palette** - สีที่สดใสกว่าด้วย OKLCH
- **Dynamic Values** - `grid-cols-15`, custom spacing values

## การติดตั้ง

### 1. ติดตั้ง packages
```bash
npm install tailwindcss @tailwindcss/vite
```

### 2. อัปเดต `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 3. เพิ่ม Tailwind ใน CSS
```css
@import "tailwindcss";

/* CSS-first configuration */
@theme {
  --font-display: "Inter", "Satoshi", sans-serif;
  --breakpoint-3xl: 1920px;
  --color-brand-500: oklch(0.6 0.15 240);
}
```

## การใช้งาน

### รัน development server
```bash
npm run dev
```

### Build สำหรับ production
```bash
npm run build
```

## ตัวอย่างการใช้งานฟีเจอร์ใหม่

### Container Queries
```jsx
<div className="@container">
  <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3">
    {/* Content */}
  </div>
</div>
```

### 3D Transforms
```jsx
<div className="perspective-distant">
  <div className="rotate-x-12 rotate-y-12 transform-3d">
    3D Element
  </div>
</div>
```

### Enhanced Gradients
```jsx
{/* Linear with angle */}
<div className="bg-linear-45 from-pink-500 to-yellow-400" />

{/* Conic gradient */}
<div className="bg-conic from-red-500 via-yellow-500 to-blue-500" />

{/* Radial gradient */}
<div className="bg-radial-[at_center] from-purple-500 to-pink-500" />
```

### Dynamic Grid
```jsx
<div className="grid grid-cols-15 gap-2">
  {/* 15 columns without configuration */}
</div>
```

## เอกสารอ้างอิง

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Blog Post](https://tailwindcss.com/blog/tailwindcss-v4)
- [Vite Plugin Documentation](https://tailwindcss.com/docs/installation/using-vite)

## การอัปเกรดจาก v3

หากคุณมีโปรเจคที่ใช้ Tailwind v3 อยู่แล้ว สามารถใช้ [upgrade tool](https://tailwindcss.com/docs/upgrade-guide) ได้+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
