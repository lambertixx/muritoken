import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import '@nomicfoundation/hardhat-ethers'
import '@nomicfoundation/hardhat-chai-matchers'
import { HardhatUserConfig } from "hardhat/config";
import * as dotenv from 'dotenv'
dotenv.config()
const { PRIVATE_KEY, ALCHEMY_API_HTTPS } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    polygon: {
      url: ALCHEMY_API_HTTPS,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v6',
    alwaysGenerateOverloads: false,
    externalArtifacts: ['externalArtifacts/*.json'],
    dontOverrideCompile: false
  },
};

export default config;
