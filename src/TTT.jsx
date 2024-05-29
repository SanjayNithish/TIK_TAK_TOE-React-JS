import React, { useState } from "react";
import "./TTT.css";

const TTT = () => {
  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [char, setChar] = useState("X");
  const [count, setCount] = useState(0);
  const handleClick = (row, col) => {
    if (matrix[row][col] || winner) return; 
    const temp = [...matrix];
    temp[row][col] = char;
    setMatrix(temp);
    setChar(char === "X" ? "O" : "X");
    setCount(count + 1);
    checkWin();
  };
  const [winner, setWinner] = useState("");
  const checkWin = () => {
    //row
    for (let i = 0; i < 3; i++) {
      if (
        matrix[i][0] === matrix[i][1] &&
        matrix[i][1] === matrix[i][2] &&
        matrix[i][0]
      ) {
        setWinner(matrix[i][0] + " is the winner");
        return;
      }
    }
    //column
    for (let i = 0; i < 3; i++) {
      if (
        matrix[0][i] === matrix[1][i] &&
        matrix[1][i] === matrix[2][i] &&
        matrix[0][i]
      ) {
        setWinner(matrix[0][i] + " is the winner");
        return;
      }
    }
    //diaganol
    if (
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2] &&
      matrix[0][0]
    ) {
      setWinner(matrix[0][0] + " is the winner");
      return;
    }
    if (
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0] &&
      matrix[0][2]
    ) {
      setWinner(matrix[0][2] + " is the winner");
      return;
    }
    if (count === 8) {
      setWinner("Match has been Drawn");
    }
  };

  return (
    <div className="ttt">
      <div className="header alignCenter">TIK TAK TOE</div>
      <div className="board alignCenter">
        {!winner && <p>Player - {char}</p>}
        <div className="gameboard">
          {winner ||
            matrix.map((row, rIndex) => (
              <div className="row">
                {matrix.map((cell, cIndex) => (
                  <div
                    onClick={() => handleClick(rIndex, cIndex)}
                    className={`cell alignCenter ${matrix[rIndex][cIndex]}`}
                  >
                    {matrix[rIndex][cIndex]}
                  </div>
                ))}
              </div>
            ))}
        </div>
        <button
          className="reset"
          onClick={() => {
            setWinner("");
            setMatrix([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
            ]);
            setChar("X");
            setCount(0);
          }}
        >
          RESET GAME
        </button>
      </div>
    </div>
  );
};

export default TTT;
