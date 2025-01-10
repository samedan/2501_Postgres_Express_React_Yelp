// import pg from 'pg'
// const { Pool } = pg

// const pool = new Pool()

// export const query = (text, params) => pool.query(text, params)

// const { Pool } = require("pg");

// const pool = new Pool();

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "9896",
  host: "localhost",
  port: 5432,
  database: "yelp",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
