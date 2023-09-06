require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d`,
    //   //accounts: [process.env.privateKey]
    // },
    // matic: {
    //   url: "https://polygon-mumbai.g.alchemy.com/v2/Y_SnEVy9I8wXvOhxcp-WYMLxdfPLZE3L",
    //   //accounts: [process.env.privateKey]
    // },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/gTP0WeeCI9WQHcdKLgNdv1iqu1H648C-",
      accounts: [ "a17b0afda055670d11bb9f783273899d10791cb323d78545e0a81f65138be7c9" ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};