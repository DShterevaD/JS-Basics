function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let expenses = 0;
    let accomodation = "";


    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                accomodation = "Camp";
                expenses = budget * 0.30;
                break;

            case "winter":
                accomodation = "Hotel";
                expenses = budget * 0.70;
                break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                accomodation = "Camp";
                expenses = budget * 0.40;
                break;

            case "winter":
                accomodation = "Hotel";
                expenses = budget * 0.80;
                break;
        }
    } else if (budget > 1000) {
        accomodation = "Hotel";
        destination = "Europe";
        expenses = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${expenses.toFixed(2)}`);

}
journey(["50", "summer"])