# NeoScratch Tech Platform

**NeoScratch** is a premier Rwanda-based software development, graphic design, and engineering studio. This repository contains the source code for the official NeoScratch web platform, built with **Next.js** to ensure a fast, SEO-optimized, and premium user experience.

![NeoScratch](/public/neoscratch.png)

## 🌐 Live Site
[https://neoscratch.com](https://neoscratch.com)

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) + [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) (shadcn/ui)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js**: `v18.0.0` or higher
- **npm** (recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/theodevrwanda/rwandascratch.git
   cd rwandascratch
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The application will be running locally at `http://localhost:3000`.

---

## 📁 Project Structure

```text
├── public/              # Static assets (images, manifest, robots.txt, sitemap.xml)
├── src/
│   ├── app/             # Next.js App Router (Layouts, Pages, SEO)
│   ├── components/      # Reusable React components (UI library, Layouts)
│   ├── data/            # Static data (Projects, Testimonials)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility library functions
│   └── index.css        # Global stylesheet (Apple-style theme)
├── tailwind.config.ts   # Tailwind configuration
└── next.config.js       # Next.js configuration
```

## 🎨 Theme & Styling

The project features a **custom premium UI design** mimicking modern Apple-like aesthetics with bright orange/peach gradients.
- **index.css**: Contains global CSS variables and specific keyframe animations mimicking `cubic-bezier(0.16, 1, 0.3, 1)` easing.
- **Micro-animations**: Uses Framer Motion for premium transitions and hover effects.

---

## ⚡ Deployment

This application is optimized for deployment on **Vercel**.

**Build the application:**
```bash
npm run build
```

## 🤝 Contributing

When contributing to this repository:
1. Ensure all new components fit within the high-fidelity aesthetic of `NeoScratch`.
2. Maintain SEO best practices (titles, meta descriptions, alt tags).
3. Do not commit sensitive data.
