//uInt8Array to ascii conversion
function bytetosacii(byteArray){
    return new TextDecoder().decode(byteArray)
}

const uint8arr =  new Uint8Array([72,101,108,108,111])
const asciis = bytetosacii(uint8arr);
console.log(asciis)


//ascii to uInt8array conversion --
function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }
  
  // Example usage:
  const ascii = "Hello";
  const byteArray = asciiToBytes(ascii);
  console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

// array to hex
function arrayToHex(byteArray) {
    let hexString = '';
    for (let i = 0; i < byteArray.length; i++) {
      hexString += byteArray[i].toString(16).padStart(2, '0');
    }
    return hexString;
  }
  
  // Example usage:
  const bytearray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const hexString = arrayToHex(bytearray);
  console.log(hexString); // Output: "48656c6c6f"
 
  //base64
  const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);


//base58 --used to generate publickey
const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

// Example usage:
const byteArrayss = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArrayss);
console.log(base58String); // Output: Base58 encoded string
