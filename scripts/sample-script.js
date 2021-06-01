async function main() {
  const Token = await hre.ethers.getContractFactory("DOGToken");
  const initialSupply = hre.ethers.utils.parseEther("2000");
  const token = await Token.deploy(initialSupply);
  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
