const dotenv = require("dotenv");

dotenv.config();

const chainId = Number(process.env.CHAIN_ID);

const exchange = [
  {
    name: process.env.EXCHANGE_A_NAME,
    factory_address: process.env.EXCHANGE_A_FACTORY_ADDRESS,
  },
  {
    name: process.env.EXCHANGE_B_NAME,
    factory_address: process.env.EXCHANGE_B_FACTORY_ADDRESS,
  },
];

const token = [
  {
    symbol: process.env.TOKEN_0_SYMBOL,
    address: process.env.TOKEN_0_ADDRESS,
  },
  {
    symbol: process.env.TOKEN_1_SYMBOL,
    address: process.env.TOKEN_1_ADDRESS,
  },
];

module.exports = { chainId, exchange, token };
