"use client";

import {
  useState,
} from "react";

import Link from "next/link";

import {
  useRouter,
} from "next/navigation";

import {
  useAccountContext,
} from "../AccountContext";

import * as client from "../client";

export default function Signin() {
  const router =
    useRouter();

  const {
    setCurrentUser,
  } =
    useAccountContext();

  const [
    credentials,
    setCredentials,
  ] = useState({
    username: "",
    password: "",
  });

  const signin =
    async () => {
      const user =
        await client.signin(
          credentials
        );

      if (!user) {
        return;
      }

      setCurrentUser(user);

      router.push(
        "/dashboard"
      );
    };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>

      <input
        value={
          credentials.username
        }
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username:
              e.target.value,
          })
        }
        placeholder="username"
      />

      <br />

      <input
        type="password"
        value={
          credentials.password
        }
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password:
              e.target.value,
          })
        }
        placeholder="password"
      />

      <br />

      <button
        type="button"
        onClick={signin}
      >
        Sign in
      </button>

      <br />

      <Link href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}