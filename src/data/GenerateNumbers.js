const generateNumbers = (quantity) => {
    const numbers = [];
    const alreadyIncluded = new Set();

    for (let i = 0; i < quantity; i++) {
        var number = generateRandomNumber();
        if (!alreadyIncluded.has(number)) {
            alreadyIncluded.add(number);
            numbers.push(number);
        } else {
            i--;
        }
    }
    return numbers.sort((a, b) => a - b);
};

function generateRandomNumber() {
    const minNumber = 1;
    const maxNumber = 60;
    return Math.floor(
        Math.random() * (maxNumber - minNumber + minNumber) + minNumber
    );
}

export default generateNumbers;
