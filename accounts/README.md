On Solana, all data is contained in what we call "accounts". You can think of data on Solana as a public database with a single "Accounts" table, where each entry in this table is an individual account with the same base Account type.

Accounts can store up to 10MiB of data, which contain either executable program code or program state.
Accounts require a rent deposit in lamports (SOL) that is proportional to the amount of data stored, which is fully refundable when the account is closed.

Sysvar accounts are special accounts that store network cluster state.
Program accounts store the executable code of smart contracts.
Data accounts are created by programs to store and manage program state.


Every account on Solana is identifiable by a unique 32 byte address, which is generally displayed as a base58 encoded string (e.g 14grJpemFaf88c8tiVb77W7TYg2W3ir6pfkKz3YjhhZ5).

Most Solana accounts use an Ed25519 public key as their address.

Program Owner
On Solana, "smart contracts" are referred to as programs. Program ownership is a key aspect of the Solana Account Model. Every account has a designated program as its owner. Only the owner program can:

Modify the account's data field
Deduct lamports from the account's balance