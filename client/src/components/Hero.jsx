import placeholder from "../images/placeholder.jpg";
import NewsTabs from "./NewsTabs";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="topStoryContainer">
        <img
          src={placeholder}
          alt="Top news story placeholder"
          className="heroImage"
        />
      </div>
      <div className="newsTabsContainer">
        <NewsTabs />
      </div>
    </div>
  );
};

export default Hero;
