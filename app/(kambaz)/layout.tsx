import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./kambaz.css";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <KambazNavigation />

      <main className="wd-main-content-offset">
        {children}
      </main>
    </>
  );
}