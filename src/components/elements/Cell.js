import React from "react";
import './cell.css';

function Cell ({detailes, markFlag, revealcell}) {
    const style = {
        cellStyle:{
            color: detailes.revealed && detailes.value === 1 ?
                'blue' 
                : detailes.revealed && detailes.value === 2 ?
                'green'
                : detailes.revealed && detailes.value === 3 ?
                'red'
                : detailes.revealed && detailes.value === 4 ?
                'darkblue'
                : detailes.revealed && detailes.value === 5 ?
                'brown'
                : detailes.revealed && detailes.value === 6 ?
                'turquoise'
                : detailes.revealed && detailes.value === 7 ?
                'black'
                : detailes.revealed && detailes.value === 8 ?
                'white' : 'rgb(53, 163, 150)',
            backgroundColor: detailes.revealed && detailes.value !== 0 ?
                detailes.value === 'X' ?
                    'red' : '#rgb(53, 163, 150)' 
                    : detailes.revealed && detailes.value === 0 ?
                    'rgb(53, 163, 150)' : '#000'
        },
    }

    const rightclick = (e) => {
        markFlag(e, detailes.x, detailes.y);
    }

    return (
        <div className="cell" style={style.cellStyle} onClick={() => {revealcell(detailes.x, detailes.y)}} onContextMenu = {rightclick}>
            {!detailes.revealed && detailes.flagged ? ("🚩")
            :
            detailes.revealed && detailes.value !== 0 ? 
            (detailes.value === "X" ? ("💣") : (detailes.value)) 
            : ("")}
        </div>
    )
}

export default Cell;