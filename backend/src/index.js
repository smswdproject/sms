// IMPORTING THE .env CONFIGURATION
require("dotenv").config();
const dbConnect = require("./config/database.config");

const PORT = process.env.PORT || 4000;


// INITIALISING THE EXPRESS APP/SERVER
const app = require("./app");


// CONNECTING THE SERVER WITH THE DATABASE
dbConnect();


// ACTIVATING THE SERVER TO LISTEN
app.listen(PORT, () => {
    console.log(`SERVER IS LISTENING AT THE PORT NO. ${PORT}`);
})
