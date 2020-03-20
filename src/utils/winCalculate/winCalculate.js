const winCalculate = (values, size) => {
    console.log(values);
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for(let i=0;i<i+5;i++) {
            if (values[i] === values[i + 1] && values[i] !== null) {
                count++;
            } else {
                count = 0;
            }
        }
        if (count === size - 1) {
            console.log(1);
            return 'Win' + values[i]
        }
        else{
            count=0;
        }
    }
    for (let i = 0; i < values.length; i++) {
        for (let k = i + (+size); k < values.length; k += (+size)) {
            if (values[i] === values[k] && values[i] !== null) {
                count++;
            } else {
                count = 0;
            }
        }
        if (count === size - 1) {
            console.log(1);
            return 'Win' + values[i];
        }
    }
    for (let i = 0; i < values.length; i = +size + i + 1) {
        if (values[i] === values[+size + i + 1] && values[i] !== null) {
            count++;
        } else {
            count = 0;
        }
        if (count === size ) {
            return 'Win' + values[i];
        }
    }
    for(let i=0;i<values.length;i++){
        console.log('asd');
    }
    // for (let i = size - 1; i < values.length; i = +size + i - 1) {
    //     if (values[i] === values[(+size) + i-1] && values[i] !== null) {
    //         count++;
    //     } else {
    //         count = 0;
    //     }
    //     if (count === size - 1) {
    //         return 'Win' + values[i];
    //     }
    // }
    if (!values.includes(null)) {
        return 'Tie';
    }
};


export default winCalculate;