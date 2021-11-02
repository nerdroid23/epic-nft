module.exports = async function (hre) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();

  await deploy('Greeter', {
    from: deployer,
    args: ['Hello, from deployer'],
    log: true,
    autoMine: true,
  });
};

module.exports.tags = ['Greeter'];
