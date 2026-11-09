"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);

  return (
    <div id="wd-counter">
      <h2>Counter: {count}</h2>

      <button
        type="button"
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Up
      </button>

      <button
        type="button"
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Down
      </button>

      <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-my-counter-reset-click"
      >
        Reset
      </button>

      <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-counter-reset-click"
      >
        Reset
      </button>

      <hr />
    </div>
  );
}