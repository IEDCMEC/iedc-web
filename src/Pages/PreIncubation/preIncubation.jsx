import React from "react";
import "./PreIncubation.styles.css";
import {info} from "./PageContent";
import DisplayBlock from "./DisplayBlock";
export default function PreIncubation(){
    return(
        <div className="parent">
            {info.map((x)=>{
                return (
                    <div className="title">
                    <DisplayBlock
                        title={x.title}
                        content={x.content}
                        key={x.id}
                    />
                    </div>
                );
            })}
        </div>
    );
}