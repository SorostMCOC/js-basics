function solve(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let command = input[2];
    let result = 0;
    let oddEven;
    if(command === "+"){
        result = n1 + n2;
        if(result % 2 === 0){
            oddEven = "even";
            console.log(`${n1} + ${n2} = ${result} - ${oddEven}`);
        }else{
            oddEven = "odd";
            console.log(`${n1} + ${n2} = ${result} - ${oddEven}`);
        }
    }
    if(command === "-"){
        result = n1 - n2;
        if(result % 2 === 0){
            oddEven = "even";
            console.log(`${n1} - ${n2} = ${result} - ${oddEven}`);
        }else{
            oddEven = "odd";
            console.log(`${n1} - ${n2} = ${result} - ${oddEven}`);
        }
    }
    if(command === "*"){
        result = n1 * n2;
        if(result % 2 === 0){
            oddEven = "even";
            console.log(`${n1} * ${n2} = ${result} - ${oddEven}`);
        }else{
            oddEven = "odd";
            console.log(`${n1} * ${n2} = ${result} - ${oddEven}`);
        }
    }
    if(command === "/"){
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
    if(command === "%"){
        if(n1 !== 0 && n2 !== 0){
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
        }else{
            console.log(`Cannot divide ${n1} by zero`);
        }
    }

}

solve(["10",
"12",
"+"])
