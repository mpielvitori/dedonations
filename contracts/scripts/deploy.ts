import { ethers } from "hardhat";

async function main() {
  const montoObjetivo = 100000;
  const montoEtapa1 = 40000;
  const montoEtapa2 = 60000;
  const [
    beneficiario1, 
    beneficiario2,
    walletAutorizante1,
    walletAutorizante2,
    walletAutorizante3,
    walletAutorizante4,
  ] = await ethers.getSigners();

  const hospital = await ethers.deployContract("Hospital", [
    montoObjetivo,
    montoEtapa1,
    montoEtapa2,
    beneficiario1.address,
    beneficiario2.address,
    walletAutorizante1.address,
    walletAutorizante2.address,
    walletAutorizante3.address,
    walletAutorizante4.address,
  ]);

  // await lock.waitForDeployment();
  const resp = await hospital.waitForDeployment();
  console.log(resp);

  console.log(
    `Contract address ${hospital.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
