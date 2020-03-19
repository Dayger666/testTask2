export const requiredField=(value)=>{
    if(value) return undefined;
    return 'Field is required';
};
export const isNumber=(value)=>{
    if(!isNaN(+value)) return undefined;
    return 'Incorrect input';
};
export const valueOfNumber=(value)=>{
    if(value>=5&&value<=20) return undefined;
    return 'Min value must be 5 and Max value must be 20';
};