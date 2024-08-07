function shopping(input) {
    let budget = Number(input[0]);
    let countN = Number(input[1]);
    let countM = Number(input[2]);
    let countP = Number(input[3]);
    
    let priceN = 250;
    let totalN = countN * priceN;
    let totalM = (totalN * 0.35);
    let totalP = (totalN * 0.10);

    let totalSum = totalN + (totalM * countM) + (totalP * countP);

    if (countN > countM) {
        totalSum = totalSum - totalSum * 0.15;
    }
    let difference = Math.abs(budget - totalSum)
    if (budget >= totalSum) {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    } else if (budget < totalSum) {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
    }
}
shopping(["900", "2", "1", "3"])