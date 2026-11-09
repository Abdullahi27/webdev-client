"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  onDelete: () => void;
}) {
  const [showDeleteDialog, setShowDeleteDialog] =
    useState(false);

  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />

      <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
        <div>
          <Link
            href={`/courses/${cid}/assignments/${aid}`}
            className="wd-assignment-link font-semibold text-neutral-900 no-underline"
          >
            {title}
          </Link>

          <div className="mt-1 text-sm text-neutral-600">
            {details}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowDeleteDialog(true)}
          className="text-red-600"
          title="Delete assignment"
        >
          <FaTrash />
        </button>
      </div>

      {showDeleteDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded bg-white p-4 shadow-lg">
            <h3 className="mb-3 text-lg font-semibold">
              Delete Assignment
            </h3>

            <p className="mb-4">
              Are you sure you want to remove {title}?
            </p>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() =>
                  setShowDeleteDialog(false)
                }
                className="rounded border px-3 py-1.5"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => {
                  onDelete();
                  setShowDeleteDialog(false);
                }}
                className="rounded bg-red-600 px-3 py-1.5 text-white"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

