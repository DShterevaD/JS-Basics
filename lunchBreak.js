function lunchBreak(input) {
    let seriesName = input[0];
    let seriesTime = Number(input[1]);
    let breakTime = Number(input[2]);
    
    let restTime = breakTime * 0.25;
    let lunchTime = breakTime * 0.125;
    let freeTime = breakTime - (restTime + lunchTime);
    let difference = Math.abs(freeTime - seriesTime);
    if (freeTime > seriesTime) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(difference)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(difference)} more minutes.`);
    }

}
lunchBreak(["Game Of Thrones", "60", "96"])