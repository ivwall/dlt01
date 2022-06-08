// Make sure the DevToken contract is included by requireing it.
const DevToken = artifacts.require("DevToken");
const Ownable = artifacts.require("Ownable");
const Stakeable = artifacts.require("Stakeable");
const Greeter = artifacts.require("Greeter");

// THis is an async function, it will accept the Deployer account, the network, and eventual accounts.
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the DevToken
  await deployer.deploy(DevToken, "DevToken", "DVTK", 18, "500000000000");
  const devToken = await DevToken.deployed()

  await deployer.deploy(Ownable);
  await deployer.deploy(Stakeable);
  await deployer.deploy(Greeter, "What's up doc?");

};