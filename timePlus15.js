function timePlus15(input) {
    let inputHours = Number(input[0]);
    let inputMinutes = Number(input[1]);

    let totalTime = inputHours * 60 + inputMinutes + 15;
    let hours = Math.floor (totalTime / 60);
    let minutes = totalTime % 60;

        if (hours > 23) {
            hours = 0;
        }

        if (minutes < 10) {
            console.log(`${hours}:0${minutes}`);
        } else if (minutes > 10) {
            console.log(`${hours}:${minutes}`);
        }

}
timePlus15(["1", "46"])