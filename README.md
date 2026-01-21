# 🎨 Professional Tailwind CSS Theme Setup

A complete, production-ready Tailwind CSS theme system with custom colors, typography, and reusable components.

![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)

---

## ✨ Features

- ✅ **Custom Color System** - Primary (#066EB6) & Secondary (#6BC06A) with full shade scales
- ✅ **Barlow Font Family** - Professional typography from Google Fonts
- ✅ **Dark Mode Support** - Class-based theme switching with CSS variables
- ✅ **Reusable Components** - Button, Input, Card with multiple variants
- ✅ **Fully Responsive** - Mobile-first design with custom breakpoints
- ✅ **TypeScript** - Complete type safety
- ✅ **Accessible** - ARIA-compliant with focus states
- ✅ **Production Ready** - Clean, scalable architecture

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the complete theme demo.

---

## 📚 Documentation

Comprehensive documentation is available:

- **[QUICK_START.md](./QUICK_START.md)** - Get started immediately
- **[THEME_DOCUMENTATION.md](./THEME_DOCUMENTATION.md)** - Complete theme guide
- **[COLOR_REFERENCE.md](./COLOR_REFERENCE.md)** - All colors with hex codes
- **[COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)** - Component usage examples
- **[FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)** - Project organization
- **[SUMMARY.md](./SUMMARY.md)** - Complete feature overview

---

## 🎨 Color Palette

### Primary (#066EB6)
Blue color scale with 10 shades (50-900)

### Secondary (#6BC06A)
Green color scale with 10 shades (50-900)

### Semantic Colors
- Success: Green (#22c55e)
- Warning: Amber (#f59e0b)
- Error: Red (#ef4444)

---

## 🧩 Components

### Button
5 variants (primary, secondary, outline, danger, ghost) × 3 sizes (sm, md, lg)

```tsx
import { Button } from "@/components";

<Button variant="primary" size="lg">Click Me</Button>
```

### Input
With label, error states, helper text, and icon support

```tsx
import { Input } from "@/components";

<Input label="Email" error="Invalid email" fullWidth />
```

### Card
3 variants (default, bordered, elevated) with subcomponents

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components";

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

---

## 🌓 Dark Mode

Toggle dark mode by adding/removing the `dark` class:

```tsx
document.documentElement.classList.toggle('dark');
```

All colors automatically adapt using CSS variables.

---

## 📁 Project Structure

```
smartDT/
├── tailwind.config.ts              # Theme configuration
├── src/
│   ├── app/
│   │   ├── globals.css             # Global styles & CSS variables
│   │   └── page.tsx                # Demo page
│   └── components/
│       ├── ui/
│       │   ├── Button.tsx
│       │   ├── Input.tsx
│       │   └── Card.tsx
│       └── index.ts                # Component exports
└── Documentation files
```

---

## 🎯 Usage Example

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from "@/components";

export default function MyPage() {
  return (
    <div className="container mx-auto p-6">
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input 
            label="Email" 
            type="email"
            placeholder="you@example.com"
            fullWidth 
          />
          <Button variant="primary" fullWidth>
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## 🛠️ Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Lint code
```

---

## 📊 What's Included

### Configuration
- ✅ Complete Tailwind config with 61 color values
- ✅ Barlow font family (9 weights)
- ✅ Custom spacing, shadows, and border radius
- ✅ 6 responsive breakpoints

### Components
- ✅ 3 UI components (Button, Input, Card)
- ✅ 5 Card subcomponents
- ✅ Full TypeScript support
- ✅ Accessible and responsive

### Documentation
- ✅ 6 comprehensive guides
- ✅ 50+ code examples
- ✅ Best practices
- ✅ Quick reference

---

## 🎓 Learn More

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Release](https://tailwindcss.com/blog/tailwindcss-v4-alpha)

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### TypeScript
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

## 🤝 Contributing

This is a theme setup for your project. Feel free to:
- Customize colors in `tailwind.config.ts`
- Add new components in `src/components/ui/`
- Extend the theme in `src/app/globals.css`

---

## 📄 License

This theme setup is provided as-is for use in your projects.

---

## 🎉 Ready to Build!

Your professional Tailwind CSS theme is ready. Start creating amazing UIs!

```bash
npm run dev
```

**Happy coding! 🚀**

---

**Built with ❤️ using Tailwind CSS v4, Next.js 16, and TypeScript 5**
