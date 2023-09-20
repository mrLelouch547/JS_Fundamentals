function solve(pages, pages1hour, days) {
    let totalHours = pages / pages1hour;
    let hoursAday = totalHours / days;
    console.log(hoursAday);
}
solve(212, 20, 2);
