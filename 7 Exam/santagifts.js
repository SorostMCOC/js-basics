function solve(input){
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let printSum = '';
    for(i = m;i >= n;i--){
        if(i % 2 == 0 && i % 3 == 0){
            if(i != s){
                printSum += `${i} `;
            }if( i === s){
                break;
            }
        }
    }
    console.log(printSum);
}


solve(["1",
"36",
"12"])

solve(["20",
"1000",
"36"])
