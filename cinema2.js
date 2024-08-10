function cinema(input) {
    let premierePrice = 12;
    let normalPrice = 7.5;
    let discountPrice = 5;

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    switch(type){
        case "Premiere":
        income = rows * columns * premierePrice;
        break;

        case "Normal":
        income = rows * columns * normalPrice;
        break;

        case "Discount":
        income = rows * columns * discountPrice;
        break;
    }

    console.log(`${income.toFixed(2)} leva`)
}
cinema(["Premiere", "10", "12"])