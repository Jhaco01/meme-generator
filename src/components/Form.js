import React from "react";
import "../style/Form.css"

export const Form = (data) => {

    const getMemeImage = () => {

        const items = data.data.memes;        
        const item = items[Math.floor(Math.random()*items.length)];
        console.log(item.url);
    }
    
    return(
        <div>
            <div className="form">
                <div className="text-inputs">
                    <input type={'text'} ></input>
                    <input type={'text'} ></input>
                </div>
                <button id='button' onClick={ getMemeImage } > Get a new meme image </button>
            </div>
        </div>
    )
}