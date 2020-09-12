import React from 'react'
import Joke_module from './joke_module'




 function JOKE(){
    return(
        <div className="joke_module_container">
            <Joke_module punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
            
            <Joke_module 
                question="What's the best thing about Switzerland?" 
                punchLine="I don't know, but the flag is a big plus!"
            />
            
            <Joke_module 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />
            
            <Joke_module 
                question="Hear about the new restaurant called Karma?" 
                punchLine="There’s no menu: You get what you deserve."
            />
            
            <Joke_module 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />
            
            <Joke_module 
                question="Did you hear about the claustrophobic astronaut?" 
                punchLine="He just needed a little space."
            />
            
        </div>
    )
}


// id: 17
// punchline: "The Foo Bar."
// setup: "Where do programmers like to hangout?"
// type: "programming"
export default JOKE