const bcrypt=require("bcrypt")

// Hashing SHA256 we use for storing the password but not always
// Rainbow Table 
// Hmlog hashing table mein salt add krte just like add some strings
        


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