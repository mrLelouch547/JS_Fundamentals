function solve(s1, s2, s3) {
    let rotations = (s1.length * s2.length * s3.length) / 2;
    console.log(`The plate was rotated ${Math.ceil(rotations / 2.5)} times.`);
}
solve("Rammstein", "Sehnsucht", "Engel");
