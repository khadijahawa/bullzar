



const { ThirdwebSDK } = require("@thirdweb-dev/sdk");
const animalNames = require("../utils/BullFriends");
const { CreateNFT } = require("../constants/contractAddresses");


module.exports = async function generateMintSignature(req, res) {
  try {
    const { authorAddress, nftName, image } = JSON.parse(req.body);
    if (!process.env.Friend_KEY) {
      throw new Error("Not authorized.");
    }

    const sdk = ThirdwebSDK.fromPrivateKey(
      process.env.Friend_KEY,
      "base",
      { secretKey: process.env.REACT_APP_TEMPLATE_CLIENT_ID }
    );

    const nftCollection = await sdk.getContract(CreateNFT, "nft-collection");
    if (!animalNames.includes(nftName?.toLowerCase())) {
      res.status(400).json({ error: "That's not one of our friends!" });
      return;
    }

    const hasMinted = (await nftCollection.balanceOf(authorAddress)).gt(0);
    if (hasMinted) {
      res.status(400).json({ error: "Already minted" });
      return;
    }

    const signedPayload = await nftCollection.signature.generate({
      to: authorAddress,
      metadata: {
        name: nftName,
        image: image,
        description: "The Awesome BULL Friends",
        properties: {
          // Add any properties you want to store on the NFT
        }
      }
    });

    res.status(200).json({
      signedPayload: JSON.parse(JSON.stringify(signedPayload))
    });
  } catch (e) {
    res.status(500).json({ error: `Server error ${e}` });
  }
};