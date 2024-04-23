const hre = require("hardhat");
const { ethers, run, network } = require("hardhat")

async function main() {
  const SimpleStorageFactory = await hre.ethers.getContractFactory(
    "SimpleStorage"
  );
  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment();

  console.log(`SimpleStorage deployed to ${simpleStorage.target}`);
  console.log(network.config)

  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY){
    await simpleStorage.deploymentTransaction.wait(6)
    await verify(simpleStorage.address, [])
  }

  const currentValue = await simpleStorage.retrieve()
  console.log(`Current Value is: ${currentValue}`)

  const transactionResponse = await simpleStorage.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await simpleStorage.retrieve()
  console.log(`Update Value is: ${updatedValue}`)
}

async function verify(contractAddress,args) {
  console.log("Verifying contract ...")
  try {
    await run("verify:verify",{
      address: contractAddress,
      contructorArguments: args,
    })
  }catch (e) {
    if(e.message.toLowerCase().includes("already verified")){
      console.log("Already Verified!")
    }else{
      console.log(e)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
