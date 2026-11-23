"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  emptyUser,
  useAccountContext,
} from "../AccountContext";

import * as client from "../client";

export default function Profile() {
  const router =
    useRouter();

  const {
    currentUser,
    setCurrentUser,
  } =
    useAccountContext();

  const [
    profile,
    setProfile,
  ] = useState(
    currentUser ||
      emptyUser
  );

  useEffect(() => {
    if (currentUser) {
      setProfile(
        currentUser
      );
    }
  }, [currentUser]);

  const updateProfile =
    async () => {
      const user =
        await client.updateUser(
          profile
        );

      setCurrentUser(user);
      setProfile(user);
    };

  const signout =
    async () => {
      await client.signout();

      setCurrentUser(null);

      router.push(
        "/account/signin"
      );
    };

  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>

      <input
        value={
          profile.username
        }
        onChange={(e) =>
          setProfile({
            ...profile,
            username:
              e.target.value,
          })
        }
        placeholder="username"
      />

      <br />

      <input
        value={
          profile.password
        }
        onChange={(e) =>
          setProfile({
            ...profile,
            password:
              e.target.value,
          })
        }
        placeholder="password"
      />

      <br />

      <input
        value={
          profile.firstName
        }
        onChange={(e) =>
          setProfile({
            ...profile,
            firstName:
              e.target.value,
          })
        }
        placeholder="first name"
      />

      <br />

      <input
        value={
          profile.lastName
        }
        onChange={(e) =>
          setProfile({
            ...profile,
            lastName:
              e.target.value,
          })
        }
        placeholder="last name"
      />

      <br />

      <input
        value={
          profile.email
        }
        onChange={(e) =>
          setProfile({
            ...profile,
            email:
              e.target.value,
          })
        }
        placeholder="email"
      />

      <br />

      <select
        value={
          profile.role
        }
        onChange={(e) =>
          setProfile({
            ...profile,
            role:
              e.target.value,
          })
        }
      >
        <option value="STUDENT">
          Student
        </option>

        <option value="FACULTY">
          Faculty
        </option>

        <option value="ADMIN">
          Admin
        </option>
      </select>

      <br />

      <button
        type="button"
        onClick={
          updateProfile
        }
      >
        Update
      </button>

      <button
        type="button"
        onClick={signout}
      >
        Sign out
      </button>
    </div>
  );
}