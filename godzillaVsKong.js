function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let peopleCount = Number(input[1]);
    let outfitPriceFor1 = Number(input[2]);
    
    let decor = budget * 0.10;

    let totalOutfitPrice = peopleCount * outfitPriceFor1;

    if (peopleCount > 150) {
        totalOutfitPrice = totalOutfitPrice - totalOutfitPrice * 0.10;
    }
    let sumDecorOutfit = decor + totalOutfitPrice;

    if (budget < sumDecorOutfit) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sumDecorOutfit - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - sumDecorOutfit).toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["20000", "120", "55.5"])
    