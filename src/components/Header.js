import React from "react";
import "../style/Header.css"
const meme = "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png?20200613204254"

export const Header = () => {
    return(
        <header>
            <div className="left-side">
                <img src={meme} />
                <h3>Meme Generator</h3>
            </div>
            <div className="right-side">
                <p> React Course - Project 3 </p>
            </div>
        </header>
    )
}