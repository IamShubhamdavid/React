class Person{
    name:string;
    age:number;

    constructor(n1:string,n2:number){
        this.name=n1;
        this.age=n2;
    }
}

// greet():void{
//     console.log(`hi ${this.name}`);
// }

const obj1=new Person("Priya",18);
console.log(obj1);
const obj3=new Person("Sakshi",19);
console.log(obj3);

console.log(obj1.name);

// public private protected

class Customer{
    public name:string;
    private age:number;
    protected balance:number;
constructor(name:string,age:number,balance:number){
    this.name=name;
    this.age=age;
    this.balance=balance;
}
}
const P1=new Customer("Deepak",20,420);
console.log(P1);
console.log(P1.name);
//console.log(P1.age);
//console.log(P1.balance);

//Public alag hmlog use kr rhe hai to usko hmlog classs ke bahar bhi use kr skte hai
// Lekin Private and Protected ko hmloh class ke bahar use nhi kr skte hai
// isliye kyuki hmlog nhi chahte hai ki usme koi accidental change aa jaye 

class Employee extends Customer{
    salary:number;

    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance);
        this.salary=salary;
    }

}
const E1=new Employee(420,"Rohit",20,320);
console.log(E1);
console.log(E1.salary);


//Generics: Template

// function value(a:(number | string | number[])):(number | string | number[]){
//     return a;
// }

//T means template
function value<T>(a:T):T{
    return a;
}

console.log(value(10));
console.log(value("Rohit"));
console.log(value([10,2,4,6,8,25]));


interface Admin<T,U>{
    name:string,
    age:number,
    adhar:T,
    salary:U
}

const obj10: Admin<number,number>={
    name:"Shubham",
    age:18,
    adhar:123,
    salary:234
}
const obj11: Admin<string,number>={
    name:"Shubham",
    age:18,
    adhar:"1245",
    salary:245
}

