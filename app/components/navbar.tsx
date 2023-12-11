// navbar.tsx
'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';

interface User {
  id: number;
  name: string | null;
  email: string;
  password: string;
  image: string | null;
  role: 'USER' | 'ADMIN';
}

interface Session {
  user: User;
}


const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Gerenciador', href: '/manager' },
  { name: 'Propostas', href: '/propose' },
  { name: 'Cadastros', href: '/products' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ session }: { session: Session }) {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image src="/logo.png" alt="Logo" width={32} height={32} />
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'border-slate-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button onClick={() => signOut()}>Sign out</button>
              {session && (
                <>
                  Signed in as {session.user?.email} <br />
                  <button onClick={() => signOut()}>Sign out</button>
                </>
              ) : (
                <>
                  Not signed in <br />
                  <button onClick={() => signIn()}>Sign in</button>
                </>
              )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
