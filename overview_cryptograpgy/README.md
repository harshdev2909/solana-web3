# Learning Journey: Solana, Ethereum, Blockchain, and Web3

This repository documents my day-by-day learning journey through the world of blockchain, focusing on **Solana**, **Ethereum**, **Web3 technologies**, and key blockchain concepts. I dive deep into the foundational whitepapers of these technologies, explore their ecosystems, and study their real-world applications.

## Key Topics Covered:

- **Solana**: Detailed exploration of Solana, including its consensus mechanism, architecture, and ecosystem.
- **Ethereum**: In-depth study of Ethereum's protocol, smart contracts, and dApp development.
- **Blockchain Basics**: Core concepts behind blockchain technology, cryptography, consensus mechanisms, and distributed ledgers.
- **Web3**: Understanding decentralized web technologies, smart contracts, and dApp development.
- **Rust**: Learning Rust programming language, specifically focusing on its use in the Solana ecosystem.
- **Anchor**: Study of Anchor framework for building secure and efficient programs on Solana.

## This Repository Includes:

- **Notes from Whitepapers**: Key takeaways from reading Solana, Ethereum, and other blockchain-related whitepapers.
- **Code Snippets**: Examples of smart contracts, dApp development, and Solana Rust programs.
- **Tutorials**: Hands-on guides for implementing Web3 concepts using Ethereum, Solana, and Rust.
- **Tech Insights**: Observations and analysis from my daily learning experience.

Feel free to explore the repo, contribute, or follow along as I continue to expand my knowledge in the exciting field of blockchain and Web3!



# Authentication in Traditional Banks vs Blockchains

## How Banks Do Authentication

In traditional banks, authentication typically involves a **username** and **password**. These credentials are sufficient to perform the following actions:

1. View your account balance and funds
2. Transfer funds between accounts
3. Review your transaction history

## How Blockchains Do Authentication

To create an account on a blockchain, you need to generate a **public-private keypair**.

### Public-Private Keypair

A public-private key pair is a set of two keys used in **asymmetric cryptography**. These two keys have the following characteristics:

- **Public Key**: The public key is a string that can be shared openly. It is used to receive transactions or verify signatures.
# Bits and Bytes

## What is a Bit?

A **bit** is the smallest unit of data in a computer and can have one of two values: `0` or `1`.

Think of a bit like a light switch that can be either off (`0`) or on (`1`).

## What is a Byte?

A **byte** is a group of **8** bits. It’s the standard unit of data used to represent a single character in memory. Since each bit can be either `0` or `1`, a byte can have `2^8` (256) possible values, ranging from `0` to `255`.

## Representing Bits and Bytes in JavaScript
for this you can check the above file 'bits_bytes.js'


# Hashing vs Encryption

## Hashing

Hashing is a process of converting data (like a file or a message) into a fixed-size string of characters, which typically appears random.

**Common Hashing Algorithms**: 
- SHA-256
- MD5

## Encryption

Encryption is the process of converting plaintext data into an unreadable format, called **ciphertext**, using a specific algorithm and a key. The data can be decrypted back to its original form only with the appropriate key.

### Key Characteristics:
- **Reversible**: With the correct key, the ciphertext can be decrypted back to plaintext.
- **Key-dependent**: The security of encryption relies on the secrecy of the key.
- **Two Main Types**:
    - **Symmetric Encryption**: The same key is used for both encryption and decryption.
    - **Asymmetric Encryption**: Different keys are used for encryption (public key) and decryption (private key).

# Asymmetric Encryption

Asymmetric encryption, also known as **public-key cryptography**, is a type of encryption that uses a pair of keys: a **public key** and a **private key**. The keys are mathematically related, but it is computationally infeasible to derive the **private key** from the **public key**.

### Key Characteristics:

- **Public Key**: The public key is a string that can be shared openly.
- **Private Key**: The private key is a secret cryptographic code that must be kept confidential. It is used to decrypt data encrypted with the corresponding public key or to create digital signatures.

### Common Asymmetric Encryption Algorithms:

1. **RSA** - Rivest–Shamir–Adleman
2. **ECC** - Elliptic Curve Cryptography (ECDSA) - ETH and BTC
3. **EdDSA** - Edwards-curve Digital Signature Algorithm - SOL
