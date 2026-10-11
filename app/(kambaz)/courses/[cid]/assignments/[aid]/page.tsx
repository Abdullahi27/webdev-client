import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  const inputClasses =
    "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";

  const labelClasses =
    "mb-1 block text-sm font-medium text-neutral-700";

  return (
    <div
      id="wd-assignments-editor"
      className="mx-auto max-w-3xl space-y-5"
    >
      <div>
        <label htmlFor="wd-name" className={labelClasses}>
          Assignment Name
        </label>

        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="wd-description" className={labelClasses}>
          Description
        </label>

        <textarea
          id="wd-description"
          className="min-h-[140px] w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
          defaultValue="The assignment is available online Submit a link to the landing page of"
        />
      </div>

      <div>
        <label htmlFor="wd-points" className={labelClasses}>
          Points
        </label>

        <input
          id="wd-points"
          defaultValue={100}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="wd-group" className={labelClasses}>
          Assignment Group
        </label>

        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className={inputClasses}
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div>
        <label htmlFor="wd-display-grade-as" className={labelClasses}>
          Display Grade as
        </label>

        <select
          id="wd-display-grade-as"
          defaultValue="Percentage"
          className={inputClasses}
        >
          <option value="Percentage">Percentage</option>
          <option value="Points">Points</option>
        </select>
      </div>

      <div>
        <label htmlFor="wd-submission-type" className={labelClasses}>
          Submission Type
        </label>

        <select
          id="wd-submission-type"
          defaultValue="Online"
          className={inputClasses}
        >
          <option value="Online">Online</option>
          <option value="Paper">Paper</option>
        </select>

        <div className="mt-4 rounded border border-neutral-300 p-4">
          <h4 className="mb-3 font-semibold">Online Entry Options</h4>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" />
              <span>Text Entry</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                id="wd-website-url"
                defaultChecked
              />
              <span>Website URL</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" id="wd-media-recordings" />
              <span>Media Recordings</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" id="wd-student-annotation" />
              <span>Student Annotation</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" />
              <span>File Uploads</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="wd-assign-to" className={labelClasses}>
          Assign to
        </label>

        <input
          id="wd-assign-to"
          defaultValue="Everyone"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="wd-due-date" className={labelClasses}>
          Due
        </label>

        <input
          id="wd-due-date"
          type="date"
          defaultValue="2024-05-13"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="wd-available-from" className={labelClasses}>
          Available from
        </label>

        <input
          id="wd-available-from"
          type="date"
          defaultValue="2024-05-06"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="wd-available-until" className={labelClasses}>
          Until
        </label>

        <input
          id="wd-available-until"
          type="date"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="wd-ai-editor-notes" className={labelClasses}>
          Sample notes
        </label>

        <textarea
          id="wd-ai-editor-notes"
          className="min-h-[100px] w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
        />
      </div>

      <div className="flex justify-end gap-2 border-t border-neutral-300 pt-4">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>

        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}