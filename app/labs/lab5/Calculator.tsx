"use client";

import {
  useState,
} from "react";

type CalculatorResponse = {
  a?: number;
  b?: number;
  operation?: string;
  result?: number;
  error?: string;
};

export default function Calculator() {
  const [a, setA] =
    useState("10");

  const [b, setB] =
    useState("5");

  const [
    operation,
    setOperation,
  ] =
    useState("add");

  const [
    result,
    setResult,
  ] =
    useState<CalculatorResponse>(
      {}
    );

  const calculate =
    async () => {
      const response =
        await fetch(
          `/api/lab5/calculator?a=${a}&b=${b}&operation=${operation}`
        );

      const data =
        await response.json();

      setResult(data);
    };

  const getSymbol = () => {
    switch (operation) {
      case "add":
        return "+";

      case "subtract":
        return "-";

      case "multiply":
        return "×";

      case "divide":
        return "÷";

      default:
        return "?";
    }
  };

  return (
    <div id="wd-calculator">
      <h3>
        Calculator
        (Next.js Web API)
      </h3>

      <label htmlFor="wd-calculator-a">
        A:
      </label>

      <input
        id="wd-calculator-a"
        value={a}
        onChange={(e) =>
          setA(e.target.value)
        }
        className="mb-2 block rounded border px-3 py-1.5"
      />

      <label htmlFor="wd-calculator-b">
        B:
      </label>

      <input
        id="wd-calculator-b"
        value={b}
        onChange={(e) =>
          setB(e.target.value)
        }
        className="mb-2 block rounded border px-3 py-1.5"
      />

      <label htmlFor="wd-calculator-operation">
        Operation:
      </label>

      <select
        id="wd-calculator-operation"
        value={operation}
        onChange={(e) => {
          setOperation(
            e.target.value
          );
        }}
        className="mb-2 block rounded border px-3 py-1.5"
      >
        <option value="add">
          +
        </option>

        <option value="subtract">
          -
        </option>

        <option value="multiply">
          ×
        </option>

        <option value="divide">
          ÷
        </option>
      </select>

      <button
        type="button"
        onClick={calculate}
        className="rounded bg-blue-600 px-3 py-1.5 text-white"
      >
        Calculate
      </button>

      {result.error ? (
        <p
          id="wd-calculator-error"
          className="text-red-600"
        >
          {result.error}
        </p>
      ) : (
        result.result !==
          undefined && (
          <input
            readOnly
            value={`${result.a} ${getSymbol()} ${result.b} = ${result.result}`}
            className="mt-2 block rounded border px-3 py-1.5"
          />
        )
      )}

      <hr />
    </div>
  );
}