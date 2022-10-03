import React,{useState} from "react";
export default function Cards(props){
    const [mousehover, setMouseHover] = useState(false);
    return(
        <div>
        {props.link ? 
                <div> 
                    <p>{props.summary}</p> 
                    <p> For more details visit: <br/>
                        <a  href={props.link} 
                            style={{fontSize: "1.1rem", color: mousehover ? "black" : "#BF2200"}}
                            onMouseOut={()=>(setMouseHover(!mousehover))} 
                            onMouseEnter={() => (setMouseHover(!mousehover))}>
                             {props.link}
                        </a>
                    </p> 
                </div> 
                : 
                <p>{props.summary}</p> 
            }
        </div>

    );
}