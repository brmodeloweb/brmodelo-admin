import Head from "next/head";
import { getSession, signOut } from "next-auth/client";
import github from "../services/github";
import NavBar from "../components/navbar";
import PageStructure from "../components/pages/page-structure";

export default function Home({ user }) {
  return (
    <PageStructure user={user} title="Dashboard">
      2
    </PageStructure>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  const user = await github.getUser(session.user.name);

  return {
    props: { user },
  };
}
