function newHouse(input) {
    let typeOfFlower = input[0];
    let countOfFlower = Number(input[1]);
    let budget = Number(input[2]);

    let rosePrice = 5;
    let dahliaPrice = 3.8;
    let tulipPrice = 2.8;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.5;

    let totalSum = 0;

    switch (typeOfFlower) {
        case "Roses":
            if (countOfFlower > 80) {
                totalSum = countOfFlower * rosePrice - (countOfFlower * rosePrice * 0.1);
            } else {
            } totalSum = countOfFlower * rosePrice;
            if (budget >= totalSum) {
                console.log(`Hey, you have a great garden with ${countOfFlower} ${typeOfFlower} and ${(budget - totalSum).toFixed(2)} leva left.`);
            } else if (budget < totalSum) {
                console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
            }
            break;

        case "Dahlias":
            if (countOfFlower > 90) {
                totalSum = countOfFlower * dahliaPrice - (countOfFlower * dahliaPrice * 0.15);
            } else {
            } totalSum = countOfFlower * dahliaPrice;
            if (budget >= totalSum) {
                console.log(`Hey, you have a great garden with ${countOfFlower} ${typeOfFlower} and ${(budget - totalSum).toFixed(2)} leva left.`);
            } else if (budget < totalSum) {
                console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
            }
            break;

        case "Tulips":
            if (countOfFlower > 80) {
                totalSum = countOfFlower * tulipPrice - (countOfFlower * tulipPrice * 0.15);
            } else {
            } totalSum = countOfFlower * tulipPrice;
            if (budget >= totalSum) {
                console.log(`Hey, you have a great garden with ${countOfFlower} ${typeOfFlower} and ${(budget - totalSum).toFixed(2)} leva left.`);
            } else if (budget < totalSum) {
                console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
            }
            break;

        case "Narcissus":
            if (countOfFlower < 120) {
                totalSum = countOfFlower * narcissusPrice + (countOfFlower * narcissusPrice * 0.15);
            } else {
            } totalSum = countOfFlower * narcissusPrice;
            if (budget >= totalSum) {
                console.log(`Hey, you have a great garden with ${countOfFlower} ${typeOfFlower} and ${(budget - totalSum).toFixed(2)} leva left.`);
            } else if (budget < totalSum) {
                console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
            }
            break;

        case "Gladiolus":
            if (countOfFlower < 80) {
                totalSum = countOfFlower * gladiolusPrice + (countOfFlower * gladiolusPrice * 0.20);
            } else {
            } totalSum = countOfFlower * gladiolusPrice;
            if (budget >= totalSum) {
                console.log(`Hey, you have a great garden with ${countOfFlower} ${typeOfFlower} and ${(budget - totalSum).toFixed(2)} leva left.`);
            } else if (budget < totalSum) {
                console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
            }
            break;
    }


}
newHouse(["Roses", "55", "250"]);