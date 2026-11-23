import {
  type ReactNode,
} from "react";

import KambazNavigation from "./Navigation";

import {
  AccountProvider,
} from "./account/AccountContext";

import Session from "./account/Session";

export default function KambazLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AccountProvider>
      <Session>
        <div id="wd-kambaz">
          <KambazNavigation />

          <div className="p-3">
            {children}
          </div>
        </div>
      </Session>
    </AccountProvider>
  );
}