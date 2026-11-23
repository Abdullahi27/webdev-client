"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  useAccountContext,
} from "../AccountContext";

import * as client from "../client";

export default function Signup() {
  const router =
    useRouter();

  const {
    setCurrentUser,
  } =
    useAccountContext();

  const [
    user,
    setUser,
  ] = useState({
    username: "",
    password: "",
  });

  const signup =
    async () => {
      const current =
        await client.signup(
          user
        );

      setCurrentUser(
        current
      );

      router.push(
        "/account/profile"
      );
    };

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>

      <input
        value={user.username}
        onChange={(e) =>
          setUser({
            ...user,
            username:
              e.target.value,
          })
        }
        placeholder="username"
      />

      <br />

      <input
        type="password"
        value={user.password}
        onChange={(e) =>
          setUser({
            ...user,
            password:
              e.target.value,
          })
        }
        placeholder="password"
      />

      <br />

      <button
        type="button"
        onClick={signup}
      >
        Sign up
      </button>
    </div>
  );
}