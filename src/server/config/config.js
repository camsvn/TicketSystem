require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_CLUSTER: process.env.DB_CLUSTER,
};