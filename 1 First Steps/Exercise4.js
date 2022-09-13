function zooMagazin(input) {
    let dogfoodCount = (input[0]);
    let catfoodCount = (input[1]);
    let dogTotal = 2.5 * dogfoodCount;
    let catTotal = 4 * catfoodCount;
    let totalSum = dogTotal + catTotal;
    console.log(`${totalSum} lv.`)
}
zooMagazin(["7","6"])