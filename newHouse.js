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

    if (typeOfFlower === "Roses") {
        totalSum = countOfFlower * rosePrice;
    } else if (typeOfFlower === "Dahlias") {
        totalSum = countOfFlower * dahliaPrice;
    } else if (typeOfFlower === "Tulips") {
        totalSum = countOfFlower * tulipPrice;
    } else if (typeOfFlower === "Narcissus") {
        totalSum = countOfFlower * narcissusPrice;
    } else if (typeOfFlower === "Gladiolus") {
        totalSum = countOfFlower * gladiolusPrice;
    }


    if (typeOfFlower === "Roses" && countOfFlower > 80) {
        totalSum = countOfFlower * rosePrice - (countOfFlower * rosePrice * 0.1);
    } else if (typeOfFlower === "Dahlias" && countOfFlower > 90) {
        totalSum = countOfFlower * dahliaPrice - (countOfFlower * dahliaPrice * 0.15);
    } else if (typeOfFlower === "Tulips" && countOfFlower > 80) {
        totalSum = countOfFlower * tulipPrice - (countOfFlower * tulipPrice * 0.15);
    } else if (typeOfFlower === "Narcissus" && countOfFlower < 120) {
        totalSum = countOfFlower * narcissusPrice + (countOfFlower * narcissusPrice * 0.15);
    } else if (typeOfFlower === "Gladiolus" && countOfFlower < 80) {
        totalSum = countOfFlower * gladiolusPrice + (countOfFlower * gladiolusPrice * 0.20);
    }


    if (budget >= totalSum) {
        console.log(`Hey, you have a great garden with ${countOfFlower} ${typeOfFlower} and ${(budget - totalSum).toFixed(2)} leva left.`);
    } else if (budget < totalSum) {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"]);