function isExcellent(input) {
    let grade = Number(input[0]);
    if (grade >= 5.50) {
        console.log('Excellent');
    } else if (grade >= 4.50){
        console.log('Very Good');
    } else if (grade >= 3.50){
        console.log('Good');
    } else if (grade >=2.50){
        console.log('Bad');
    } else if (grade <= 2.49){
        console.log('Poor');
    }
}
isExcellent(["6.0"])