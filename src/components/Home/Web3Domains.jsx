/* eslint-disable */
import React, { useState } from "react";
import { A, B, C } from '../../assets';
import { Trans } from "@lingui/macro";




export default function Web3Domains() {
    const [selectedLink, setSelectedLink] = useState(null);

    const imageArray = [A, B, C];
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const randomImage = imageArray[randomIndex];

    const openContainer = (link) => {
        setSelectedLink(link);
    };

    const closeContainer = () => {
        setSelectedLink(null);
    };

    return (
        <div className="bg-white dark:bg-black">
            <section className="container rounded-[15px] items-center justify-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">

                <div className="flex-1 flex flex-col items-center space-y-4 sm:text-center lg:text-left">

                    <h1 className="text-4xl font-bold text-yellow-500">
                      <Trans>  WEB3 NFT DOMAINS</Trans>
                    </h1>
                    <div className="flex-1 text-center">
                        <p className="max-w-xl leading-relaxed text-black-100 sm:mx-auto lg:ml-0 ">
                        <Trans>   W3B public blockchain-based Identity, decentralized domains that give users complete control and ownership</Trans>
                        </p>
                    </div>

                    <div className="items-center space-y-3 sm:space-x-6 sm:space-y-0 text-black dark:text-white sm:flex lg:justify-center">
                        {[
                            {
                                text: ".blockchain®",
                                href: "https://freename.io/reseller/xn--blockchain-0oa",
                                bgColor: "bg-blue-500",
                            },
                            {
                                text: ".metaverse®",
                                href: "https://freename.io/discover/xn--metaverse-ona",
                                bgColor: "bg-yellow-500",
                            },
                            {
                                text: ".4social",
                                href: "https://freename.io/discover/4social",
                                bgColor: "bg-purple-500",
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
                </div>
            </section>

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
}
