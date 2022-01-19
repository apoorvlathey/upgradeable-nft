// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract NFT is ERC721Upgradeable {
  function initialize() public initializer {
    __ERC721_init("NFToken", "NFT");
    _mint(msg.sender, 1);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    override
    returns (string memory)
  {
    return "ipfs://Qmf1eUPPrDLomrs1nWrXs2ZsgQuppL2Z8aVeeqEHQPfynK/2.json";
  }
}
