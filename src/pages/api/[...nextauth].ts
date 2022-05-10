import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  // Seting up the callbacks so we receive the user id from the database when using useSession()
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session({ session, token, user }: { session: any; token: any; user: any }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session; // The return type will match the one returned in `useSession()`
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },

  adapter: PrismaAdapter(prisma), // Prisma adapter so we can automatically create users in the database when signing up
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
});
