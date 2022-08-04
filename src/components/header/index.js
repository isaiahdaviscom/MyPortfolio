import React from "react";
import style from './style.module.css';
import Container from "react-bootstrap/Container";
// import { Link } from 'preact-router/match';

const Header = () => (
  <header className={style.header}>
    <Container>
      {/* <a href="/"><h1>Jane Doe</h1></a> */}
      {/* <nav>
			<Link activeClassName={style.active} href="/blogs">Blogs</Link>
			<Link activeClassName={style.active} href="/podcasts">Podcasts</Link>
			<Link activeClassName={style.active} href="/contact">Contact me</Link>
		</nav> */}
      <a href="/">Link 1</a>
      <a href="/">Isaiah Davis</a>
      <a href="/">Link 1</a>
    </Container>
  </header>
);
export default Header;