import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link href="/labs" id="wd-home-link">
          Home
        </Link>
      </li>
      <li>
        <Link href="/labs/lab1" id="wd-lab1-link">
          Lab 1
        </Link>
      </li>
      <li>
        <Link href="/labs/lab2" id="wd-lab2-link">
          Lab 2
        </Link>
      </li>
      <li>
        <Link href="/labs/lab3" id="wd-lab3-link">
          Lab 3
        </Link>
      </li>
      <li>
        <Link href="/labs/lab4">
          Lab 4
        </Link>
      </li>
      <li>
        <Link href="/labs/lab5">
          Lab 5
        </Link>
      </li>
      <li>
        <Link href="/">
          Kambaz
        </Link>
      </li>
      <li>Abdullahi</li>
      <li>
        <Link href="/book/ch1" id="wd-toc-book-link">
          Chapter 1
        </Link>
      </li>
    </ul>
  );
}