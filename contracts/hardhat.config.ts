import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { MNEMONIC } from "./.secrets";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com`,
      accounts: { mnemonic: MNEMONIC },
    },
  },  
};

export default config;
