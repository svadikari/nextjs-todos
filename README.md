# NextJS Todos Application

A modern todo application built with Next.js 15.5.5, React 19, TypeScript, and TailwindCSS.

## Features

- Server-side rendering with Next.js
- Modern React with TypeScript support
- Styling with TailwindCSS and Styled Components
- API Routes for todo management
- Authentication pages (Login/Signup)
- Responsive design with mobile-first approach

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/svadikari/nextjs-todos.git
   cd nextjs-todos
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
nextjs-todos/
├── app/                    # App router directory
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── contact/          # Contact page
│   ├── login/            # Authentication pages
│   ├── signup/           # User registration
│   └── pwdreset/         # Password reset
├── components/            # React components
├── public/               # Static assets
└── styles/              # Global styles
```

## Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint for code quality

## Technologies

- Next.js 15.5.5 (with Turbopack)
- React 19.1.0
- TypeScript 5
- TailwindCSS 4
- Styled Components
- ESLint

## Creating a New Next.js App

To create a new Next.js application from scratch:

```bash
npx create-next-app@latest my-next-app
cd my-next-app
```

During the setup, you'll be prompted with several options:

- Would you like to use TypeScript? → Yes
- Would you like to use ESLint? → Yes
- Would you like to use Tailwind CSS? → Yes
- Would you like to use `src/` directory? → No
- Would you like to use App Router? → Yes
- Would you like to customize the default import alias? → No

## Core Components of Next.js Framework

### 1. App Router (app/)

- **Layout Components**: (`layout.tsx`)
  - Shared UI for multiple pages
  - Persistent navigation
  - Maintains state during navigation
- **Page Components**: (`page.tsx`)
  - Unique UI for specific routes
  - Automatically routed based on file structure
- **Loading States**: (`loading.tsx`)
  - Automatic loading UI
  - Suspense boundaries for streaming
- **Error Handling**: (`error.tsx`)
  - Automatic error boundaries
  - Graceful error handling

### 2. Server Components

- Default server-side rendering
- Reduced client-side JavaScript
- Direct backend resource access
- Enhanced security for sensitive data

### 3. Data Fetching

```typescript
// Example of data fetching in Server Component
async function getData() {
  const res = await fetch("https://api.example.com/data");
  return res.json();
}
```

### 4. API Routes (app/api/)

- Built-in API route handling
- Serverless function support
- Route handlers with extended methods (GET, POST, etc.)

```typescript
// Example API route
export async function GET() {
  return Response.json({ message: "Hello from API" });
}
```

### 5. Client Components

```typescript
"use client"; // Client component directive

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 6. Metadata and SEO

```typescript
// In layout.tsx or page.tsx
export const metadata = {
  title: "My Next.js App",
  description: "Built with Next.js",
};
```

### 7. Image Optimization

```typescript
import Image from "next/image";

export default function MyImage() {
  return (
    <Image
      src="/my-image.jpg"
      alt="Description"
      width={500}
      height={300}
      priority
    />
  );
}
```

### 8. Static and Dynamic Rendering

- Automatic static optimization
- Incremental Static Regeneration (ISR)
- Dynamic rendering when needed

### 9. Environment Variables

- `.env.local` for local development
- `.env.production` for production
- Built-in environment variable handling

## License

This project is private and not intended for public distribution.
