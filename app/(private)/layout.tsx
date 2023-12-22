// app/layout.tsx
import '../globals.css';
import { Analytics } from '@vercel/analytics/react';
import Nav from '../components/nav';
import Toast from '../toast';
import { Suspense } from 'react';
import { SelectedProductProvider } from '../contexts/selectedProductContext';

import AuthStatus from 'app/components/authcomponents/auth-status';
import Navbar from 'app/components/navbar';
;
export const metadata = {
  title: 'JHONROB CRM',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense fallback="Loading...">
          <Navbar />
          <AuthStatus />
          <SelectedProductProvider>
            {children}
          </SelectedProductProvider>
        </Suspense>
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}

export default RootLayout;