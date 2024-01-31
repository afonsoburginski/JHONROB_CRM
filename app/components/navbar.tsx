// navbar.tsx
'use client'
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { signOut, getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface AuthStatusProps {
  user?: User;
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

export default function AuthStatus({ user }: AuthStatusProps) {
  const pathname = usePathname();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };

    fetchSession();
  }, []);

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image src="/logo.png" alt="Logo" width={130} height={40} priority />
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
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
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {session && (
                  <Menu as="div" className="ml-3 relative">
                    <Menu.Button className="flex items-center">
                      <span className="mr-3">Olá, {session.user?.name}</span>
                      <Image
                        src={session.user?.image || 'https://avatar.vercel.sh/nextjs'}
                        height={32}
                        width={32}
                        alt={`${session.user?.name || 'placeholder'} avatar`}
                        className="h-8 w-8 rounded-full"
                        priority
                      />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/profile"
                              className={`${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              Perfil
                            </Link>
                          )}
                        </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={`${
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                onClick={() => signOut()}
                              >
                                Sair
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}