import React from "react";
import "../style/Form.css"

export const Form = () => {
    return(
        <form>
            <div className="form">
                <div className="text-inputs">
                    <input type={'text'} ></input>
                    <input type={'text'} ></input>
                </div>
                <input type={'submit'} id='button' value='Get a new meme image' ></input>
            </div>
        </form>
    )
}