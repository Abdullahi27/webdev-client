"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    href: "/labs",
    id: "wd-home-link",
    label: "Home",
    match: (p: string) => p === "/labs",
  },
  {
    href: "/labs/lab1",
    id: "wd-lab1-link",
    label: "Lab 1",
    match: (p: string) => p.includes("/lab1"),
  },
  {
    href: "/labs/lab2",
    id: "wd-lab2-link",
    label: "Lab 2",
    match: (p: string) => p.includes("/lab2"),
  },
  {
    href: "/labs/lab3",
    id: "wd-lab3-link",
    label: "Lab 3",
    match: (p: string) => p.includes("/lab3"),
  },
  {
    href: "/labs/lab4",
    id: "wd-lab4-link",
    label: "Lab 4",
    match: (p: string) => p.includes("/lab4"),
  },
  {
    href: "/labs/lab5",
    id: "wd-lab5-link",
    label: "Lab 5",
    match: (p: string) => p.includes("/lab5"),
  },
  {
    href: "/",
    id: "wd-kambaz-link",
    label: "Kambaz",
    match: () => false,
  },
] as const;

export default function TOC() {
  const pathname = usePathname();

  return (
    <div id="wd-labs-toc">
      <h2>Labs</h2>

      <ul>
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              id={link.id}
              href={link.href}
              className={
                link.match(pathname)
                  ? "font-bold"
                  : ""
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}