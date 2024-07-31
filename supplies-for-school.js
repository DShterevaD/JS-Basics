function suppliesForSchool(input) {
    let penPackages = Number(input[0]) * 5.80;
    let markerPackages = Number(input[1]) * 7.20;
    let litersPreparat = Number(input[2]) * 1.20;
    let percentdiscount = Number(input[3]) / 100;

    let totalPrice = (penPackages + markerPackages + litersPreparat);
    let discountPrice = totalPrice - (totalPrice * percentdiscount);
    console.log(discountPrice);
}
suppliesForSchool(["2", "3", "4", "25"])