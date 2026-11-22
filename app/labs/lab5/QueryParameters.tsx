"use client";

import { useState } from "react";

export default function QueryParameters() {
  const HTTP_SERVER =
    process.env.NEXT_PUBLIC_HTTP_SERVER;

  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>

      <input
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
        id="wd-query-parameter-a"
      />

      <input
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="mb-3 block rounded border border-neutral-300 px-3 py-1.5"
        id="wd-query-parameter-b"
      />

      <div className="flex flex-col gap-2">
        <a
          id="wd-query-parameter-add"
          href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
          className="w-fit rounded bg-blue-600 px-3 py-1.5 text-white no-underline"
        >
          Add {a} + {b}
        </a>

        <a
          id="wd-query-parameter-subtract"
          href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
          className="w-fit rounded bg-blue-600 px-3 py-1.5 text-white no-underline"
        >
          Subtract {a} - {b}
        </a>

        <a
          id="wd-query-parameter-multiply"
          href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
          className="w-fit rounded bg-blue-600 px-3 py-1.5 text-white no-underline"
        >
          Multiply {a} × {b}
        </a>

        <a
          id="wd-query-parameter-divide"
          href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
          className="w-fit rounded bg-blue-600 px-3 py-1.5 text-white no-underline"
        >
          Divide {a} ÷ {b}
        </a>
      </div>

      <hr />
    </div>
  );
}