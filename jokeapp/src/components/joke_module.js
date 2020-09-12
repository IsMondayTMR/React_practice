import React from 'react'



function Joke_module(props){
    return(
        <div className="joke">
           <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3 style = {{color: props.punchLine && "#FFFFFF"}}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke_module;