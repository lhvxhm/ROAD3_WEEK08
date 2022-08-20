require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * 切记私钥不要上传到仓库 切记 切记
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    
    "optimism": {
       url: "https://opt-mainnet.g.alchemy.com/v2/FCK-g1vvLYP5SFcuAURYrsfO9DaqJ6Ag",
       accounts: [ "cb4bdff733cb2daf4d29cb413d265a5ebf75c5d780a4aefa8a7033248aa3b3aa"
        ]
    }
  }
};