import React from "react";
import axios from "axios";
import { os, logo3, logo11 } from "../../assets";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";

const ADDRESS = "0x617e2b0cE5AE1C5b93Acbd4181F10A6fbc225905";
const apikey = "I6NWK8WSJIU6W94MQT9CZCFN8Y14JKD6NG";
const endpoint = "https://api.basescan.org/api/";
const nftpng =
  "https://black-legal-fowl-39.mypinata.cloud/ipfs/QmNo6MGVvkWPPPUK4BVADCutzm2hxnXkS4bCcVwu5UrZLR/";

  
const Intro = () => {
  const { theme } = useTheme();
  const [nftdata, setNftData] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const responseA = await axios.get(
          endpoint +
            `?module=stats&action=tokensupply&contractaddress=${ADDRESS}&apikey=${apikey}`
        );
        const balance = responseA.data;
        console.log(balance);

        const responseB = await axios.get(
          endpoint +
            `?module=account&action=tokennfttx&contractaddress=${ADDRESS}&page=1&offset=100&tag=latest&apikey=${apikey}`
        );
        const result = responseB.data.result;
        setNftData(result);
        console.log(responseB.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // Display the last 3 NFTs
  const last3NFTs = nftdata.slice(-3);

  return (
    <div className="container">
      <div className="text-black dark:text-white">
        <Trans>
          "Only one member possesses the Eye of Ra, and their Identity remains a
          Mystery."
        </Trans>
      </div>
      <div className="row">
        <div className="row items mt-3">
          <div
            className="ml-3 mr-3"
            style={{
              display: "inline-grid",
              gridTemplateColumns: "repeat(4, 5fr)",
              columnGap: "10px",
            }}
          >
            {last3NFTs.map((result, index) => {
              return (
                <div key={`${result.tokenID}_${index}`}>
                  <div
                    className="card"
                    style={{ width: "200px", height: "200px" }}
                  >
                    <div className="image-over">
                      <Link to="/Market">
                        <img
                          className="card-img-top"
                          src={`${nftpng}${result.tokenID}.png`}
                          alt=""
                          style={{ width: "200px", height: "200px" }}
                        />
                      </Link>
                    </div>
                    <div className="card-caption col-12 p-0">
                      <div className="card-body">
                        <div className="card-bottom d-flex justify-content-between"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <a
                href="https://opensea.io/collection/bull-base-members-1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={os} width="100" height="100" alt="openssea" />
              </a>
              <a
                href="https://bullmart.bullsclub.space"
                target="_blank"
                rel="noreferrer"
              >
                {theme === "light" ? (
                  <img src={logo3} width="100" height="100" alt="bull logo2" />
                ) : (
                  <img src={logo11} width="100" height="100" alt="bull logo" />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
