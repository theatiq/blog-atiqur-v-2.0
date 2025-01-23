import "./globals.css";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export const metadata = {
  title: "Atiqurs Tech",
  description: "A tech blog.",
};

export default async function RootLayout({ children }) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <html lang="en">
      <body>
        <header>
          <nav className="nav container">
            <Link href={"/"}>
              <h1 className="text-display-3">Atiqurs Blog</h1>
            </Link>
            <div className="">
              <Link href={"/"}>
                <button className="btn">Home</button>
              </Link>
              <Link href={"/profile"}>
                <button className="btn">Profile</button>
              </Link>
            </div>
            <div>
              {!(await isAuthenticated()) ? (
                <>
                  <LoginLink className="btn btn-ghost sign-in-btn">
                    Sign in
                  </LoginLink>
                  <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
                </>
              ) : (
                <div className="profile-blob">
                  {user?.picture ? (
                    <img
                      className="avatar"
                      src={user.picture}
                      alt="user profile avatar"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="avatar">
                      {user?.given_name?.[0]}
                      {user?.family_name?.[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-heading-2">
                      {user?.given_name} {user?.family_name}
                    </p>

                    <LogoutLink className="text-subtle">Log out</LogoutLink>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <strong className="text-heading-2">Atiqur Tech</strong>
            <p className="footer-tagline text-body-3">
              Visit our Site{" "}
              {/* <Link className="link" href="https://kinde.com/docs">
                help center
              </Link> */}
            </p>

            <small className="text-subtle">
              © 2025 Atiqurs Tech, Inc. All rights reserved
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}
