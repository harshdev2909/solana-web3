import { Keypair, Connection , LAMPORTS_PER_SOL, Transaction } from "@solana/web3.js";
import {  TOKEN_PROGRAM_ID , createMint } from '@solana/spl-token';


// Generate a new Keypair for the payer (this will be used to fund the mint creation)
const payer = Keypair.generate()
console.log('Payer public key:', payer.publicKey.toBase58());

// Generate a new Keypair for the mint (this will represent the token mint)
const mint = Keypair.generate();
console.log('Token Mint public key:', mint.publicKey.toBase58());

//Create a Solana devnet connection
const commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com");
// Create a new account for the payer with an airdrop
const airdropSignature = await connection.requestAirdrop(
    payer.publicKey,
    LAMPORTS_PER_SOL,
  );
  await connection.confirmTransaction({
    blockhash: recentBlockhash.blockhash,
    lastValidBlockHeight: recentBlockhash.lastValidBlockHeight,
    signature: airdropSignature,
  });
// Create and mint the token
const mintPubkey = await createMint(
    connection, // connection
    payer, // fee payer
    payer.publicKey, // mint authority
    null, // freeze authority
    9, // decimals
    Keypair.generate(), // keypair
    {
      commitment: "confirmed", // confirmation options
    },
    TOKEN_PROGRAM_ID, // program id
  );
  console.log(`Mint Address: ${mintPubkey.toBase58()}`);