"use client";

import { useState } from "react";

export default function WorkingWithRemoteObjects() {
  const HTTP_SERVER =
    process.env.NEXT_PUBLIC_HTTP_SERVER;

  const ASSIGNMENT_API_URL =
    `${HTTP_SERVER}/lab5/assignment`;

  const MODULE_API_URL =
    `${HTTP_SERVER}/lab5/module`;

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description:
      "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Node.js",
    description: "Learn Express HTTP routes",
    course: "CS5610",
  });

  return (
    <div id="wd-working-with-remote-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>

      <a
        id="wd-retrieve-assignments"
        href={ASSIGNMENT_API_URL}
      >
        Get Assignment
      </a>

      <h4>Retrieving Properties</h4>

      <a
        id="wd-retrieve-assignment-title"
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>

      <h4>Modifying Properties</h4>

      <a
        id="wd-update-assignment-title"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>

      <br />

      <input
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
      />

      <br />

      <a
        id="wd-update-assignment-score"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>

      <br />

      <input
        id="wd-assignment-score"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            score: parseInt(e.target.value),
          })
        }
      />

      <br />

      <a
        id="wd-update-assignment-completed"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>

      <br />

      <input
        id="wd-assignment-completed"
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            completed: e.target.checked,
          })
        }
      />

      <h4>Module (On Your Own)</h4>

      <a
        id="wd-retrieve-module"
        href={MODULE_API_URL}
      >
        Get Module
      </a>

      {" "}

      <a
        id="wd-retrieve-module-name"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>

      <br />

      <a
        id="wd-update-module-name"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>

      <br />

      <input
        id="wd-module-name"
        value={module.name}
        onChange={(e) =>
          setModule({
            ...module,
            name: e.target.value,
          })
        }
      />

      <br />

      <a
        id="wd-update-module-description"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>

      <br />

      <input
        id="wd-module-description"
        value={module.description}
        onChange={(e) =>
          setModule({
            ...module,
            description: e.target.value,
          })
        }
      />

      <hr />
    </div>
  );
}