import React from "react";
import "./PreIncubation.styles.css";
import {info} from "./PageContent";
import DisplayBlock from "./DisplayBlock";
export default function PreIncubation(){
    return(
        <div className="parent">
            {info.map((x,id)=>(
                    <div key={id} className="title">
                    <DisplayBlock
                        title={x.title}
                        content={x.content}
                    />
                    <br/>
                    </div>
                )
            )}
            <div>
                <h3>Projects under <br/> Pre-Incubation</h3>
                <iframe id='collab' title='collab' src='https://collab.iedcmec.in/'/>
            </div>
        </div>
    );
}