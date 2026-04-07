const express = require("express");
const app = express();

const PORT = +process.env.port || 8080;

app.get("/", (req, res) => {
    return res.json({
        status: "success",
        message: "Hello from Sujal",
    })
});

app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`);
})