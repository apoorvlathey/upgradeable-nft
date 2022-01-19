import { HardhatRuntimeEnvironment, Network } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { utils } from "ethers";

const contractName = "HelloWorld";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, upgrades, ethers } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await upgrades.deployProxy(NFT, [], {
    initializer: "initialize",
  });
  console.log("NFT deployed to:", nft.address);
};
export default func;
func.tags = [contractName];
