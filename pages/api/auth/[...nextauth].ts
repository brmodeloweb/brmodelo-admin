import NextAuth from "next-auth";
import Providers from "next-auth/providers";

type Redirect = {
  baseUrl: string
}

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user) {
      // const contributorsResponse = await fetch('https://api.github.com/repos/brmodeloweb/brmodelo-app/contributors');
      // const contributors = await contributorsResponse.json();
      // return contributors.map(({ login }) => login).includes(user.name);
      return true;
    },
    redirect(url, baseUrl) {
      return baseUrl
    },
  },
});
