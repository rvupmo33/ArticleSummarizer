const express = require("express");
const axios = require("axios");
const cors = require("cors");
const https = require('https');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());


app.get("/news", async (req, res) => {
  try {
    const apiKey = "1fd40c453b7b4c9d8544cbec17626503";
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&language=en&apiKey=${apiKey}`
    );

    console.log("API response:", response.data);

    const articles = response.data.articles.map((article) => ({
      title: article.title,
      url: article.url,
      urlToImage: article.urlToImage,
      content: article.summary || article.description || "No content available",
    }));

    res.json({ articles });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news", error: error.message });
  }
});


app.post("/summarize", (req, res) => {
  const { text, num_sentences } = req.body;

  const options = {
    method: 'POST',
    hostname: 'gpt-summarization.p.rapidapi.com',
    path: '/summarize',
    headers: {
      'x-rapidapi-key': 'ceeeb495d6msh684152fb998d868p15a95djsnbea8afca99d5',
      'x-rapidapi-host': 'gpt-summarization.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  };

  const summarizationReq = https.request(options, (summarizationRes) => {
    let data = '';

    summarizationRes.on('data', (chunk) => {
      data += chunk;
    });

    summarizationRes.on('end', () => {
      try {
        const summarizedText = JSON.parse(data);
        res.json(summarizedText);
      } catch (err) {
        console.error("Error parsing response:", err);
        res.status(500).json({ message: "Error parsing summary response", error: err.message });
      }
    });
  });

  summarizationReq.on('error', (error) => {
    console.error("Error summarizing text:", error);
    res.status(500).json({ message: "Error summarizing text", error: error.message });
  });

  summarizationReq.write(JSON.stringify({
    text: text,
    num_sentences: num_sentences || 3
  }));

  summarizationReq.end();
});

app.listen(port, () => {
  console.log(`Server started on port ${port} http://localhost:${port}`);
});
