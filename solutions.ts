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

