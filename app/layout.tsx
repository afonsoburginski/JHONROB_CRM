import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './components/nav';
import Toast from './toast';
import { Suspense } from 'react';
import { SelectedProductProvider } from './contexts/selectedProductContext'; // Importe o SelectedProductProvider

export const metadata = {
  title: 'JHONROB CRM',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        <SelectedProductProvider> {/* Adicione o SelectedProductProvider aqui */}
          {children}
        </SelectedProductProvider>
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}