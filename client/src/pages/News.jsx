import NewsCard from "../components/NewsCard";
import { useEffect, useState } from "react";
import placeHolderImg from "../images/placeholder.jpg";

const News = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/news")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.articles || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="teamPageHeader">
        <h2>Latest News</h2>
        <p>Check out the latest news articles with summaries.</p>
      </div>
      <div
        className="cardContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          margin: "20px 0px",
          justifyContent: "center",
        }}
      >
        {backendData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            description={item.content || "Summary not available"}
            image={item.urlToImage || placeHolderImg}
            link={item.url}
          />
        ))}
      </div>
    </>
  );
};

export default News;
