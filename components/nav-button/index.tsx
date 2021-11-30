import { ReactNode } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  path: string;
  children: ReactNode;
};

export default function NavButton({ path, children }: Props) {
  const router = useRouter();

  const classes = classNames(
    "h-8 w-8 flex justify-center items-center rounded-lg hover:bg-gray-200 my-10 hover:shadow",
    {
      "nav-button bg-gray-200 shadow": router.asPath === path,
    }
  );
  
  return (
    <Link href={path}>
      <a className={classes}>{children}</a>
    </Link>
  );
}
