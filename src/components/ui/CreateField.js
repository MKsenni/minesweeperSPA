function CreateField (row, col, bombs) {

    let field = [];
    let mineLocation = [];

    for (let x = 0; x < row; x++) {
        let subCol = [];
        for (let y = 0; y < col; y++) {
            subCol.push({
                value: 0,
                revealed: false,
                x: x,
                y: y,
                flagged: false,
            });
        }
        field.push(subCol);
    }

    let bombsCount = 0;
    while (bombsCount < bombs) {
        let x = random(0, row - 1);
        let y = random(0, col - 1);

        if (field[x][y].value === 0) {
            field[x][y].value = "X";
            mineLocation.push([x, y]);
            bombsCount++;
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (field[i][j].value === "X") {
            continue;
            }
    
            // верх
            if (i > 0 && field[i - 1][j].value === "X") {
                field[i][j].value++;
            }
    
            // верх справо
            if (i > 0 && j < col - 1 && field[i - 1][j + 1].value === "X") {
                field[i][j].value++;
            }
    
            // справо
            if (j < col - 1 && field[i][j + 1].value === "X") {
                field[i][j].value++;
            }
    
            // низ справо
            if (i < row - 1 && j < col - 1 && field[i + 1][j + 1].value === "X") {
                field[i][j].value++;
            }
    
            // низ
            if (i < row - 1 && field[i + 1][j].value === "X") {
                field[i][j].value++;
            }
    
            // низ слево
            if (i < row - 1 && j > 0 && field[i + 1][j - 1].value === "X") {
                field[i][j].value++;
            }
    
            // лево
            if (j > 0 && field[i][j - 1].value === "X") {
                field[i][j].value++;
            }
    
            // верх лево
            if (i > 0 && j > 0 && field[i - 1][j - 1].value === "X") {
                field[i][j].value++;
            }
        }
    }

    return {field, mineLocation};
};

function random(min = 0, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default CreateField;