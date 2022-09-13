function housingPrice(input) {
    let housingAvailable = Number(input);
    let priceperMeter = 7.61;
    let finalPrice = priceperMeter * housingAvailable;
    let discountedPrice = finalPrice * 0.18;
    let endPrice = finalPrice - discountedPrice;
    console.log(`The final price is: ${endPrice} lv.`);
    console.log(`The discount is: ${discountedPrice} lv.`);

}
housingPrice(550)