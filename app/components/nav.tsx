// nav.tsx
import { getSession, SessionProvider } from 'next-auth/react'
import Navbar from './navbar';
import { Session } from 'next-auth';
import { GetServerSidePropsContext } from 'next';

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}
interface NavProps {
  session: Session | null;
}

export default function Nav({ session }: NavProps) {
  return <Navbar user={session?.user} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  return {
    props: { session }
  }
}