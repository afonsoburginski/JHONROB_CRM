// app/api/auth/auth.ts
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {}
        if (!email || !password) {
          throw new Error("Missing username or password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
      
        console.log('User found:', user);
        if (!user || !(await compare(password, user.password))) {
          throw new Error("Invalid username or password");
        }

        console.log('User found:', user);
        if (!user || !(await compare(password, user.password))) {
          throw new Error("Invalid username or password");
        }
        return { ...user, id: user.id.toString() };
      },
    }),
  ],
};