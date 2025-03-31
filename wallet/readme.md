# Solana Keypair Generation from Mnemonic

This example demonstrates how to generate a Solana keypair from a 12-word mnemonic (seed phrase) using the `bip39` library and `@solana/web3.js`. The mnemonic phrase is converted into a seed, which is then used to generate a Solana keypair.

## Prerequisites

Before running this example, make sure you have the following dependencies installed:

- `@solana/web3.js` - Solana Web3.js library for interacting with Solana blockchain.
- `bip39` - A library for generating and converting BIP-39 mnemonics (seed phrases).

You can install these dependencies using npm:

```bash
npm install @solana/web3.js bip39
