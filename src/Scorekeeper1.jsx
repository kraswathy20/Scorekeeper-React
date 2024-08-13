import { useState } from "react"

export default function Scorekeeper1({numplayers,target}){
    const [score,setScore] = useState(new Array(numplayers).fill(0))
    const [winner,setWinner] = useState(null)
    console.log(score);
    const handleScore = (index) =>{
        if(winner === null){
        let newScore = [...score]
        newScore[index] += 1
        if(newScore[index]===target){
            setWinner(index+1)
        }
        setScore(newScore)
    }
    else{
        alert("please reset the game!!")
    }
}
    // const handleScore = (index) =>{
    //     setScore((prevScore)=>{
    //        return prevScore.map((score,i)=>{
    //             if(i === index) return score+1;
    //             return score;       
    //         })
    //     })
    // }
    const reset = () =>{
      setScore(new Array(numplayers).fill(0))
      setWinner(null)
    }
    return(
        <div>
            <ul>
                {score.map((value,index)=>{
                    return(
                <li key={index}><h4>Player{index+1}:{value}</h4>
                <button onClick={()=>handleScore(index)}>+1</button>
                </li>
                )
                })}
            </ul>
            {winner && <h2>Player{winner} is the Winner</h2>}
            <button type="reset" onClick={reset}>Reset</button>
        </div>
    )
}