# Sample Hardhat Project

* This project demonstrates a basic Hardhat use case. 

It comes with a sample contract ("SimpleStorage.sol"), a few tests for that contract ("Should start with a favorite number of 0" and "Should update when we call store"), and a Hardhat Ignition module that deploys that contract ("deploy.js").

Here some tasks or commands of the project:

```shell
yarn hardhat compile
yarn hardhat clean
yarn hardhat coverage
yarn hardhat test
yarn hardhat test --grep store
yarn hardhat console --network sepolia
yarn hardhat console --network localhost
yarn hardhat node
yarn hardhat run .\scripts\deploy.js --network localhost
yarn hardhat block-number --network sepolia
yarn hardhat verify
yarn hardhat run .\scripts\deploy.js --network
```
