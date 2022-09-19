function solve(input){
    let index = 0;
    while (true){
        let str = input[index];
        index++;
        if (str === "SoftUni"){
            break;
        }
        console.log(str);
    }
}

solve(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop"])