import React, { useState } from "react";
import data from "./MemeData"
import "../style/MemeSite.css"

export const MemeSite = () => {

    const [url, setUrl] = useState('');

    const getMemeImage = () => {

        const items = data.data.memes;        
        const item = items[Math.floor(Math.random()*items.length)];
        setUrl(item.url);

    }
    
    return(
        <section>
            <div className="full-site">
                <div className="form">
                    <div className="text-inputs">
                        <input type={'text'} placeholder='Top Phrase' ></input>
                        <input type={'text'} placeholder='Bottom Phrase' ></input>
                    </div>
                    <button id='button' onClick={ getMemeImage } > Get a new meme image </button>                
                </div>                
                <img className="img" src={ url } />                
            </div>
        </section>
    )
}