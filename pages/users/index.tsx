import EmptyPage from "../../components/pages/empty-page";
import PageStructure from "../../components/pages/page-structure";
import { getSession } from "next-auth/client";
import github from "../../services/github";

export default function Users({ user }) {
  return (
    <PageStructure user={user} title="Users">
      <EmptyPage />
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
