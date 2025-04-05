// // everything onchain is a account
import { Connection, Keypair, LAMPORTS_PER_SOL, SystemProgram, Transaction } from '@solana/web3.js';

// Create a connection to the devnet cluster
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

// Generate a new Keypair (new account)
const newKeypair = Keypair.generate();
console.log('New account public key:', newKeypair.publicKey.toBase58());

// Create a new account and fund it using an airdrop (for devnet)
const airdropSol = async (publicKey) => {
  console.log(`Requesting airdrop of 2 SOL to ${publicKey}...`);
  const signature = await connection.requestAirdrop(newKeypair.publicKey, 2 * LAMPORTS_PER_SOL);
  
  // Confirm the transaction
  const confirm = await connection.confirmTransaction(signature);
  console.log(`Airdrop successful! Check balance with 'solana balance' ${confirm}`);
};

// Call airdrop function
airdropSol(newKeypair.publicKey.toBase58()).catch((err) => {
  console.error('Error during airdrop:', err);
});

// To check the balance of the new account
const checkBalance = async (publicKey) => {
  const balance = await connection.getBalance(newKeypair.publicKey);
  console.log(`Balance of new account: ${balance / LAMPORTS_PER_SOL} SOL`);
};


checkBalance(newKeypair.publicKey.toBase58());




