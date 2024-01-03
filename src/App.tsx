import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import "./styles/Home.css";
import { Navbar, Sidebar, Footer } from "./components";
import {AddressBook, Bridge, Portal, Home, Profile, BullWallet, BearWallet,
  Campagins, NFT, AllStatus, Market, BullFlip, CampaignDetails,
   CreateCampaign, CreateNft, Friends } from "./pages/Index"




const App = () => {
  return (
       <ThemeProvider attribute="class">
      <main className="main bg-white dark:bg-black">
      <div className="relative sm:-8 p-4 bg-[#fcfcfa] min-h-screen flex flex-row bg-white dark:bg-black">

       <div className="sm:flex hidden mr-10 relative">
         <Sidebar />
       </div>
       <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
       <Navbar />
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/AddressBook" element={<AddressBook />} />
       <Route path="/Bridge" element={<Bridge />} />
       <Route path="/Portal" element={<Portal />} />
       <Route path="/Campagins" element={<Campagins />} />
       <Route path="/Wallet" element={<BullWallet />} />
       <Route path="/Profile" element={<Profile />} />
       <Route path="/BearWallet" element={<BearWallet />} />
       <Route path="/NFT" element={<NFT />} />
       <Route path="/Market" element={<Market />} />
       <Route path="/BullFlip" element={< BullFlip />} />
       <Route path="/CreateCampaign" element={<CreateCampaign />} />
       <Route path="/AllStatus" element={<AllStatus />} />
       <Route path="/CreateNft" element={<CreateNft />} />
       <Route path="/Friends" element={<Friends />} />


       <Route path="/CampaignDetails/:title" 
       element={<CampaignDetails />} />

       



       </Routes>
   </div>
 </div>
 <Footer />
</main>
</ThemeProvider>
);
}


export default App;