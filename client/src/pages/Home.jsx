// Home.jsx
import "../Home.css";
import "../index.css";
import WelcomeBar from "../components/WelcomeBar";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";

const Home = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div>
      <WelcomeBar />
      <Hero />
      <div>{typeof backendData}</div>
    </div>
  );
};

export default Home;
