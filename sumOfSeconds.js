function allOfSeconds(input) {
    let racer1 = Number(input[0]);
    let racer2 = Number(input[1]);
    let racer3 = Number(input[2]);

    let totalTime = racer1 + racer2 + racer3;
    let timeInMin = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${timeInMin}:0 ${seconds}`);
    } else {
        console.log(`${timeInMin}:${seconds}`);
    }

}