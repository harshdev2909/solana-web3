import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const KeyPair = Keypair.generate()

const publickey = KeyPair.publicKey.toString()
const secretKey = KeyPair.secretKey

console.log("Public Key:", publickey);
console.log("Private Key (Secret Key):", secretKey);

// Convert the message "hello world" to a Uint8Array
const message = new TextEncoder().encode("hello world");
const signature = nacl.sign.detached(message, secretKey);
console.log(signature)
const result = nacl.sign.detached.verify(
    message,
    signature,
    KeyPair.publicKey.toBytes(),
  );
  
  console.log(result);