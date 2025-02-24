import React from "react";
import Container from "./Container";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <header className="bg-accent text-base-100 p-4">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-bold">TalkSpace</h1>
          </Link>
          <nav className="flex gap-2">
            <Link href="/login" className="btn btn-ghost hover:bg-primary/20">
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary hover:bg-primary-focus"
            >
              Register
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default NavbarComponent;
