function petshop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let dogFoodTotal = dogFood * 2.50;
    let catFoodTotal = catFood * 4;

    let finalResult = dogFoodTotal + catFoodTotal;
    console.log(finalResult);
}
petshop(["5", "4"])