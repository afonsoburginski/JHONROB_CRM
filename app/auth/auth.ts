// auth.ts
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.OAUTH_CLIENT_KEY,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session(session, token) {
      session.role = token.role;
      return session;
    },
    async signIn(user, account, profile) {
      const { email } = profile;
      const dbUser = await prisma.user.findUnique({
        where: { email },
      });
      if (dbUser) {
        user.role = dbUser.role;
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
});