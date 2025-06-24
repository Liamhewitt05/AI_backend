const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.static("public"));


app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
    });

    const responseText = chatResponse.choices[0].message.content;

    // Optional: check if the AI wants to redirect
    if (responseText.includes("[redirect:")) {
      const match = responseText.match(/\[redirect:(.*?)\]/);
      return res.json({ redirect: match[1] });
    }

    res.json({ response: responseText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to get response" });
  }
});

app.get("/", (req, res) => {
  res.send("AI Chatbot API is running.");
});

app.get("/widget-ui", (req, res) => {
  res.sendFile(__dirname + "/public/widget-ui.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
