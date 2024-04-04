import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
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
};

export default config;
