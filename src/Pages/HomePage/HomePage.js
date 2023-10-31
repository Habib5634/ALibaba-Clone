import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewUser from '../../Components/NewUser/NewUser'
import ExploreOffer from '../../Components/ExploreOffers/ExploreOffer'
import Discover from '../../Components/DiscoverBussiness/Discover'
import SourceFactory from '../../Components/SourceFactory/SourceFactory'
import TradeWithConfidence from '../../Components/TradeWithConfidence/TradeWithConfidence'
import StreamlineOrdering from '../../Components/StreamlineOrdering/StreamlineOrdering'
import PersonalizeYourTrading from '../../Components/PersonalizeYourTrading/PersonalizeYourTrading'
import GetStarted from '../../Components/GetStarted/GetStarted'
import EmpoweringBussiness from '../../Components/EmpoweringBussiness/EmpoweringBussiness'
import Footer from '../../Components/Footer/Footer'
import SubFooter from '../../Components/Footer/SubFooter'

const HomePage = () => {
  return (
    <>
        <Navbar/>
      <NewUser/>
      <ExploreOffer/>
      <Discover/>
      <SourceFactory/>
      <TradeWithConfidence/>
      <StreamlineOrdering/>
      <PersonalizeYourTrading/>
      <GetStarted/>
      <EmpoweringBussiness/>
      <Footer/>
      <SubFooter/>
    </>
  )
}

export default HomePage