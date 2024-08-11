function hotelRoom(input) {
    let month = input[0];
    let stays = Number(input[1]);
    let studio = 0;
    let apartment = 0;
    let totalStudio = 0;
    let totalApartment = 0;

    switch (month) {
        case "May":
        case "October":
            if (stays > 7 && stays < 14) {
                totalStudio = 50 * stays * (1 - 0.05);
                totalApartment = 65 * stays;
            } else if (stays > 14) {
                totalStudio = 50 * stays * (1 - 0.3);
                totalApartment = 65 * stays * (1 - 0.1);
            } else {
                totalStudio = 50 * stays;
                totalApartment = 65 * stays;
            }
            break;
        case "June":
        case "September":
            if (stays > 14) {
                totalStudio = 75.20 * stays * (1 - 0.2);
                totalApartment = 68.70 * stays * (1 - 0.1);
            } else {
                totalStudio = 75.20 * stays;
                totalApartment = 68.70 * stays;
            }
            break;
        case "July":
        case "August":
            if (stays > 14) {
                totalStudio = 76 * stays;
                totalApartment = 77 * stays * (1 - 0.1);
            } else {
                totalStudio = 76 * stays;
                totalApartment = 77 * stays;
            }
            break;
    }


    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);

}
hotelRoom(["May", "15"])