import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Send Message
  app.post("/api/send-message", async (req, res) => {
    const { name, email, message } = req.body;
    
    console.log(`Received message from ${name} (${email}): ${message}`);
    
    // In a real app, we'd use a mail service here.
    // For now, we'll return a success status.
    
    res.json({ 
      success: true, 
      message: "Message received. We will get back to you soon at " + (process.env.CONTACT_EMAIL || "hheiwanor@gmail.com") 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
