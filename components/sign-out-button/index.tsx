import { signOut } from "next-auth/client";
import { HiLogout } from "react-icons/hi";

export default function SignOutButton() {
  return (
    <button className="h-10 w-10 flex justify-center items-center rounded-lg hover:bg-gray-200 hover:shadow" onClick={() => signOut()}>
      <HiLogout />
    </button>
  )
}