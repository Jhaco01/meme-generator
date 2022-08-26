import React, { useState } from "react";
import data from "./MemeData"
import "../style/MemeSite.css"

export const MemeSite = () => {

    const [allMemeImages, setAllMemeImages] = useState(data);

    const [meme , setMeme] = useState(
        {
            topPhrase : '',
            bottomPhrase : '',
            url : '',
        }
    );

    const getMemeImage = () => {
        
        const item = allMemeImages.data.memes[Math.floor(Math.random()*allMemeImages.data.memes.length)];
        setMeme(prevState => ({...prevState, url: item.url}));

    }

    const addText = ({target}) => {
        
        const {name, value} = target;
        
        setMeme( (prevState) => {
            return(
                {
                    ...prevState,
                    [name] : value,
                }
            )
        } )
    }
    
    return(
        <section>
            <div className="full-site">
                <div className="form">
                    <div className="text-inputs">
                        <input 
                            type={'text'} 
                            placeholder='Top Phrase' 
                            name="topPhrase"
                            value={meme.topPhrase}
                            onChange={addText}
                        />
                        <input 
                            type={'text'} 
                            placeholder='Bottom Phrase' 
                            name="bottomPhrase"
                            value={meme.bottomPhrase}
                            onChange={addText}
                        />
                    </div>
                    <button id='button' onClick={ getMemeImage } > Get a new meme image </button>                
                </div>                
                <div className="meme" >
                    <img className="img" src={ meme.url } />                
                    <h2 id="top" > {meme.topPhrase} </h2>
                    <h2 id="bottom" > {meme.bottomPhrase} </h2>
                </div>
            </div>
        </section>
    )
}