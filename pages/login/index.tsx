import { signIn } from "next-auth/client";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="box-border shadow rounded p-4">
        <header className="flex items-center">
          <Image
            src="https://app.brmodeloweb.com/assets/img/brmodelo-logo-square.svg"
            width={42}
            height={42}
          />
          <h1 className="text-2xl text-green-700 ml-4">Br Modelo Admin</h1>
        </header>
        <button
          className="my-6 p-2 w-full text-center text-white bg-green-700 rounded-sm"
          onClick={() => {
            signIn();
          }}
        >
          Sign in
        </button>
      </section>
    </main>
  );
}
