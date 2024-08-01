function areaOfFigures(input) {
    let figure = input[0];
    let result = 0
    if (figure === 'square') {
        let a = Number(input[1]);
        result = a * a;
        console.log(result.toFixed(3));

    } else if (figure === 'rectangle') {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b;
        console.log(result.toFixed(3));

    } else if (figure === 'circle') {
        let r = Number(input[1]);
        result = Math.PI * r**2;
        console.log(result.toFixed(3));

    } else if (figure === 'triangle') {
        let a = Number(input[1]);
        let ha = Number(input[2]);
        result = (a * ha) / 2;
        console.log(result.toFixed(3));
    }
}
areaOfFigures(["circle", "6"])