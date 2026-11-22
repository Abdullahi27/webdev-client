"use client";

import { useState } from "react";

export default function WorkingWithRemoteArrays() {
  const HTTP_SERVER =
    process.env.NEXT_PUBLIC_HTTP_SERVER;

  const API =
    `${HTTP_SERVER}/lab5/todos`;

  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    completed: false,
    description:
      "Create a NodeJS server with ExpressJS",
  });

  return (
    <div id="wd-working-with-remote-arrays">
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>

      <a
        id="wd-retrieve-todos"
        href={API}
      >
        Get Todos
      </a>

      <h4>
        Retrieving an Item from an Array by ID
      </h4>

      <a
        id="wd-retrieve-todo-by-id"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>

      <br />

      <input
        id="wd-todo-id"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
      />

      <h4>Filtering Array Items</h4>

      <a
        id="wd-retrieve-completed-todos"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>

      <h4>
        Creating new Items in an Array
      </h4>

      <a
        id="wd-create-todo"
        href={`${API}/create`}
      >
        Create Todo
      </a>

      <h4>Removing from an Array</h4>

      <a
        id="wd-remove-todo"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>

      <h4>Updating an Item in an Array</h4>

      <a
        id="wd-update-todo-title"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Todo
      </a>

      <br />

      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
      />

      <br />

      <input
        id="wd-todo-title"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />

      <br />

      <a
        id="wd-update-todo-completed"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Complete Todo ID = {todo.id}
      </a>

      <br />

      <input
        id="wd-todo-completed"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed:
              e.target.checked,
          })
        }
      />

      <br />

      <a
        id="wd-update-todo-description"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Describe Todo ID = {todo.id}
      </a>

      <br />

      <input
        id="wd-todo-description"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description:
              e.target.value,
          })
        }
      />

      <hr />
    </div>
  );
}