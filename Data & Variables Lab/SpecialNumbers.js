function solve(n) {
    let iAsString;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        iAsString = i.toString();
        if (i === 5 || (i === 7 && iAsString.length === 1)) {
            console.log(`${i} -> True`);
            continue;
        }

        for (let j = 0; j < iAsString.length; j++) {
            sum += Number(iAsString[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
}
solve(15);
