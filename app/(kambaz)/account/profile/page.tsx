"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  useAccountContext,
  type User,
} from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] =
    useState<User | null>(null);

  const {
    currentUser,
    setCurrentUser,
  } = useAccountContext();

  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }

    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) {
    return null;
  }

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      <input
        id="wd-username"
        placeholder="username"
        value={profile.username}
        onChange={(e) =>
          setProfile({
            ...profile,
            username: e.target.value,
          })
        }
      />

      <br />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={profile.password}
        onChange={(e) =>
          setProfile({
            ...profile,
            password: e.target.value,
          })
        }
      />

      <br />

      <input
        id="wd-firstname"
        placeholder="First Name"
        value={profile.firstName}
        onChange={(e) =>
          setProfile({
            ...profile,
            firstName: e.target.value,
          })
        }
      />

      <br />

      <input
        id="wd-lastname"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={(e) =>
          setProfile({
            ...profile,
            lastName: e.target.value,
          })
        }
      />

      <br />

      <input
        id="wd-email"
        placeholder="email"
        type="email"
        value={profile.email}
        onChange={(e) =>
          setProfile({
            ...profile,
            email: e.target.value,
          })
        }
      />

      <br />

      <select
        id="wd-role"
        value={profile.role}
        onChange={(e) =>
          setProfile({
            ...profile,
            role: e.target.value as User["role"],
          })
        }
      >
        <option value="USER">
          User
        </option>

        <option value="ADMIN">
          Admin
        </option>

        <option value="FACULTY">
          Faculty
        </option>

        <option value="STUDENT">
          Student
        </option>
      </select>

      <br />

      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
      >
        Sign out
      </button>
    </div>
  );
}