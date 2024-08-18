function summerOutfit(input) {
    let temperature = Number(input[0]);
    let moment = input[1];
    let outfit;
    let shoes;

    if (temperature >= 10 && temperature <= 18) {
        if (moment === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";

        } else if (moment === "Afternoon" || moment === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";

        }
    } else if (temperature > 18 && temperature <= 24) {
        if (moment === "Morning" || moment === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";

        } else if (moment === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";

        }
    } else if (temperature >= 25) {
        if (moment === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";

        } else if (moment === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";

        } else if (moment === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";

        }
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16", "Morning"]);