
import Discover from "./Components/DiscoverBussiness/Discover";
import ExploreOffer from "./Components/ExploreOffers/ExploreOffer";
import Navbar from "./Components/Navbar/Navbar";
import NewUser from "./Components/NewUser/NewUser";
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
    </>
  );
}

export default App;
