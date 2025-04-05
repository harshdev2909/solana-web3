import { Keypair, Connection , LAMPORTS_PER_SOL, Transaction } from "@solana/web3.js";
import {  TOKEN_PROGRAM_ID , createMint } from '@solana/spl-token';


// Generate a new Keypair for the payer (this will be used to fund the mint creation)
const payer = "BdmpkTAbBQYRq5WUHTTCbAKCE6HbeoSzLZu1inQRrzU6"
console.log('Payer public key:', payer);

// Generate a new Keypair for the mint (this will represent the token mint)
const mint = Keypair.generate();
console.log('Token Mint public key:', mint.publicKey.toBase58());

//Create a Solana devnet connection
const commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);
// Create a new account for the payer with an airdrop
const airdropSol = async (publicKey) => {
    console.log(`Requesting airdrop of 2 SOL to ${publicKey}...`);
    const signature = await connection.requestAirdrop(payer.publicKey, 2 * LAMPORTS_PER_SOL);
  
    // Confirm the transaction
    await connection.confirmTransaction(signature);
    console.log(`Airdrop successful!`);
};

// Create and mint the token
const createMintAndMintTokens = async () => {
    // Airdrop SOL to the payer account
    // await airdropSol(payer);
  
    // Create the mint (token) and initialize it
    const token = await createMint(
      connection,
      payer, // The payer of the mint transaction
      payer.publicKey, // The authority who can mint and burn tokens (usually the creator)
      null, // Freeze authority (null means no freeze authority)
      9, // Decimals (decimals for the token; 9 is a good default)
      TOKEN_PROGRAM_ID
    );
    
    console.log('Token Mint created:', token.publicKey.toBase58());
  
    // Create an associated token account for the payer to hold the minted tokens
    const payerTokenAccount = await token.getOrCreateAssociatedAccountInfo(payer.publicKey);
    console.log('Payer Token Account:', payerTokenAccount.address.toBase58());
  
    // Mint tokens (e.g., 100 tokens with 9 decimals)
    const mintAmount = 100 * 10 ** 9; // 100 tokens with 9 decimals
    await token.mintTo(payerTokenAccount.address, payer.publicKey, [], mintAmount);
    console.log(`Minted ${mintAmount / 10 ** 9} tokens to the payer's token account.`);
  };
  
  // Execute the mint creation and minting process
  createMintAndMintTokens().catch((err) => {
    console.error('Error creating mint and minting tokens:', err);
  });

