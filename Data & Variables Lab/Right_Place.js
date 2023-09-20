function RightNames(replace, char, check) {
    let replaced = replace.replace("_", char);
    if (replaced === check) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}
RightNames("Str_ng", "I", "Strong");
