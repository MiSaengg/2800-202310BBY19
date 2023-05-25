import NextAuth from "next-auth";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      session: async ({ session, token }) => {
        if (session?.user) {
          session.user.id = token.sub;
        }
        return session;
      },
      jwt: async ({ user, token }) => {
        if (user) {
          token.sub = user.id;
        }
        return token;
      },
    },
    pages: {
      signIn: "/signin",
      newUser: "/newUser",
    },
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: "jwt",
    },
  });
}
