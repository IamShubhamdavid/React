const mongoose=require('mongoose');
const {Schema}=mongoose;

async function main(){

    await mongoose.connect("mongodb+srv://davidkumar4606:Ajay12%40%23@shubhamcoder.pmmmiw3.mongodb.net/Instagram");


}

module.exports = main;