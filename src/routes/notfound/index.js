import React from "react";
import style from './style.module.css';
import { Link } from "react-router-dom";

const Notfound = () => {

    return (
        <div class={style.notfound}>
            <h1>Error 404</h1>
            <p>That page doesn't exist.</p>
            <Link href="/"><h4>Back to Home</h4></Link>
        </div>
    )
}

export default Notfound;  