import { useState } from "react";
import { NewsTabData } from "../Data/newsTabData";

const NewsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="newsTabsContainer">
      {/* Tab Titles */}
      <ul className="tabTitles">
        {NewsTabData.map((news, index) => (
          <li
            key={index}
            className={activeTab === index ? "activeTab" : ""}
            onClick={() => handleClick(index)}
          >
            {news.title}
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tabContent">
        <div className="tabDescription">{NewsTabData[activeTab]?.desc}</div>
        <ul className="articlesList">
          {NewsTabData[activeTab]?.newsArticles.map((article, idx) => (
            <li key={idx} className="articleItem">
              <img src={article.image} alt={article.articleTitle} />
              <div className="articleText">
                <h3>{article.articleTitle}</h3>
                <p>{article.articleSummary}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsTabs;
