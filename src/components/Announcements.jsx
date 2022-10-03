import React,{useState} from "react";
import Cards from "./Cards";
export default function Announcements(props){
    const [boolCheck, setBoolCheck] = useState(false);
    const [mousehover, setMouseHover] = useState(false);
    return(
        <div key={props.id} className=" announcement-box ">
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <h5 className='left-align' >{props.title}</h5>
              {<button style={{
                                background: "none",
                                border: "none",
                                padding: "0!important",
                                cursor: "pointer",
                                fontFamily: '"Quicksand", sans-serif',
                                color: mousehover ? "black" : "#BF2200"}} 
                        onClick={()=>{return(setBoolCheck(!boolCheck));}} 
                        onMouseOut={()=>(setMouseHover(!mousehover))} 
                        onMouseEnter={() => (setMouseHover(!mousehover))}>
                                    Read More!! 
                            </button>
                        }
            </div>
              <div>{boolCheck ? 
                                <Cards
                                    summary={props.summary}
                                    link={props.link}
                                />
                                : 
                                null}
                </div>
        </div>
    );
}