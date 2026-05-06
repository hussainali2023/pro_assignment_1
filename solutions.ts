// Problem: 1 

const filterEvenNumbers = (numbersArr: number[]) => {
    const result = numbersArr.filter((n) => n % 2 === 0);
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers));