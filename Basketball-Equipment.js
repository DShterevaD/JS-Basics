function basketballEquipment (input) {
    let tax = Number(input[0]);

    let snickersPrice = tax - (tax * 0.4);
    let outfitPrice = snickersPrice - (snickersPrice * 0.2);
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let totalPrice = tax + snickersPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(totalPrice);

}
basketballEquipment(["365"])