function solve(input){
    let n = Number(input);
    let bonus = 0;
    if(n <= 100){
        bonus += 5;
    } else if(n > 100 && n < 1000){
        bonus += n*0.2;
    }else if(n > 1000){
        bonus += n*0.1;
    }

    if(n % 2 === 0){
        bonus += 1;
    }
    else if(n % 10 === 5){
        bonus += 2;
    }
    console.log(bonus);
    console.log(n + bonus);
}

solve(["20"])