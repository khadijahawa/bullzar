import React, { useState, useRef, Suspense, useEffect } from "react";
import {
  useAddress,
  useContract,
  Web3Button,
  useStorageUpload,
  useNFTs,
} from "@thirdweb-dev/react";
import styles from "../styles/Theme.module.css";
import { Link } from "react-router-dom";
import { Model } from "../components";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Trans } from "@lingui/macro";
import { Button } from "react-bootstrap";
import { profile2 } from "../assets";

const NFT_COLLECTION_ADDRESS = "0xFCe8AB8881eEaF81803fB9669cC2d6F4750d5657";

// need fix //

const CreateNft = () => {
  const { mutateAsync: upload } = useStorageUpload(); // Thirdweb storage upload hook
  const address = useAddress();
  const { contract: nftCollection } = useContract(
    NFT_COLLECTION_ADDRESS,
    "nft-collection"
  );
  const [nftName, setNftName] = useState("");
  const [file, setFile] = useState();
  const fileInputRef = useRef(null);
  const ref = useRef();
  const [autoRotate, setAutoRotate] = useState(true); // State to control auto-rotation
  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };
  //  const [message, setMessage] = useState("");
  //  const { data: nfts, isLoading: loadingNfts } = useNFTs(nftCollection);

  // Function to store file in state when the user uploads it
  const uploadFile = () => {
    if (fileInputRef?.current) {
      fileInputRef.current.click();

      fileInputRef.current.onchange = () => {
        if (fileInputRef?.current?.files?.length) {
          const file = fileInputRef.current.files[0];
          setFile(file);
        }
      };
    }
  };

  const mintWithSignature = async () => {
    try {
      const signedPayloadReq = await fetch(`/API/server`, {
        method: "POST",
        body: JSON.stringify({
          authorAddress: address,
          nftName: nftName || "",
        }),
      });
      console.log(signedPayloadReq);
      // Grab the JSON from the response
      const json = await signedPayloadReq.json();
      console.log("hello", json);

      if (!signedPayloadReq.ok) {
        alert(json.error);
        return;
      }

      // Extract the file from the response or use the existing file state
      const fileToUpload = json.signedPayload.image || file;

      // Upload the file to Thirdweb storage along with additional data
      const dataToUpload = {
        name: nftName || "", // Include the name if available
        description: "The Awesome BULL Friends", // A default description or modify as needed
        image: fileToUpload, // The file to upload
      };

      const uris = await upload({ data: dataToUpload });

      // Continue with the rest of your code using the uploaded URI
      const signedPayload = json.signedPayload;
      const nft = await nftCollection?.signature.mint({
        ...signedPayload,
        image: uris[0], // Use the storage URI instead of the file
      });

      alert("Minted successfully!");

      return;
    } catch (e) {
      console.error("An error occurred trying to mint the NFT:", e);
    }
  };

  //fix market - friends page//

  return (
    <div>
      <section>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link className="transfer-button2" to="/Friends">
            <Button>
              <Trans> Friends</Trans>
            </Button>
          </Link>
          <Link className="transfer-button2" to="/BULLTOWN">
            <Button style={{ marginRight: "20px" }}>
              <Trans>BULLTOWN</Trans>
            </Button>
          </Link>
          <Link to="/Profile">
            <img src={profile2} alt="address" />
          </Link>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mintWithSignature();
          }}
        >
          <div className="token-card1 justify-center">
            {/* Form Section */}
            <h1>Q4-2024</h1>
            <h1 className="text-2xl font-bold text-blue-500 text-center">
              <Trans> MINT BULL Friend</Trans>
            </h1>
            ! 🐶🐨🍇🐓🍌🍐🍎🐰🦝🍋🍊🦁🐵🐧
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Bull Friend"
                style={{ cursor: "pointer", maxHeight: 250, borderRadius: 8 }}
                onClick={() => setFile(undefined)}
              />
            ) : (
              <div
                className={styles.imageInput}
                onClick={uploadFile}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                }}
              >
                <Trans> Upload an Image to Mint!</Trans>
              </div>
            )}
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              id="profile-picture-input"
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            {/* Sale Price For Listing Fields */}
            <input
              type="text"
              name="name"
              className={styles.textInput}
              placeholder="Name"
              style={{ minWidth: "320px" }}
            />
            <input
              type="text"
              name="description"
              className={styles.textInput}
              placeholder="Description"
              style={{ minWidth: "320px" }}
            />
            <Web3Button
              contractAddress={NFT_COLLECTION_ADDRESS}
              action={() => mintWithSignature()}
            >
              <Trans>NOT ALLOWED</Trans>
            </Web3Button>
          </div>
          <div style={{ marginTop: 24 }}></div>
        </form>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "75vw",
          height: "50vh",
        }}
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ width: "1200px", height: "580px" }}
          onClick={toggleAutoRotate}
        >
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={2}
              environment="city"
            >
              <Model />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate={autoRotate} />
        </Canvas>
      </div>
    </div>
  );
};

export default CreateNft;
