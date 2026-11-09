import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  } = useTodosContext();

  const [title, setTitle] = useState("");

  const add = () => {
    if (title.trim() === "") {
      return;
    }

    addTodo(title);
    setTitle("");
  };

  return (
    <div id="wd-react-context-todo-list">
      <h3>React Context Todo List</h3>

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="New todo"
        id="wd-context-todo-title"
      />

      <button
        type="button"
        onClick={add}
        id="wd-context-todo-add"
      >
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              value={todo.title}
              onChange={(e) =>
                updateTodo(
                  todo.id,
                  e.target.value
                )
              }
            />

            <button
              type="button"
              onClick={() =>
                deleteTodo(todo.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}