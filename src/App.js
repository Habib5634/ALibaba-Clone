
import Discover from "./Components/DiscoverBussiness/Discover";
import EmpoweringBussiness from "./Components/EmpoweringBussiness/EmpoweringBussiness";
import ExploreOffer from "./Components/ExploreOffers/ExploreOffer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Navbar from "./Components/Navbar/Navbar";
import NewUser from "./Components/NewUser/NewUser";
import PersonalizeYourTrading from "./Components/PersonalizeYourTrading/PersonalizeYourTrading";
import SourceFactory from "./Components/SourceFactory/SourceFactory";
import StreamlineOrdering from "./Components/StreamlineOrdering/StreamlineOrdering";
import TradeWithConfidence from "./Components/TradeWithConfidence/TradeWithConfidence";


function App() {
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
    </>
  );
}

export default App;
