import React from "react";
import "../style/Form.css"

export const Form = (data) => {
    
    const items = data["data"]["memes"];
        console.log(items);

    const sample = () => {
        // var item = items[Math.floor(Math.random()*items.length)];
        // const items = data["data"]["memes"];
        // console.log(items);
        // let item = items[Math.floor(Math.random()*items.length)];

        return 
    }
    
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