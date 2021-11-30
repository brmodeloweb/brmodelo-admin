import { signIn, providers } from "next-auth/client";
import Image from "next/image";


export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-login">
      <section className="box-border shadow rounded p-8 h-48 flex flex-col justify-between bg-gray-100">
        <header className="flex items-center">
          <Image
            src="https://app.brmodeloweb.com/assets/img/brmodelo-logo-square.svg"
            width={42}
            height={42}
          />
          <h1 className="text-2xl text-green-700 ml-4">Br Modelo Admin</h1>
        </header>
        <button
          className="my-6 p-2 w-full text-center bg-white rounded-sm flex items-center border border-gray-300"
          onClick={() => {
            signIn("github");
          }}
        >
          <Image src="/GitHub-Mark-32px.png" width={32} height={32} />
          <span className="ml-4">Sign in with GitHub</span>
        </button>
      </section>
    </main>
  );
}
