import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>

      <h2>Abdullahi Abdirahman</h2>
      <p>Section 9</p>

      <a
        id="wd-github"
        href="https://github.com/Abdullahi27/webdev-client"
        target="_blank"
      >
        GitHub Repository
      </a>

      <br />

      <Link href="/labs/lab1">Lab 1</Link>
    </div>
  );
}