import React from "react";
import { Form } from "./Form";
import MemeData from "./MemeData";

export const MemeSite = () => {
    return(
        <section>
            < Form 
                {...MemeData}
            />
        </section>
    )
}