import React from "react"

function Joke(props) {
    if(props.contents.question == null){
    return (
        <div>
            <p>Punchline: {props.contents.punchline}</p>
        </div>
    )
    } else {
        return (
            <div>
                <p>Question: {props.contents.question}</p>
                <p>Punchline: {props.contents.punchline}</p>
            </div>
        ) 
    }
}


export default Joke

/**
 * another way without the if-else statement
 * style ={{display:prop.qcontents.question ? "block" : none}}
*/

/**
 * Or something like this (more shorthand)
 * style ={{display: !prop.qcontents.question && none}}
 */

 /**
  * Example of some random stuff - higher order functional methods
  * 
  * const nums = [1,2,3,4,5,6,7,8,9,10]
  * const doubled = nums.map(function(num){
  *     return num*2;
  * })
  */