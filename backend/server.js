import express from "express";

const app = express(); 

const PORT = 3000;

const handleListening = () =>
    console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);


