//in this file we require all the files in the directory

const apple=require("./apple");
const mango=require("./mango");
const banana=require("./banana");

let fruits=[apple,mango,banana];

module.exports=fruits;