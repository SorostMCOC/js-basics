function peterBudget(input){
    let budget = Number(input[0]); // Peter budget
    let videocards = Number(input[1]); // Video cards
    let processors = Number(input[2]); // Processors
    let ram = Number(input[3]); // RAM
    let videoCard = 250;
    let videocardtotal = videoCard * videocards;
    let processorsprice = videocardtotal * 0.35;
    let ramprice = videocardtotal * 0.1;
    let processorstotal = processorsprice * processors;
    let ramtotal = ramprice * ram;
    let total = videocardtotal + processorstotal + ramtotal;
    let discountedtotal;
    if(videocards > processors){
        discountedtotal = total - (total*0.15);
        if(discountedtotal < budget){
            console.log(`You have ${(budget - discountedtotal).toFixed(2)} leva left!`);
        }
        else{
            console.log(`Not enough money! You need ${(discountedtotal - budget).toFixed(2)} leva more!`)
        }
    }
    else if(total < budget){
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    }
    else{
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`)
    }
}


peterBudget(["900",
"2",
"1",
"3"])
