function solve(centuries) {
    const oneYear = 365.2422;
    let years = centuries * 100;
    let days = Math.trunc(years * oneYear);
    let hours = days * 24;
    let minutes = 60 * hours;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
solve(5);
