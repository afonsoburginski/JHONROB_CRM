// nav.tsx
import { getSession } from 'next-auth/react';
import Navbar from './navbar';

export default function Nav({ session }) {
  if (session) {
    return <Navbar user={session.user} role={session.role} />;
  } else {
    return <Navbar />;
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}