const { instantiatePairs, provider, factoryContracts } = require("./contracts");
const { token } = require("./config");

const monitor = async () => {
  const [pairAAddress, pairBAddress] = await Promise.all([
    factoryContracts[0].getPair(token[0].address, token[1].address),
    factoryContracts[1].getPair(token[0].address, token[1].address),
  ]);

  const [pairA, pairB] = instantiatePairs(pairAAddress, pairBAddress);

  provider.on("block", async () => {
    const [reserveA0, reserveA1] = await pairA.getReserves();
    const [reserveB0, reserveB1] = await pairB.getReserves();

    const priceA = reserveA0.div(reserveA1);
    const priceB = reserveB0.div(reserveB1);

    console.table([
      {
        "Token A": token[0].symbol,
        "Token B": token[1].symbol,
        "Price A": priceA.toString(),
        "Price B": priceB.toString(),
        Diff: Math.abs(priceA.sub(priceB)),
      },
    ]);
  });
};

monitor();
