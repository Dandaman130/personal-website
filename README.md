# Personal Website - Dan Dunleavy

A sleek, modern personal website built with Next.js 15.5.2, Tailwind CSS, and TypeScript, following black box design principles for maintainability and modularity.

## 🏗️ Architecture Overview

This website follows a modular, black box architecture where each component is a replaceable unit with clean interfaces:

### Core Primitives
- **PersonalInfo**: Name, title, tagline, contact information
- **Project**: Title, description, technologies, links, highlight status
- **Skill**: Name, proficiency level, organized by categories
- **Theme**: Light/dark mode with system preference detection

### Black Box Components
- **Hero Section**: Personal branding with animated tagline
- **Projects**: Filterable showcase with featured project highlighting
- **Skills**: Categorized skill display with proficiency indicators
- **Contact**: Simple email contact form
- **Theme System**: Complete light/dark mode management
- **Layout System**: Mobile-responsive container system

## 🚀 Features

- ✅ **Fully Responsive**: Mobile-first design that scales beautifully
- ✅ **Dark/Light Theme**: Automatic system detection with manual toggle
- ✅ **Modern Design**: Clean, professional greyscale color palette
- ✅ **Conservative Animations**: Subtle, purposeful animations that enhance UX
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Modular Architecture**: Easy to maintain and extend

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with Turbopack
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Heroicons (embedded SVG)
- **Deployment Ready**: Vercel/Netlify compatible

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and theme variables
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Main page composition
├── components/             # Reusable UI components
│   ├── Hero.tsx            # Hero section with branding
│   ├── Projects.tsx        # Project showcase
│   ├── Skills.tsx          # Skills categorization
│   ├── Contact.tsx         # Contact section
│   └── ThemeToggle.tsx     # Theme switching component
├── contexts/               # React contexts
│   └── ThemeContext.tsx    # Theme state management
├── data/                   # Data layer (easily replaceable)
│   └── siteData.ts         # All site content and configuration
└── types/                  # TypeScript type definitions
    └── index.ts            # Core data types
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Updating Content
All content is centralized in `src/data/siteData.ts`:
- Personal information and tagline
- Project details and technologies
- Skills and proficiency levels

### Styling
- Theme colors: `src/app/globals.css`
- Component styles: Individual component files using Tailwind classes

### Adding New Sections
1. Create component in `src/components/`
2. Add data types to `src/types/index.ts`
3. Add data to `src/data/siteData.ts`
4. Import and use in `src/app/page.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

All components are mobile-first and scale appropriately across devices.

## 🎯 Black Box Design Principles

Each component follows these principles:
- **Single Responsibility**: One clear purpose per component
- **Clean Interfaces**: Props define what goes in, JSX defines what comes out
- **Replaceable**: Any component can be rewritten using only its interface
- **Data-Driven**: Content separated from presentation logic
- **Type-Safe**: Full TypeScript coverage for reliability

## 📈 Performance

- Server-side rendering with Next.js
- Optimized bundle sizes with Turbopack
- Smooth 60fps animations with CSS transforms
- Minimal JavaScript for fast loading

---

Built with ❤️ by Dan Dunleavy
