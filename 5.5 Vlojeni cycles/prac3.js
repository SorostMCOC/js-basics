/*function magician(input){
    let magic = Number(input);
    for(x = 1; x < magic;x++){
        for(y = 1;y < magic; y++){
            let sum = x + y;
            console.log(`${sum}`);
            if(sum === magic){
                break;
            }
        }
    }
}

magician(79) */

function magicNumber(input){
    let starting = Number(input[0]);
    let ending = Number(input[1]);
    let magic = Number(input[2]);
    let combinations = 0;
    let isFound = false;
    for (let i = starting; i <= ending; i++){
        for (let j = starting; j <= ending; j++){
            combinations++;
            if(i + j === magic){
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magic})`);
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(isFound === false){
        console.log(`${combinations} combinations - neither equals ${magic}`);
    }
}

magicNumber(["23",
"24",
"20"])
