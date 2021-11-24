import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import githubAPI from "../../../services/github";

export default NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user) {
      const contributors = await githubAPI.getContributors("brmodeloweb/brmodelo-app")
      return contributors.map(({ login }) => login).includes(user.name);
    },
    redirect(_, baseUrl) {
      return baseUrl;
    },
  },
});
