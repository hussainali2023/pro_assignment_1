// Problem: 1 

const filterEvenNumbers = (numbersArr: number[]): number[] => {
    const result = numbersArr.filter((n) => n % 2 === 0);
    return result;
}



// Problem: 2

const reverseString = (text: string): string => {
    const reversed = text.split('').reverse().join('');
    return reversed;
}




// Problem: 3`

type StringOrNumber = string | number;

const checkType = (data: StringOrNumber): string => {
    if(typeof data === 'string') {
        return "String";
    } else {
        return "Number";
    }
}




// problem: 4 

const getProperty = <T>(obj: T, key: keyof T) => {
    const result = obj[key];
    return result;
}





// Problem: 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
    const result =  {...book, isRead: true}
    return result;
}




// Problem: 6

class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}


class Student extends Person {
    grade: string;
    
    constructor(name:string, age:number, grade:string){
        super(name, age);
        this.grade = grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}





// Problem: 7


const getIntersection = (array1: number[], array2: number[]) => {
    const newArr: number[] = [];
    for(let i = 0; i < array1.length; i++){
        if(array2.includes(array1[i]))
            newArr.push(array1[i]);
    }
    return newArr;
}