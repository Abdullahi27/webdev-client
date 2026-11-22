"use client";

import {
  useEffect,
  useState,
} from "react";

import * as client from "./client";

export default function WorkingWithRemoteObjectsAsync() {
  const [
    assignment,
    setAssignment,
  ] = useState<client.Assignment>({
    id: 1,
    title: "",
    description: "",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const fetchAssignment =
    async () => {
      setAssignment(
        await client.fetchAssignment()
      );
    };

  const updateTitle =
    async () => {
      setAssignment(
        await client.updateTitle(
          assignment.title
        )
      );
    };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-remote-objects-async">
      <h3>
        Working with Objects Asynchronously
      </h3>

      <h4>Assignment</h4>

      <input
        value={assignment.title}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
      />

      <br />

      <input
        value={
          assignment.description
        }
        onChange={(e) =>
          setAssignment({
            ...assignment,
            description:
              e.target.value,
          })
        }
      />

      <br />

      <input
        type="date"
        value={assignment.due}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            due: e.target.value,
          })
        }
      />

      <br />

      <label>
        <input
          type="checkbox"
          checked={
            assignment.completed
          }
          onChange={(e) =>
            setAssignment({
              ...assignment,
              completed:
                e.target.checked,
            })
          }
        />

        Completed
      </label>

      <br />

      <button
        type="button"
        onClick={updateTitle}
        className="rounded bg-blue-600 px-3 py-1.5 text-white"
      >
        Update Title
      </button>

      <pre>
        {JSON.stringify(
          assignment,
          null,
          2
        )}
      </pre>

      <hr />
    </div>
  );
}