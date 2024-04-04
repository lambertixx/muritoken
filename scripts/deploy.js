const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account: ", deployer.address);

  const MuriToken = await hre.ethers.getContractFactory("MuriToken");
  const muritoken = await MuriToken.deploy(deployer.address);

  await muritoken.deployed();

  console.log("MuriToken deployed to: ", muritoken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
