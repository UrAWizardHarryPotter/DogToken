const { assert } = require("chai");

describe("Token", function() {
  const initialSupply = ethers.utils.parseEther("2000");
  let token;
  beforeEach(async () => {
    const DOGToken = await ethers.getContractFactory("LBSToken");
    token = await DOGToken.deploy(initialSupply);
    await token.deployed();
  });

  it("should be able to find the initial supply in the owners balance", async () => {
    const [addr1] = await ethers.provider.listAccounts();
    const balance = await token.balanceOf(addr1);

    assert.equal(initialSupply.toString(), balance.toString());
  });
});
