import React, { useState } from "react";
import data from "./MemeData"
import "../style/MemeSite.css"

export const MemeSite = () => {

    const [allMemeImages, setAllMemeImages] = useState(data);

    const [meme , setMeme] = useState(
        {
            topText : '',
            bottomText : '',
            url : '',
        }
    );

    const getMemeImage = () => {
        
        const item = allMemeImages.data.memes[Math.floor(Math.random()*allMemeImages.data.memes.length)];
        setMeme(prevState => ({...prevState, url: item.url}));

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
                <img className="img" src={ meme.url } />                
            </div>
        </section>
    )
}