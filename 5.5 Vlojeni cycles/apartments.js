function building(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    for(let x = floors; x >= 1; x--){
        let display = "";
        for(let y = 0; y < rooms; y++){
            if(x === floors){
                display += `L${x}${y} `;

            }
            else if(x % 2 === 0 && x !== floors){
                display += `O${x}${y} `;

            }
            else if(x % 2 !== 0){
                display += `A${x}${y} `;

            }
        }
        console.log(display);
    }
}

building(["6", "4"])