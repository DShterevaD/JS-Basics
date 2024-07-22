function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegaterianMenu = Number(input[2]);

    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegaterianMenuPrice = 8.15;
    let deliveryPrice = 2.50;
    
    let totalChickenPrice = chickenMenu * chickenMenuPrice;
    let totalFishPrice = fishMenu * fishMenuPrice;
    let totalVegaterianPrice = vegaterianMenu * vegaterianMenuPrice;
    let desertPrice = (totalChickenPrice + totalFishPrice + totalVegaterianPrice) * 0.2;

    let totalPrice = totalChickenPrice + totalFishPrice + totalVegaterianPrice + desertPrice + deliveryPrice;
    console.log(totalPrice);

}
foodDelivery(["2", "4", "3"])