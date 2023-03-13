export const checkIfValueIsDigit = (value: string) => {
    if (!/^[0-9.]+$/.test(value)) {
        if (value !== '') return false;
    }
    return true;
};