import Head from "next/head";
import { getSession, signIn, signOut, useSession } from "next-auth/client";

export default function Home({ session }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>Signed in as {session.user.name}</h1>
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
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}
