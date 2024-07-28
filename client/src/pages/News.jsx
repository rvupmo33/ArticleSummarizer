import NewsCard from "../components/NewsCard";
import newsData from "../Data/newsData";

const News = () => {
  return (
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
      {newsData.map((item, index) => (
        <NewsCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default News;
