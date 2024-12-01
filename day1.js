const example = `3   4
4   3
2   5
1   3
3   9
3   3`;

const splitAndSort = (input) => {
    const leftColumn = [];
    const rightColumn = [];
    let temp = '';

    for (let i = 0; i <= input.length; i++) {
        if (input[i] === '\n' || i === input.length) {
            const [left, right] = temp.split('   ');

            leftColumn.push(left);
            rightColumn.push(right);

            temp = '';
        } else {
            temp += input[i];
        }
    }

    return [leftColumn.sort(), rightColumn.sort()];
};

const getDistance = (left, right) => {
    let distance = 0;

    for (let i = 0; i < left.length; i++) {
        distance += Math.abs(left[i] - right[i]);
    }

    return distance;
};

const splitted = splitAndSort(example);
const distance = getDistance(splitted[0], splitted[1]);

// console.log(splitted);
// console.log(distance);
