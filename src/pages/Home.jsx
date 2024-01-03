import React from 'react'
import {HomeCampaings, Raise, Web3Domains, HomeStatus, ClubBanner, Extras, } from '../components'





const Home = () => {
  return (
    <div>
    <Raise/>
       <Extras />
     <ClubBanner />
     <HomeStatus />
     
       <HomeCampaings />

     
      <Web3Domains />
    </div>
  )
}

export default Home
