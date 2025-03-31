// import { generateMnemonic, mnemonicToSeedSync } from 'bip39';

// // Generate a 12-word mnemonic
// const mnemonic = generateMnemonic();
// console.log('Generated Mnemonic:', mnemonic);
// const seed = mnemonicToSeedSync(mnemonic);
// console.log(seed)


import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';


// Example mnemonic (12-word phrase)
const mnemonic = generateMnemonic()

// Convert the mnemonic into a seed (using BIP-39 and PBKDF2)
const seed = mnemonicToSeedSync(mnemonic);

// Derive a private key from the seed using Solana's ed25519 keypair
const keypair = Keypair.fromSeed(seed.slice(0, 32)); // Solana uses the first 32 bytes for the private key

console.log("Public Key:", keypair.publicKey.toString());
console.log("Private Key (Secret Key):", keypair.secretKey);
