require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_CLUSTER: process.env.DB_CLUSTER,
    COOKIE_NAME: process.env.COOKIE_NAME,
    SESS_SECRET: process.env.SESS_SECRET,
};