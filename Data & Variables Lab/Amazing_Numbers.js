function solve(number) {
    let numberString = number.toString();
    let sum = 0;
    for (let i = 0; i < numberString.length; i++) {
        sum += Number(numberString[i]);
    }

    let sumString = sum.toString();
    if (sumString.includes("9")) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}
solve(999);
