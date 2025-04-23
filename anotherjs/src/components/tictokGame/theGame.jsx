import { useState } from "react"

function TheGame() {
    const [board,setBoard] = useState(Array(9).fill(null))
    const [isXTurn,setXTurn] = useState(false)
    const [winner,setWinner] = useState(null)
    const renderX=(index)=>{
        return(
            <button className="btn btn-primary h-20 w-20 m-1 " onClick={()=>handelClick(index)}>{board[index]}</button>
        )
    }
    const handelClick=(index)=>{
        if(board[index] != null){
            return ;
        }
        console.log(index,"Clicked it")
        const newBoard = [...board]
        newBoard[index] = isXTurn ? 'X':'O'
        setBoard(newBoard)
        setXTurn(!isXTurn)
        const winnerCombination = checkWinner(newBoard)
        if(winnerCombination){
            setWinner(newBoard[winnerCombination[0]])
        }

    }
    const handelReset=()=>{
        setBoard(Array(9).fill(null))
        setWinner(null)
    }
    const checkWinner=(winner)=>{
        const combination=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0; i<combination.length; i++){
            const [a,b,c] = combination[i]
            if(board[a] && board[a] === board[b] && board[b] === board[c]){
                return combination[i]
            }
            
        }
        return null
    }
    return ( <>
    <div className="board flex flex-col justify-center items-center">
        <div className="board-row">
            {renderX(0)}
            {renderX(1)}
            {renderX(2)}
        </div>
        <div className="board-row">
        {renderX(3)}
            {renderX(4)}
            {renderX(5)}
        </div>
        <div className="board-row">
        {renderX(6)}
            {renderX(7)}
            {renderX(8)}</div> 
            <button className="btn btn-success mt-5" onClick={handelReset}>Reset</button></div>
            {winner && <div className="text-2xl text-center mt-5">{winner} is Winner of the Game</div>}
    </> );  
}

export default TheGame;