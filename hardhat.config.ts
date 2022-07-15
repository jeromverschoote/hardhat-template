import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    hardhat: {},
    localhost: {},
    ethereum: {
      chainId: 1,
      url: process.env.ETHEREUM_MAINNET_RPC_URL ?? '',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
    morden: {
      chainId: 2,
      url: process.env.ETHEREUM_MORDEN_RPC_URL ?? '',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
    ropsten: {
      chainId: 3,
      url: process.env.ETHEREUM_ROPSTEN_RPC_URL ?? '',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
    rinkeby: {
      chainId: 4,
      url: process.env.ETHEREUM_RINKEBY_RPC_URL ?? '',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
    goerli: {
      chainId: 5,
      url: process.env.ETHEREUM_GOERLI_RPC_URL ?? '',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
    kovan: {
      chainId: 42,
      url: process.env.ETHEREUM_KOVAN_RPC_URL ?? '',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
    polygon: {
      chainId: 137,
      url: process.env.POLYGON_MAINNET_RPC_URL ?? '',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
    mumbai: {
      chainId: 80001,
      url: process.env.POLYGON_MUMBAI_RPC_URL ?? '',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_API_KEY ?? '',
      kovan: process.env.ETHERSCAN_API_KEY ?? '',
      polygon: process.env.POLYGONSCAN_API_KEY ?? '',
    },
  },
};

export default config;
