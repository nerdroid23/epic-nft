const { expect } = require("./utils");
const { ethers, deployments } = require("hardhat");

describe("Greeter contract", function () {
  it("Should return the new greeting once it's changed", async function () {
    await deployments.fixture(["Greeter"]);
    const greeter = await ethers.getContract("Greeter");

    /*const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();*/

    expect(await greeter.greet()).to.equal("Hello, from deployer");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
