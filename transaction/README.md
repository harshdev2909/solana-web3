Transactions and Instructions
On Solana, we send transactions to interact with the network. Transactions include one or more instructions that specify operations to be processed. The execution logic for instructions are stored on programs deployed to the Solana network, where each program defines its own set of instructions.

Below are key details about how transactions are processed:

If a transaction includes multiple instructions, the instructions execute in the order they are added to the transaction
Transactions are "atomic" - either all instructions process successfully, or the entire transaction fails and no changes are made.
For simplicity, a transaction can be thought of as a request to process one or multiple instructions.


Think of a transaction like an envelope containing forms. Each form is an instruction that tells the network what we are requesting to do. When you send the transaction, it's like mailing the envelope to get the forms processed.

Key Points
Solana transactions include instructions that are requests to invoke programs on the network.
Transactions are atomic - if any instruction fails, the entire transaction fails and no changes occur.
Instructions on a transaction are processed in sequential order.
The maximum size of a transaction is 1232 bytes.
Each instruction requires 3 pieces of information:
The address of the program to invoke
The accounts the instruction will read from or write to
Any additional data required by the instruction (e.g. function arguments)
