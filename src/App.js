import BrideandGroom from "./component/BrideandGroom";
import EngagementBanner from "./component/EngagementBanner";
import OurStory from "./component/OurStory";
import WeddingAnnouncement from "./component/WeddingAnnouncement";
import WeddingCountdown from "./component/WeddingCountdown";

function App() {
  return (
    <div className="w-screen h-screen">
      <WeddingAnnouncement />
      <BrideandGroom />
      <WeddingCountdown />
      <OurStory />
      <EngagementBanner />
    </div>
  );
}

export default App;
