import InputForm from "../components/InputForm";
import "../Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contactPageHeader">
        <h2>We&apos;d Love To Hear From You!</h2>
        <p>Contact Us Using The Form Below</p>
      </div>
      <div className="contactPageContainer">
        <div className="contactFormInfoContainer">
          <h3>DailyRecap Contact Form</h3>
          <br />
          <p>
            Got any questions or feedback? Feel free to reach out to us by email
            at &nbsp;
            <a href="mailto:xxxx@gmail.com">xxxx@gmail.com</a>
          </p>
          <br />
          <p>
            You can also give us a call at &nbsp;
            <a href="tel:XXX-XXX-XXXX">XXX-XXX-XXXX</a>
            &nbsp;for customer support.
          </p>
          <br />
          <h5>FOLLOW:</h5>
          <div className="socials">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </div>
        </div>
        <div className="contactFormContainer">
          <InputForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
