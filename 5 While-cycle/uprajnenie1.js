function books(input){
    let lookingFor = input[0];
    let checked = 0;
    let index = 1;
    let currentBook = input[index];
    while(currentBook !== lookingFor){
        currentBook = input[index];
        if(currentBook !== lookingFor){
            checked++;
            index++;
        }
        if(currentBook === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${checked - 1} books.`)
            break;
        }
        if(currentBook === lookingFor){
            console.log(`You checked ${checked} books and found it.`)
            break;
        }
    }
}

books(["Troy",
"Stronger",
"Life Style",
"Troy"])

