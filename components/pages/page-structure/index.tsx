import Head from "next/head";
import NavBar from "../../navbar";
import PageHeader from "../page-header";

export default function PageStructure({ user, title, children }) {
  return (
    <>
      <Head>
        <title>BR Modelo Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <NavBar user={user} />
        <section className="w-full">
          <PageHeader title={title} />
          {children}
        </section>
      </main>
    </>
  )
}