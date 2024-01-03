/* eslint-disable */
import React from 'react'
import { useEffect, useState } from 'react';
import { Coin } from '../../components';
import { Trans } from "@lingui/macro";

const Exchange = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const openContainer = (link) => {
    setSelectedLink(link);
};
const closeContainer = () => {
    setSelectedLink(null);
};
  useEffect(() => {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
    // const apiUrl2 = "https://api.coinstats.app/public/v1/coins?skip=0";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log("coins", coins);
  console.log(search);
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="container bg-white dark:bg-black sm:justify-between p-4 md:p-6 lg:p-12">   
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="p-4">
              <p>CLUB Smart wallets "SocialMedia and Emails" not supported @ BULLDEX </p>
             <Trans> SWAP </Trans> BULL-BEARS
              <div className="text-2xl bg-blue-200 font-bold text-yellow-500 text-center rounded-[15px]">
                {[
                  {
                    text: "ACCESS BULLDEX SWAP ----- powerd by DexKit",
                    href: "https://bulldex-2.dexkit.app/",
                    bgColor: "bg-blue-500",
                  },
                ].map((link, index) => (
                  <div
                    key={index}
                    className="block px-6 py-2 text-center text-black dark:text-white rounded-md cursor-pointer"
                    onClick={() => openContainer(link)}
                  >
                    {link.text}
                  </div>
                ))}
              </div>
              <div>
              <div className="exchange-container p-4">
        <iframe
          id="simpleswap-frame"
          name="SimpleSwap Widget"
          src="https://simpleswap.io/widget/05e3723b-31e1-48d2-a975-b96b2c2e7204" width="100%" height="450"
          frameBorder="0"
        ></iframe>
      </div>
        </div>
            {filteredCoins?.map((coin, index) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              );
            })}
          </div>
          <div className="container rounded-[15px] items-center px-4 pb-5 mx-auto mt-20 lg:flex md:px-50"></div>
        </div>
      </div>
      {selectedLink && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-full h-full fixed inset-0 overflow-y-auto">
            <button onClick={closeContainer} className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded-full cursor-pointer">
              Back to Dapp
            </button>
            <iframe
              src={selectedLink.href}
              width="100%"
              height="100%"
              title="Container"
            ></iframe>
          </div>
        </div>
      )}
      
    </div>
  );
};
export default Exchange;

