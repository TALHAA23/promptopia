import { signOut, signIn, getProviders, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  // useEffect(() => {
  //   const getProviders = async () => {
  //     const response = await getProviders();
  //     setProviders(response);
  //   };
  //   getProviders();
  // }, []);

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

      {/* desktop navigation */}
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
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="">
            <Image
              src="/assets/images/logo.svg"
              alt="promptopia logo"
              width={30}
              height={30}
              onClick={() => setToggleDropDown((prev) => !prev)}
              className=" object-contain"
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="profile"
                  onClick={() => setToggleDropDown(false)}
                  className="dropdown_link"
                >
                  My Profile
                </Link>
                <Link
                  href="create-prompt"
                  onClick={() => setToggleDropDown(false)}
                  className="dropdown_link"
                >
                  Create Prompt
                </Link>
                <button
                  className="mt-5 w-full black_btn"
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
