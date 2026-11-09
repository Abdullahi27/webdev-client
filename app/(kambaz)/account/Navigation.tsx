"use client";

import Link from "next/link";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();

  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);

  return (
    <div id="wd-account-navigation">
      {links.map((link) => (
        <span key={link}>
          <Link href={`/account/${link}`}>
            {link === "signin"
              ? "Signin"
              : link === "signup"
                ? "Signup"
                : "Profile"}
          </Link>

          <br />
        </span>
      ))}
    </div>
  );
}