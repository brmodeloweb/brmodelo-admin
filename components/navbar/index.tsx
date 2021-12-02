import NavButton from "../nav-button";
import SignOutButton from "../sign-out-button";
import UserAvatar from "../user-avatar";
import { HiTemplate, HiUserGroup, HiFolderOpen } from "react-icons/hi";

function NavBar({ user }) {
  return <section className="min-h-screen flex flex-col py-4 px-2 items-center border-r">
    <UserAvatar avatarUrl={user.avatar_url} />
    <nav className="mt-12 flex flex-col h-full">
      <NavButton path="/">
        <HiTemplate />
      </NavButton>
      <NavButton path="/users">
        <HiUserGroup />
      </NavButton>
      <NavButton path="/models">
        <HiFolderOpen />
      </NavButton>
    </nav>
    <SignOutButton />
  </section>
}

export default NavBar;
