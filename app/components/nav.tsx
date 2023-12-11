// nav.tsx
import Navbar from './navbar';

function Nav({ session }) {
  console.log('Session:', session);
  return <Navbar user={session?.user} session={session} />;
}

export default Nav;