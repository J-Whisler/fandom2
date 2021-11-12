const express = require("express");
const app = express();
const PORT = 2323;
const cors = require("cors");

app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})