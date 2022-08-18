import React from "react";
import "../style/Form.css"

export const Form = () => {
    return(
        <form>
            <div className="form">
                <div className="text-inputs">
                    <input type={'text'} placeholder='Top Phrase' ></input>
                    <input type={'text'} placeholder='Bottom Phrase' ></input>
                </div>
                <button id='button' >Get a new meme image</button>
            </div>
        </form>
    )
}