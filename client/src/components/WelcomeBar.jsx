import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const WelcomeBar = () => {
  return (
    <div className="welcomeBarContainer">
      <h1>Welcome to Daily Recap</h1>
      <h5>
        Lorem ipsum dolor sit, amet consectetur adipisicin ipsum dolor sit amet.
      </h5>
      <div className="subscriptionLinkContainer">
        <a href="#">
          Subscribe to our newsletter here &nbsp;
          <FontAwesomeIcon icon={faChevronRight} size="2xs" />
        </a>
      </div>
    </div>
  );
};

export default WelcomeBar;
