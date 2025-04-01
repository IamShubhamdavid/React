// const d= new Date();

// // date is coming from 1970  1000millisecond

// // console.log(d.toDateString());
// // console.log(d.toString());
// // console.log(d.toISOString());

// // whenever we use "new" that means it is type of object 
// console.log(d.getDate());
// console.log(d.getDay());
// // Sun,Mon,Tue,WEd,Thru,fri,Sat
// // 0,1,2,3,4,5,6
// console.log(d.getMonth());
// // 0/1/2/3
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getSeconds());
// console.log(d.getTime());
// const now=Date.now();
// console.log(now);


// Number: 0 based start honge 
// String: 1 based start honge
// const d=new Date("2022-10-20T10:10:10");
// // year /month/ date/ hour/ minute/ second /milliseconds
// const date= new Date(2025,4,28,10,12,45,231);// number humesha 0 based hi start hoga 

// console.log(date.toString());

// const d= new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(3);
// console.log(d.toString());

// Date Calculation

// const date1=new Date();
// const date2=new Date("2025-04-21");
// console.log(date2-date1);
// differnvce between date is in millisecond


// CountDown time for Olympics
// Days, Hour, Minute ,Second
const date1=new Date();
const date2=new Date("2028-07-14T00:00:00");

const date=date2-date1;
const days=Math.floor(date/(1000*60*60*24));
const hour=Math.floor((date/(1000*60*60))%24);
const minute=Math.floor((date/(1000*60))%60);
const second=Math.floor((date/(1000))%60);

console.log(`Olympics Countdown time: Days:${days} hour:${hour} minutes:${minute} second:${second}`);













