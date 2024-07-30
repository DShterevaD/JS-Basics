function repainting(input) {
    let nylon = Number((input[0]));
    let paint = Number((input[1]));
    let thinner = Number(input[2]);
    let workingHours = Number(input[3]);

    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5;
    let bagsPrice = 0.40;

    paint = paint + (paint * 0.10);
    nylon = nylon + 2;
    
    let totalNylonPrice = nylon * nylonPrice;
    let totalPaintPrice = paint * paintPrice;
    let totalThinnerPrice = thinner * thinnerPrice;

    let currentSum = totalNylonPrice + totalPaintPrice + totalThinnerPrice + bagsPrice;
    let salaryPerHour = currentSum * 0.3;
    let totalWorkerExpenses = salaryPerHour * workingHours;
    let totalExpenses = currentSum + totalWorkerExpenses;
    console.log(totalExpenses);
}
repainting(["10", "11", "4", "8"])