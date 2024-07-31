function yardGreening(input) {
    let sqMeters = Number(input[0]);
    let fullPrice = sqMeters * 7.61;
    let fullDiscount = fullPrice * 0.18;
    let finalPrice = fullPrice - fullDiscount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${fullDiscount} lv.`);
}
yardGreening(['550' , "7.61" , "0.18"])