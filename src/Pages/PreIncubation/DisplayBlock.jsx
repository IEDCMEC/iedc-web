import React from "react";
export default function DisplayBlock(props){
    return(
        <div className="title">
            <h3>
                {props.title}
            </h3>
            <p>
                {props.content}
            </p>
        </div>
    );
}