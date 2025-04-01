interface Person{
    name:string,
    age:number,
    gender:string,
    adhar?:number  //Aab ye optional ban gya h
}

const obj:Person={
    name:"Priya",
    age:18,
    gender:"female"
}

//Latest example

interface customer{
    name:string,
    age:number,
    balance:number
}

const obj2: Readonly<customer>={
    name:"Sneha",
    age:19,
    balance:420
}
//Partial:all property becomes optional
//Required: All property should be filled
//Readonly: The property can only be read, write option is not available

//Array of objects
interface people {name:string,age:number};
interface manager {salary:number,id:string}

const arr:(people | manager)[]=[{name:"Rohan",age:18},{salary:20,id:"2341"}]

//function in TS

function greet(a:number):number{
    console.log(a);
    return a+5;
}
console.log(greet(10));

function meet(msg:string,val:number):void{
    console.log(msg,val);
}

meet("Ananya",7);
//default parameter
function neet(msg:string="Jit"){
    console.log(msg);
}
neet();
neet("Bittu");

//Optional parameter
function Gate(person?:string){
    console.log(person||"Mohan");
}
Gate("Mohit");
Gate();

//arrow function

const sum=(a:number,b:number):number=>{
    return a+b;
}
console.log(sum(3,4));

//callback function

function palceorder(order:number,callback:(amount :number)=>void):void{
    const amount:number=order+10;
    callback(amount);
}
palceorder(10,(amount)=>{
    console.log(amount);
})


//Rest parameter

function total(...arr:number[]){
    let ans=0;
    arr.forEach((val)=>ans=ans+val);
    console.log(ans);
}
total(2,3,5,7,12,10);


//Extend keyword

interface human{
    name:string,
    age:number
};
interface Teacher extends human{
    salary:string,
    id:number
}
interface BankEmployee extends human{
    salary:string,
    position:string
}


const obj8:Teacher={
    name:"Marvi",
    age:18,
    salary:"chillar",
    id:241
}


