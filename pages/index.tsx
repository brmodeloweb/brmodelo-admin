import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session] = useSession();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {session ? (
          <>
            <h1>Signed in as {session.user.name}</h1>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <h1>Welcome to Br Modelo Admin</h1>
            <button
              onClick={() => {
                signIn();
              }}
            >
              Sign in
            </button>
          </>
        )}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
