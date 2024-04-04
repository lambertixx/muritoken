require("dotenv").config();
const { PRIVATE_KEY, MUMBAI_RPC_URL } = process.env;
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
