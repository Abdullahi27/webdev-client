"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

import * as db from "../../../../database";

import {
  emptyUser,
  type User,
} from "../../../../account/AccountContext";

import {
  useEnrollmentsStore,
} from "../../../../store/enrollmentsStore";

export default function PeopleTable() {
  const { cid } = useParams();

  const courseId =
    typeof cid === "string"
      ? cid
      : "";

  const [users, setUsers] =
    useState<User[]>(
      db.users as User[]
    );

  const [user, setUser] =
    useState<User>({
      ...emptyUser,
    });

  const enrollments =
    useEnrollmentsStore(
      (state) =>
        state.enrollments
    );

  const enroll =
    useEnrollmentsStore(
      (state) => state.enroll
    );

  const unenroll =
    useEnrollmentsStore(
      (state) => state.unenroll
    );

  const courseEnrollments =
    enrollments.filter(
      (enrollment) =>
        enrollment.course ===
        courseId
    );

  const people =
    users.filter((user) =>
      courseEnrollments.some(
        (enrollment) =>
          enrollment.user ===
          user._id
      )
    );

  const addUser = () => {
    if (
      user.firstName.trim() === "" ||
      user.lastName.trim() === ""
    ) {
      return;
    }

    const newUser: User = {
      ...user,
      _id:
        crypto.randomUUID(),
    };

    setUsers([
      ...users,
      newUser,
    ]);

    enroll(
      newUser._id,
      courseId
    );

    setUser({
      ...emptyUser,
    });
  };

  const removeUser = (
    userId: string
  ) => {
    unenroll(
      userId,
      courseId
    );
  };

  return (
    <div
      id="wd-people-table"
      className="overflow-x-auto"
    >
      <h2 className="mb-3 text-xl font-semibold">
        People
      </h2>

      <div className="mb-4 flex flex-wrap gap-2">
        <input
          placeholder="First Name"
          value={user.firstName}
          onChange={(e) =>
            setUser({
              ...user,
              firstName:
                e.target.value,
            })
          }
          className="rounded border border-neutral-300 px-3 py-1.5"
          id="wd-people-first-name"
        />

        <input
          placeholder="Last Name"
          value={user.lastName}
          onChange={(e) =>
            setUser({
              ...user,
              lastName:
                e.target.value,
            })
          }
          className="rounded border border-neutral-300 px-3 py-1.5"
          id="wd-people-last-name"
        />

        <input
          placeholder="Login ID"
          value={user.loginId}
          onChange={(e) =>
            setUser({
              ...user,
              loginId:
                e.target.value,
            })
          }
          className="rounded border border-neutral-300 px-3 py-1.5"
          id="wd-people-login-id"
        />

        <select
          value={user.role}
          onChange={(e) =>
            setUser({
              ...user,
              role:
                e.target.value as User["role"],
            })
          }
          className="rounded border border-neutral-300 px-3 py-1.5"
          id="wd-people-role"
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

        <button
          type="button"
          onClick={addUser}
          id="wd-add-person"
          className="rounded bg-red-600 px-3 py-1.5 font-medium text-white"
        >
          Add Person
        </button>
      </div>

      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">
              Name
            </th>

            <th className="p-2">
              Login ID
            </th>

            <th className="p-2">
              Section
            </th>

            <th className="p-2">
              Role
            </th>

            <th className="p-2">
              Last Activity
            </th>

            <th className="p-2">
              Total Activity
            </th>

            <th className="p-2">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {people.map(
            (person) => (
              <tr
                key={person._id}
                className="border-b border-neutral-200 odd:bg-neutral-50"
              >
                <td
                  className="wd-full-name p-2"
                >
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-2xl text-neutral-500" />

                    <span>
                      <span className="wd-first-name">
                        {
                          person.firstName
                        }
                      </span>{" "}
                      <span className="wd-last-name">
                        {
                          person.lastName
                        }
                      </span>
                    </span>
                  </div>
                </td>

                <td
                  className="wd-login-id p-2"
                >
                  {person.loginId}
                </td>

                <td className="p-2">
                  {person.section}
                </td>

                <td className="p-2">
                  {person.role}
                </td>

                <td className="p-2">
                  {
                    person.lastActivity
                  }
                </td>

                <td className="p-2">
                  {
                    person.totalActivity
                  }
                </td>

                <td className="p-2">
                  <button
                    type="button"
                    onClick={() =>
                      removeUser(
                        person._id
                      )
                    }
                    className="rounded bg-red-600 px-2 py-1 text-white"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
