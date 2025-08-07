const bcrypt=require("bcrypt")



const password="Rohit@123";

async function Hashing(){
// hashcode + salt
//console.time("hash");

//const salt=await bcrypt.genSalt(10);
//const hashpass= await bcrypt.hash(password,salt);
const hashpass= await bcrypt.hash(password,10);

//console.timeEnd("hash");

const ans=await bcrypt.compare(password,hashpass);
console.log(ans);

// console.log(salt);
// console.log(hashpass);
}

Hashing();

// ye 10 means 2 ka power 10 which is 1024

// Algoriths --> hashcode

// same password rahne par bhi alag alag hash code aayega  proof h niche
// $2b$10$9vp4RHzAQRg0p9sQL/7.m.xZB26tRgujq/yTEg.HeUnYMPX/fz8M
// $2b$10$U2niY2shVigaadOAXQMBZeHkGV5Fng/HEQB0AquqAUOX5LofAe1ue

// 2b dikha rha h bcrypt ka version and 10 dikha rha h round off 
// salt has 22 char and hashcode has 31 char 
//$2b$10$iP1uyCbDjeLxJI3wnRBqhu
//$2b$10$iP1uyCbDjeLxJI3wnRBqhuGZxfD5AkOAiobA5Xz7JUIW/32b.dUna