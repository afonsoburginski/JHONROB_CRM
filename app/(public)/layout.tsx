// These styles apply to every route in the application
import "../globals.css";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export const metadata = {
  title: 'JHONROB CRM',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense fallback="Loading...">
        </Suspense>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
