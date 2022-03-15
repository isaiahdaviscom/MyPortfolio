import React from "react";
import style from './style.module.css';
// import { Link } from 'preact-router/match';

const Header = () => (
	<header className={style.header}>
		<a href="/"><h1>Jane Doe</h1></a>
		{/* <nav>
			<Link activeClassName={style.active} href="/blogs">Blogs</Link>
			<Link activeClassName={style.active} href="/podcasts">Podcasts</Link>
			<Link activeClassName={style.active} href="/contact">Contact me</Link>
		</nav> */}
	</header>
);
export default Header;