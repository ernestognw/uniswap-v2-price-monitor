const { providers, Contract } = require("ethers");
const { chainId, exchange } = require("../config");
const FACTORY_ABI = require("./abis/factory.json");
const PAIR_ABI = require("./abis/pair.json");

const provider = new providers.InfuraProvider(chainId);

const factoryContracts = [
  new Contract(exchange[0].factory_address, FACTORY_ABI, provider),
  new Contract(exchange[1].factory_address, FACTORY_ABI, provider),
];

const instantiatePairs = (pairA, pairB) => [
  new Contract(pairA, PAIR_ABI, provider),
  new Contract(pairB, PAIR_ABI, provider),
];

module.exports = { factoryContracts, instantiatePairs, provider };
