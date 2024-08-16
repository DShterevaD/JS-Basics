function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];
    let sleepovers = days - 1;

    let priceFor1P = 18;
    let priceForA = 25;
    let priceForPA = 35;
    let totalPrice = 0;

    switch (roomType) {
        case "room for one person":
            totalPrice = sleepovers * priceFor1P;
            break;

        case "apartment":
            if (sleepovers < 10) {
                totalPrice = sleepovers * priceForA * (1 - 0.3);
            } else if (sleepovers >= 10 && sleepovers <= 15) {
                totalPrice = sleepovers * priceForA * (1 - 0.35);
            } else {
                totalPrice = sleepovers * priceForA * (1 - 0.50);
            }
            break;

        case "president apartment":
            if (sleepovers < 10) {
                totalPrice = sleepovers * priceForPA * (1 - 0.1);
            } else if (sleepovers >= 10 && sleepovers <= 15) {
                totalPrice = sleepovers * priceForPA * (1 - 0.15);
            } else {
                totalPrice = sleepovers * priceForPA * (1 - 0.20);
            }
            break;
    }

    if (rating === "positive") {
        totalPrice = totalPrice + (totalPrice * 0.25);
    } else {
        totalPrice = totalPrice - (totalPrice * 0.1);
    }


    console.log(totalPrice.toFixed(2));
}
skiTrip(["14", "apartment", "positive"])