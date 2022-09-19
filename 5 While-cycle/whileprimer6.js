function numberfinder(input){
    let number = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (number !== "Stop"){
        let num = Number(number);
        if (num > max){
            max = num;
        }
        number = input[index];
        index++;
    }
    console.log(max);
}


numberfinder(["100","99","80","70","Stop"])
