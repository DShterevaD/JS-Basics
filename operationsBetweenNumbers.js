function operationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case "+": result = N1 + N2; break;
        case "-": result = N1 - N2; break;
        case "*": result = N1 * N2; break;
        case "/":
            if (N2 === 0) {
                result = `Cannot divide ${N1} by zero`
            } else {
                result = (N1 / N2).toFixed(2);
            }
            break;
        case "%":
            if (N2 === 0) {
                result = `Cannot divide ${N1} by zero`
            } else {
                result = (N1 % N2);
            }
            break;
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        if (result % 2 === 0) {
            result = result + " - even";
        } else {
            result = result + " - odd";
        }
    }

    if ((operator === "/" || operator === "%") && N2 === 0) {
        console.log(result);
    } else {
        console.log(`${N1} ${operator} ${N2} = ${result}`);

    }
}
operationsBetweenNumbers(["10", "12", "+"])