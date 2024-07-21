function depositCalc(input) {
    let depositSum = Number(input[0]);
    let term = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;


    let total = depositSum + term * ((depositSum * annualInterestRate / 12));
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    console.log(total)
}
depositCalc(["200",  "3", "5.7"])