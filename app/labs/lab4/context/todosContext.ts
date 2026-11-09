import {
  createContext,
  createElement,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Todo = {
  id: number;
  title: string;
};

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
};

const TodosContext =
  createContext<TodosContextValue | null>(null);

export function TodosProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Finish Lab 4" },
    { id: 2, title: "Review React Context" },
  ]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title,
      },
    ]);
  };

  const updateTodo = (
    id: number,
    title: string
  ) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(
      todos.filter(
        (todo) => todo.id !== id
      )
    );
  };

  return createElement(
    TodosContext.Provider,
    {
      value: {
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
      },
    },
    children
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);

  if (!value) {
    throw new Error(
      "useTodosContext must be used inside TodosProvider"
    );
  }

  return value;
}