## `How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?`

## Generics
If we want to build a reusable function that can accept any kind of data, but we don't want to lose our strict type checking by taking the lazy route and using any? That is exactly where Generics come in!

Generics act like special placeholders or variables for our types. When we use any to make a function reusable, TypeScript completely forgets what type of data we passed in, returning an unsafe value. But when we use Generics, TypeScript tracks and remembers the exact data type we are working with.

This allows us to write a component once, pass in a string, a number, or a custom object, and TypeScript will stay strictly typed regardless of the data structure we pass in!
```ts
const genericCourse = <T>(courseInfo: T) => {
    return {
        course: "Next Level TypeScript",
        ...courseInfo
    }
}

const student1 = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    hasMobile: true
}


const course1 = genericCourse(student1);


console.log(course1);

`output: 
{
  course: 'Next Level TypeScript',
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  hasMobile: true
}`



```
