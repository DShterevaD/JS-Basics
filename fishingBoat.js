function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countOfMen = Number(input[2]);
    let totalPrice = 0;

    switch (season) {
        case "Spring":
            totalPrice = 3000; break;

        case "Summer":
            totalPrice = 4200; break;

        case "Autumn":
            totalPrice = 4200; break;

        case "Winter":
            totalPrice = 2600;break;
    }


    if (countOfMen <= 6) {
        totalPrice = totalPrice * (1 - 0.1);
    } else if (countOfMen >= 7 && countOfMen <= 11) {
        totalPrice = totalPrice * (1 - 0.15);
    } else if (countOfMen >= 12) {
        totalPrice = totalPrice * (1 - 0.25);
    }

    if (countOfMen % 2 === 0 && season !== "Autumn") {
        totalPrice = totalPrice * (1 - 0.05);
    }

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", "Summer", "11"]);