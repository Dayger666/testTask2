export const requiredField = (value) => {
    if (value) return undefined;
    return 'Field is required';
};
export const isNumber = (value) => {
    if (!isNaN(+value)) return undefined;
    return 'Incorrect input';
};
export const minValue = (value) => {
    if (value >= 5) return undefined;
    return 'Min value must be 5';
};
export const maxValue = (value) => {
    if (value <= 20) return undefined;
    return 'Max value must be 20';
};