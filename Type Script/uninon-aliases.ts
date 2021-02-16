type Combinable = number | string;
type Conversional = 'as-text' | 'as-number';

function combine(
    input1: Combinable, 
    input2: Combinable,
    convertion: Conversional
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || convertion === 'as-number') {
        result = +input1 + Number(input2);
    } else {
        result = input1.toString() + input2.toString();
    }
    console.log(result);
}

combine(22, 34, 'as-number');