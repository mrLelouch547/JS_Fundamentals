function Echo_Type(parameter) {
    const type = typeof parameter;
    if (type === "string" || type === "number") {
        console.log(`${type}\n${parameter}`);
    } else {
        console.log(`object\nParameter is not suitable for printing`);
    }
}
Echo_Type(null);
