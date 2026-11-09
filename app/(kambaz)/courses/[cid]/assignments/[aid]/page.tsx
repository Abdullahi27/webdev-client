"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  const courseId =
    typeof cid === "string"
      ? cid
      : "";

  const assignmentId =
    typeof aid === "string"
      ? aid
      : "";

  const router = useRouter();

  const assignments =
    useAssignmentsStore(
      (state) => state.assignments
    );

  const addAssignment =
    useAssignmentsStore(
      (state) => state.addAssignment
    );

  const updateAssignment =
    useAssignmentsStore(
      (state) => state.updateAssignment
    );

  const [assignment, setAssignment] =
    useState<Assignment>({
      ...emptyAssignment,
      course: courseId,
    });

  useEffect(() => {
    if (assignmentId === "new") {
      setAssignment({
        ...emptyAssignment,
        course: courseId,
      });

      return;
    }

    const existing =
      assignments.find(
        (item) =>
          item._id === assignmentId
      );

    if (existing) {
      setAssignment(existing);
    }
  }, [
    assignmentId,
    courseId,
    assignments,
  ]);

  const save = () => {
    if (assignmentId === "new") {
      addAssignment({
        ...assignment,
        course: courseId,
      });
    } else {
      updateAssignment(assignment);
    }

    router.push(
      `/courses/${courseId}/assignments`
    );
  };

  const cancel = () => {
    router.push(
      `/courses/${courseId}/assignments`
    );
  };

  return (
    <div
      id="wd-assignment-editor"
      className="max-w-2xl"
    >
      <h2>
        {assignmentId === "new"
          ? "New Assignment"
          : "Edit Assignment"}
      </h2>

      <label
        htmlFor="wd-assignment-name"
        className="mb-1 block font-medium"
      >
        Assignment Name
      </label>

      <input
        id="wd-assignment-name"
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-2"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
      />

      <label
        htmlFor="wd-assignment-description"
        className="mb-1 block font-medium"
      >
        Description
      </label>

      <textarea
        id="wd-assignment-description"
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-2"
        rows={5}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            description:
              e.target.value,
          })
        }
      />

      <label
        htmlFor="wd-assignment-points"
        className="mb-1 block font-medium"
      >
        Points
      </label>

      <input
        id="wd-assignment-points"
        type="number"
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-2"
        value={assignment.points}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            points:
              Number(
                e.target.value
              ),
          })
        }
      />

      <label
        htmlFor="wd-assignment-due-date"
        className="mb-1 block font-medium"
      >
        Due Date
      </label>

      <input
        id="wd-assignment-due-date"
        type="date"
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-2"
        value={assignment.due}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            due: e.target.value,
          })
        }
      />

      <label
        htmlFor="wd-assignment-available-from"
        className="mb-1 block font-medium"
      >
        Available From
      </label>

      <input
        id="wd-assignment-available-from"
        type="date"
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-2"
        value={assignment.available}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            available:
              e.target.value,
          })
        }
      />

      <label
        htmlFor="wd-assignment-available-until"
        className="mb-1 block font-medium"
      >
        Available Until
      </label>

      <input
        id="wd-assignment-available-until"
        type="date"
        className="mb-4 block w-full rounded border border-neutral-300 px-3 py-2"
        value={
          assignment.until ?? ""
        }
        onChange={(e) =>
          setAssignment({
            ...assignment,
            until:
              e.target.value,
          })
        }
      />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={cancel}
          id="wd-assignment-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={save}
          id="wd-assignment-save"
          className="rounded bg-red-600 px-4 py-2 font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}