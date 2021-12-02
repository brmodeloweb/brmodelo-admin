import { getSession } from "next-auth/client";
import github from "../services/github";
import PageStructure from "../components/pages/page-structure";
import MainStats from "../components/stats/main-stats";

export default function Home({ user }) {
  return (
    <PageStructure user={user} title="Dashboard">
      <section className="relative bg-gray-50 page-content">
        <MainStats />
      </section>
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
