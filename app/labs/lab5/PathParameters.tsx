"use client";

import { useState } from "react";

export default function PathParameters() {
  const HTTP_SERVER =
    process.env.NEXT_PUBLIC_HTTP_SERVER;

  const [a, setA] =
    useState("34");

  const [b, setB] =
    useState("23");

  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>

      <input
        value={a}
        onChange={(e) =>
          setA(e.target.value)
        }
        className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
        id="wd-path-parameter-a"
      />

      <input
        value={b}
        onChange={(e) =>
          setB(e.target.value)
        }
        className="mb-3 block rounded border border-neutral-300 px-3 py-1.5"
        id="wd-path-parameter-b"
      />

      <div className="flex flex-col gap-2">
        <a
          id="wd-path-parameter-add"
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
          className="w-fit rounded bg-blue-600 px-3 py-1.5 text-white no-underline"
        >
          Add {a} + {b}
        </a>

        <a
          id="wd-path-parameter-subtract"
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
          className="w-fit rounded bg-blue-600 px-3 py-1.5 text-white no-underline"
        >
          Subtract {a} - {b}
        </a>

        <a
          id="wd-path-parameter-multiply"
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
          className="w-fit rounded bg-blue-600 px-3 py-1.5 text-white no-underline"
        >
          Multiply {a} × {b}
        </a>

        <a
          id="wd-path-parameter-divide"
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
          className="w-fit rounded bg-blue-600 px-3 py-1.5 text-white no-underline"
        >
          Divide {a} ÷ {b}
        </a>
      </div>

      <hr />
    </div>
  );
}