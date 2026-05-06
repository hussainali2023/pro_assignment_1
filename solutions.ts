// Problem: 1 

const filterEvenNumbers = (numbersArr: number[]) => {
    const result = numbersArr.filter((n) => n % 2 === 0);
    return result;
}


// Problem: 2

const reverseString = (text: string) => {
    const reversed = text.split('').reverse().join('');
    return `"${reversed}"`;
}


// Problem: 3`

const checkType = (data: string | number) => {
    if(typeof data === 'string') {
        return `"String"`;
    } else {
        return `"Number"`;
    }
}


// problem: 4 

const getProperty = <T>(obj: T, key: keyof T) => {
    const result = obj[key];
    return result;
}