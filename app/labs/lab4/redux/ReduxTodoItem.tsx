import type {
  ReduxTodo,
} from "./todosReducer";

export default function ReduxTodoItem({
  todo,
  editTodo,
  removeTodo,
}: {
  todo: ReduxTodo;
  editTodo: (
    todo: ReduxTodo
  ) => void;
  removeTodo: (
    id: string
  ) => void;
}) {
  return (
    <li
      className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
    >
      <span>
        {todo.title}
      </span>

      <span className="flex gap-2">
        <button
          type="button"
          className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
          onClick={() =>
            editTodo(todo)
          }
        >
          Edit
        </button>

        <button
          type="button"
          className="rounded bg-red-600 px-2 py-0.5 text-sm text-white"
          onClick={() =>
            removeTodo(
              todo.id
            )
          }
        >
          Delete
        </button>
      </span>
    </li>
  );
}