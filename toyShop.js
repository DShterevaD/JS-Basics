function toyShop(input) {
    let trip = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let puzzlePrice = 2.60; dollPrice = 3; teddyBearPrice = 4.10; minionPrice = 8.20; truckPrice = 2;

    let totalSum = (puzzle * puzzlePrice) + (doll * dollPrice) + (teddyBear * teddyBearPrice) + (minion * minionPrice) + (truck * truckPrice);
    let allToys = puzzle + doll + teddyBear + minion + truck;

    if (allToys >= 50) {
        let discount = totalSum * 0.25;
        totalSum = totalSum - discount;
    }
   
    totalSum = totalSum - (totalSum * 0.1);

    if (totalSum >= trip) {
        console.log(`Yes! ${(totalSum - trip).toFixed(2)} lv left.`);
    } else if (trip > totalSum) {
        console.log(`Not enough money! ${(trip - totalSum).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);