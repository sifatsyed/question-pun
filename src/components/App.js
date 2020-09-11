import React from "react"
import Joke from "./Joke"
//import jokesData from "./jokesData"

function App() {
    return (
        <div>
            <Joke contents={{question:"How are you?", punchline:"Fine!"}}/>
            <Joke contents={{question:"How are you?", punchline:"Not good!"}}/>
            <Joke contents={{punchline:"Okay!"}}/>
            <Joke contents={{question:"How are you?", punchline:"Blah!"}}/>
            <Joke contents={{question:"How are you?", punchline:"Whatttt!??"}}/>
        </div>
    )
}

export default App

/* Mapping from a json file */
/*
const jokesComponents = jokesData.map(joke => <Joke question={joke.question} punchline={joke.punchline} />)
return (
    <div>
        {jokesComponents}
    </div>
)
*/