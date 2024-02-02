// app/api/auth/route.ts
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" }, // campo de nome ou email
        password: { label: "Password", type: "password" }
      },
      // @ts-ignore
      async authorize(credentials) {
        const { username, password } = credentials ?? {}
        if (!username || !password) {
          throw new Error("Missing username or password");
        }
        const user = await prisma.user.findFirst({
          where: {
            OR: [
              { email: username },
              { name: username },
            ],
          },
        });
        if (!user || !(await compare(password, user.password))) {
          throw new Error("Invalid username or password");
        }
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };