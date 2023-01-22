/*
  ALL TASKS MUST BE IMPLEMENTED WITH TYPESCRIPT!
  Use interfaces and data types in all cases to explicitly specify the types
  for variables, function parameters, function return values and object structures. 
*/

/*
Task 1 - Greeter function
Create a function with the name GreeterFunction that takes a string as a parameter and returns a string that says "Hello, " + the parameter.
*/
/* Write your Task 1 solution here */
function GreeterFunction(name: string): string {
  return "Hello, " + name;
}
/* 
Task 2 - Define a city object and use an interface to define the object structure.
The city object should have the following properties
- name
- population
- country

The city object should be assigned to the cityObject variable.

The city object should describe Helsinki, Finland with population of 600000.
*/
interface City {
  name: string;
  population: number;
  country: string;
}
let city : City = {
  name: "Helsinki",
  population: 600000,
  country: "Finland",
}

let cityObject = city; // Assign your city object to cityObject variable.
console.log(cityObject);
/*
Task 3 - Create a class to describe an animal.
The animal class should have the following properties:
- name, such as "Cat", "Snake" etc.
- age in years

Then create two new animal objects, which should be assigned to animal1 and animal2 variables.
animal1 should have name "Cat" and age 2
animal2 should have name "Dog" and age 3
*/

  /* Write your solution here */
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  let animal1 = new Animal("Cat", 2);
  let animal2 = new Animal("Dog", 3);
  console.log(animal1+ " " + animal2);
/* Task 4 - Improve your solution for Task 3 so that the Animal
  class has a method called "makeSound". This improved solution should be implemented 
  in a class named Animal2. 

  The method should return a string in the following format "I am a <name> and I sound like <sound>".
  Where <name> is the name of the animal and <sound> is the sound the animal makes.
  The sound should be defined when the animal object is created.

  Use your Animal2 class to create two animal objects. You should create:
  - snake, which makes a sound "hiss", age is 4
  - lion, which makes a sound "roar", age is 8

  The animal objects should be assigned to snake and lion variables respectively.
*/
class Animal2 {
  /* Write your solution here */
  name: string;
  sound: string;
  age: number;
  constructor(name:string, sound:string,age:number){
    this.name = name;
    this.sound = sound;
    this.age = age;
  }
  makeSound():string{
    return `I am a ${this.name} and I sound like ${this.sound}`;
  }
}

let snake = new Animal2("Snake","hiss",4); // Initialize the snake
let lion = new Animal2("Lion","roar",8); // Initialize the lion
console.log(snake.makeSound());
console.log(lion.makeSound());

export { GreeterFunction, cityObject, animal1, animal2, snake, lion };
