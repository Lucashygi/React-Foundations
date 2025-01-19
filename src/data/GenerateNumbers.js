const generateNumbers = (quantity) => {
    const numbers = [];
    const alreadyIncluded = new Set();

    for (let i = 0; i < quantity; i++) {
        var number = Math.floor(Math.random() * (60 - 1 + 1) + 1);
        if (!alreadyIncluded.has(number)){
            alreadyIncluded.add(number);
            numbers.push(number);
        } else {
            i--;
        }
    }
    return numbers.sort((a, b) => a - b);
}

export default generateNumbers;