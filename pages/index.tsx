import Head from "next/head";
import { getSession, signOut } from "next-auth/client";
import github from "../services/github";

export default function Home({ user }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>Signed in as {user.login}</h1>
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  const user = await github.getUser(session.user.name);

  return {
    props: { user }
  }
}
