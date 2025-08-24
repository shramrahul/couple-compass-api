require("dotenv").config(); // load .env variables
const { Pool } = require("pg");

const pool = new Pool({
  host: "",//process.env.PGHOST,
  user: "admin",//process.env.PGUSER,
  password: "password",//process.env.PGPASSWORD,
  database: "postgres",//process.env.PGDATABASE,
  port: "5432",//process.env.PGPORT,
});

pool.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

module.exports = pool;