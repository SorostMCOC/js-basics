function solve(input){
    let username = input[0];
    let password = input[1];
    let index = 2;
    while(true){
        let str = input[index];
        index++;
        if(str === password){
            break;
        }
    }
    console.log(`Welcome ${username}!`);
}


solve(["addmun","skorbut","nibba","Skorbut","Scoreboot","skorbut"])