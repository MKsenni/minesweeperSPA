import React, { useEffect, useState } from "react";
import './field.css';
import CreateField from "../ui/CreateField.js";
import Cell from "./Cell.js";
import Button from "../ui/button.js";
import { revealed } from "../ui/Revealed.js";
import { Link } from "react-router-dom";

function Field () {

    const [grid, setGrid] = useState([]);
    const [mineLocation, setmineLocation] = useState([]);
    const [mineCount, setMineCount] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timer, setT] = useState(0);
    
    useEffect(() => {
        handleClickThree();
        handleClickTwo();
        handleClickOne();
    },[]);
    
    const handleClickOne = () => {
        let newBoard = CreateField(state.rows[0], state.cols[0], state.bombs[0]);
        setMineCount(state.bombs[0]);
        setmineLocation(newBoard.mineLocation);
        setGrid(newBoard.field);
    }
    const handleClickTwo = () => {
        let newBoard = CreateField(state.rows[1], state.cols[1], state.bombs[1]);
        setMineCount(state.bombs[1]);
        setmineLocation(newBoard.mineLocation);
        setGrid(newBoard.field);
    }
    
    const handleClickThree = () => {
        let newBoard = CreateField(state.rows[2], state.cols[2], state.bombs[2]);
        setMineCount(state.bombs[2]);
        setmineLocation(newBoard.mineLocation);
        setGrid(newBoard.field);
    }

    let state = {
        rows: [8, 16, 32],
        cols: [8, 16, 16],
        bombs: [10, 40, 100],
    }

    const markFlag = (e, x, y) => {
        e.preventDefault();
        const time = setInterval(() => setSeconds (s => s + 1), 1000);
        setT(time);
        clearInterval(timer);
        let newGrid = JSON.parse(JSON.stringify(grid));
        if (newGrid[x][y].value === "X") {
            newGrid[x][y].flagged = true;
            setMineCount( (mineCount) => (mineCount >= 1 ? mineCount - 1 : 0));
        }
        setGrid(newGrid);
    }

    const revealcell = (x, y) => {
        const time = setInterval(() => setSeconds (s => s + 1), 1000);
        setT(time);
        clearInterval(timer);
        let newGrid = JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value === "X") {
            alert("Clicked on mine, try again!");
            clearInterval(time);
            for(let i = 0; i < mineLocation.length; i++) {
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
            }
            setGrid(newGrid);
        } else if(mineCount === 0) {
            alert("You are WON!!!");
            clearInterval(time);
            let winers = JSON.parse(localStorage.getItem('bestTime') || '[]');
            winers.push(seconds);
            localStorage.setItem('bestTime', JSON.stringify(winers));
        } else {
            let revealedboard = revealed(newGrid, x, y);
            setGrid(revealedboard.arr);
        }
    }

    return(
        <div className="container">

            <h1 className='header'>MineSweeper</h1>
            <div className="timer">{seconds} sec</div>
            <div className="operation">
                <Button />
                <h3 className="minecount">Mines<br />{mineCount}</h3>
                <Link to={'/leaderboard'}><button className="leaderboardBtn">leaderboard</button></Link> 
            </div>
            <div>
                {grid.map((singlerow, index1) => {
                    return (
                        <div className="field" key={index1}>
                            {singlerow.map((singlecol, index2) => {
                                    return <Cell 
                                    key = {index2}
                                    detailes = {singlecol} 
                                    markFlag = {markFlag}
                                    revealcell = {revealcell}
                                    />
                            })}
                        </div>
                    )
                })}
            </div>

            <div className="setting">
                <h2 className="titleSetting">level</h2>
                <button className="settingBtn" onClick={handleClickOne}>8 x 8, 10 min</button>
                <button className="settingBtn" onClick={handleClickTwo}>16 x 16, 40 min</button>
                <button className="settingBtn" onClick={handleClickThree}>32 x 16, 100 min</button>
            </div>
        </div>
    )
}

export default Field;