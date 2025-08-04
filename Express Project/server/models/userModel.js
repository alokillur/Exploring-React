const { pool } = require("../config/dbConnection");

const createUserDB = async (username, email, password) => {
  const [result] = await pool.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password]
  );
  return { id: result.insertId, username, email };
};

const checkEmailExists = async (email) => {
  const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
  return rows.length > 0;
};

const getUserByEmailDB = async (email) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};


module.exports = {
  createUserDB,
  getUserByEmailDB,
  checkEmailExists
};
