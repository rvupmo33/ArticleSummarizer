const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { HfInference } = require("@huggingface/inference");

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const hf = new HfInference("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");

const summarizeText = async (text) => {
  try {
    console.log("Text to summarize:", text);
    const response = await hf.summarization({
      model: "facebook/bart-large-cnn",
      inputs: text,
      parameters: { max_length: 60, min_length: 60 },
    });
    console.log("Summary response:", response);
    return response.summary_text.trim();
  } catch (error) {
    console.error("Error summarizing text:", error);
    throw new Error("Error summarizing text");
  }
};

app.get("/news", async (req, res) => {
  try {
    const apiKey = "1fd40c453b7b4c9d8544cbec17626503";
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );

    console.log("API response:", response.data);

    const articlesWithSummaries = await Promise.all(
      response.data.articles.map(async (article) => {
        try {
          const summary = await summarizeText(
            article.content || article.description || "No content available"
          );
          return {
            title: article.title,
            url: article.url,
            urlToImage: article.urlToImage,
            summary,
          };
        } catch (error) {
          console.error(`Error summarizing article: ${article.title}`, error);
          return {
            title: article.title,
            url: article.url,
            urlToImage: article.urlToImage,
            summary: "Summary not available",
          };
        }
      })
    );

    res.json({ articles: articlesWithSummaries });
  } catch (error) {
    console.error("Error fetching or summarizing news:", error);
    res.status(500).send("Error fetching or summarizing news");
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port} http://localhost:${port}`);
});
