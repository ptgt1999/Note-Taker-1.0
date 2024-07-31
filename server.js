const express = require("express");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server: ", error);
    } else {
        console.log(`Serve is listening on ${PORT}`);
    }
});