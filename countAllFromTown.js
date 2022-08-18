function countAllFromTown(regNumbers, town) {
    var splitedRegNumbers = regNumbers.split(",");
    let count = 0;

    for (var i = 0; i < splitedRegNumbers.length; i++) {
        var trimmedRegNumbers = splitedRegNumbers[i];

        if (trimmedRegNumbers.includes(town)) {
            count++;
        }
    }

    return count;
}
