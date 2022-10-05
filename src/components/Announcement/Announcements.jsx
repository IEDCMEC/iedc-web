import React,{useState} from "react";
import Cards from "./Cards";
export default function Announcements(props){
    const [boolCheck, setBoolCheck] = useState(false);
    const [mousehover, setMouseHover] = useState(false);
    var viewport_width = window.innerWidth;
    return(
        <div key={props.id} className=" announcement-box " style={{padding: (viewport_width<600) ? '0.4rem 1.5rem': '1rem 1.5rem',  margin: (viewport_width<600) ? '1.5rem 0' : null}}>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <h5 className='left-align' >{props.title}</h5>
              {<button style={{
                                background: "none",
                                border: "none",
                                padding: "0!important",
                                cursor: "pointer",
                                fontFamily: '"Quicksand", sans-serif',
                                color: mousehover ? "black" : "#BF2200"}}>
                                    <p
                                onClick={()=>{return(setBoolCheck(!boolCheck));}} 
                                onMouseOut={()=>(setMouseHover(!mousehover))} 
                                onMouseEnter={() => (setMouseHover(!mousehover))}>Read More!!</p> 
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