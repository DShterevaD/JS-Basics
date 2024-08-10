function cinema(input) {
    let premierePrice = 12;
    let normalPrice = 7.5;
    let discountPrice = 5;

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (type === "Premiere") {
        income = rows * columns * premierePrice;
    } else if (type === "Normal") {
        income = rows * columns * normalPrice;
    } else if (type === "Discount") {
        income = rows * columns * discountPrice;
    }
    console.log(`${income.toFixed(2)} leva`)
}
cinema(["Premiere", "10", "12"])