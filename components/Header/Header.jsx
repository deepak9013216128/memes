import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Link href="/">
            <Navbar.Brand>
              <img
                src="/logo.png"
                alt="meme logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Memes
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Link href="/upload">
                <a className="nav-link">uploads Memes</a>
              </Link>
              <Link href="/generator">
                <a className="nav-link">meme generator</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
