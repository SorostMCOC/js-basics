function solve(input){
    let pageprice = Number(input[0]);
    let coverprice = Number(input[1]);
    let discount = Number(input[2]) / 100;
    let designerfee = Number(input[3]);
    let teampay = Number(input[4]) / 100;
    let initialprice = (pageprice * 899) + (coverprice * 2);
    let discountedprice = initialprice - initialprice*discount;
    initialprice = discountedprice + designerfee;
    initialprice = initialprice - initialprice*teampay;
    console.log(`Avtonom should pay ${initialprice.toFixed(2)} BGN.`);
}


solve(["0.01",
"1",
"10",
"20",
"20"])

solve(["0.05",
"1.20",
"40",
"19.99",
"20"])


solve(["0.02",
"0.50",
"18",
"21",
"50"])
