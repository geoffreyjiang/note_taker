const express = require("express");
const apiRoutes = require("./routes/api_routes")
const PORT = process.env.PORT || 8000;
const app = express();
const clientRoutes = require("./routes/client_routes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))
app.use("/api", apiRoutes);
app.use("/", clientRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));