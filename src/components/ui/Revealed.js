export const revealed = (arr, x, y) => {
    
    let show = [];
    show.push(arr[x][y]);
    while (show.length !== 0) {
        let one = show.pop();
        let i = one.x;
        let j = one.y;
        if (!one.revealed) {
            one.revealed = true;
        }
        if (one.value !== 0) {
            break;
        }
        // верх слева
        if (i > 0 && j > 0 && arr[i-1][j-1].value === 0 && !arr[i-1][j-1].revealed) {
            show.push(arr[i-1][j-1]);
        }

        // низ справа
        if (i < arr.length - 1 && j < arr[0].length - 1 && arr[i+1][j+1].value === 0 && !arr[i+1][j+1].revealed) {
            show.push(arr[i+1][j+1]);
        }

        // верх справа
        if (i > 0 && j<arr[0].length - 1 && arr[i-1][j+1].value === 0 && !arr[i-1][j+1].revealed) {
            show.push(arr[i-1][j+1]);
        }

        // низ слева
        if (i < arr.length - 1 && j > 0 && arr[i+1][j-1].value === 0 && !arr[i+1][j-1].revealed) {
            show.push(arr[i+1][j-1]);
        }

        // верх 
        if (i > 0 && arr[i-1][j].value === 0 && !arr[i-1][j].revealed) {
            show.push(arr[i-1][j]);
        }

        // справа
        if (j < arr[0].length - 1 && arr[i][j+1].value === 0 && !arr[i][j+1].revealed) {
            show.push(arr[i][j+1]);
        }

        // низ
        if(i < arr.length - 1 && arr[i+1][j].value === 0 && !arr[i+1][j].revealed) {
            show.push(arr[i+1][j]);
        }

        // слева
        if(j > 0 && arr[i][j-1].value === 0 && !arr[i][j-1].revealed) {
            show.push(arr[i][j-1]);
        }

        // начинаем раскрывать ячейки

        //верх слева
        if (i > 0 && j > 0 && !arr[i - 1][j - 1].revealed) {
            arr[i - 1][j - 1].revealed = true;
          }
      
          // слева
        if (j > 0 && !arr[i][j - 1].revealed) {
          arr[i][j - 1].revealed = true;
        }
    
        //низ слева
        if (i < arr.length - 1 && j > 0 && !arr[i + 1][j - 1].revealed) {
          arr[i + 1][j - 1].revealed = true;
        }
    
        //верх
        if (i > 0 && !arr[i - 1][j].revealed) {
          arr[i - 1][j].revealed = true;
        }
    
        // низ
        if (i < arr.length - 1 && !arr[i + 1][j].revealed) {
          arr[i + 1][j].revealed = true;
        }
    
        // верх справа
        if (i > 0 && j < arr[0].length - 1 && !arr[i - 1][j + 1].revealed) {
          arr[i - 1][j + 1].revealed = true;
        }
    
        //справа
        if (j < arr[0].length - 1 && !arr[i][j + 1].revealed) {
          arr[i][j + 1].revealed = true;
        }
    
        // низ справа
        if (i < arr.length - 1 && j < arr[0].length - 1 && !arr[i + 1][j + 1].revealed) {
          arr[i + 1][j + 1].revealed = true;
        }
    }

    return {arr}
}