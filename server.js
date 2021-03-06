const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

const apiRoutes = require("./Develop/routes/api-routes");
const clientRoutes = require("./Develop/routes/client-routes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"))
app.use("/api", apiRoutes);
app.use("/", clientRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));

