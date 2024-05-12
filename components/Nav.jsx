import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <div className="w-full flex-between mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="promptopia logo"
          width={30}
          height={30}
          className=" object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-2">
            <Link href="create-new-prompt" className="black_btn">
              Create Post
            </Link>
            <button className="outline_btn" onClick={signOut}>
              Sign out
            </button>
            <Image
              src="assets/images/logo.svg"
              alt="logo"
              width={37}
              height={37}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Nav;
