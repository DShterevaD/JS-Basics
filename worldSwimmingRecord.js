function  worldSwimmingRecord(input) {
    let recordInSecs = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondFor1Meter = Number(input[2]);

    let distanceWithoutSlowing = distanceInMeters * secondFor1Meter;
    let timeWithSlowing = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = distanceWithoutSlowing + timeWithSlowing;

    if (totalTime < recordInSecs) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordInSecs).toFixed(2)} seconds slower.`);
    }

}
worldSwimmingRecord(["10464", "1500", "20"]);
    