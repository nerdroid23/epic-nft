// import chaiModule from "chai";
// import {chaiEthers} from "chai-ethers";

const chaiModule = require("chai");
const { chaiEthers } = require("chai-ethers");

chaiModule.use(chaiEthers);

module.exports = chaiModule;