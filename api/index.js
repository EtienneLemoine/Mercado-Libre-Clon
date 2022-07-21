const server = require("./src/app.js");
const PORT = 4001;

server.listen(PORT, () => {
    console.log("%s listening at " + PORT);
});