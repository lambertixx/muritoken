import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MuriToken = await ethers.getContractFactory("MuriToken");
  const muritoken = await MuriToken.deploy(deployer.address);
  const address = await muritoken.getAddress()

  console.log("MuriToken deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
