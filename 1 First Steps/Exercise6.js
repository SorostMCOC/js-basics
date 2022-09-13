function repainting(input){
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);
    let finalprice = ((1.50 * (naylon + 2)) + (14.50 * (paint + (paint * 0.1))) + (5 * razreditel) + 0.40) + ((((1.50 * (naylon + 2)) + (14.50 * (paint + (paint * 0.1))) + (5 * razreditel) + 0.40)*0.3)* hours);
    console.log(`${finalprice}`);
  }

repainting(["10 ", "11 ", "4 ", "8 "])

let painttotal = paint * 14.50
let rumeniskatolkoboq = painttotal + painttotal*0.1
