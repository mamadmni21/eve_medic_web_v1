import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

// API Route: Send Message
app.post("/api/send-message", async (req, res) => {
  const { name, email, message } = req.body;
  
  console.log(`Received message from ${name} (${email}): ${message}`);
  
  res.json({ 
    success: true, 
    message: "Message received. We will get back to you soon at " + (process.env.CONTACT_EMAIL || "hheiwanor@gmail.com") 
  });
});

export default app;
