const x = 0;
console.log(x);

//byte
const y = 202;
console.log(x);

//Array of bytes
const bytes = [202, 244, 1, 23];
console.log(bytes);


//UInt8Array
//A better way to represent an array of bytes is to use a UInt8Array in JavaScrip

let bytess = new Uint8Array([0, 255, 127, 128]);
console.log(bytess);

//Why Use UInt8Array Over Native Arrays?
//Space Efficiency: Every number in a native array takes 64 bits (8 bytes). But every value in a UInt8Array takes just 1 byte.
//Enforced Constraints: A UInt8Array ensures that each element doesn’t exceed 255.


