import express from "express";
import cors from "cors";
import "dotenv/config"; 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


app.get("/api/key", (req, res) => {
    console.log("hello")
    res.json({ privateKey: process.env.PRIVATE_KEY });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
