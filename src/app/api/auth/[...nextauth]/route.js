import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { authOptions } from "@/app/lib/auth";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
});
export { handler as GET, handler as POST };
