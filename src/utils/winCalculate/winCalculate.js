const winCalculate = (values, size) => {
    let count = 0;
    let iterator = 0;
    for (let i = 0; i < values.length; i++) {
        iterator++;

        if (values[i] === values[i + 1] && values[i] !== null) {
            count++;
        }
        if (iterator === +size) {
            count = 0;
            iterator = 0;
        }
        if (count === size - 1) {
            return 'Win ' + values[i]
        }

    }
    for (let i = 0; i < size - 1; i++) {
        for (let k = i + (+size); k < values.length; k += (+size)) {
            if (values[i] === values[k] && values[i] !== null) {
                count++;
            } else {
                count = 0;
            }
        }
        if (count === size - 1) {
            return 'Win ' + values[i];
        }
    }
    for (let i = 0; i < values.length; i = +size + i + 1) {
        if (values[i] === values[+size + i + 1] && values[i] !== null) {
            count++;
        } else {
            count = 0;
        }

        if (count === size - 1) {
            return 'Win ' + values[i];
        }
    }
    for (let i = values.length - 1; i > 0; i = i - size + 1) {
        if (values[i] === values[(+size) + i - 1] && values[i] !== null) {
            count++;
        } else {
            count = 0;
        }
        if (count === size - 1) {
            return 'Win ' + values[i];
        }
    }
    if (!values.includes(null) && values.includes('X')) {
        return 'Tie';
    }
};


export default winCalculate;