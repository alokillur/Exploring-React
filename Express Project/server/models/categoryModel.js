const { pool } = require("../config/dbConnection");

const getAllCategoriesDB = async (user_id) => {
  const [rows] = await pool.query("SELECT * FROM categories WHERE user_id = ?", [user_id]);
  return rows;
};

const getCategoryByIdDB = async (id, user_id) => {
  const [rows] = await pool.query(
    "SELECT * FROM categories WHERE id = ? AND user_id = ?",
    [id, user_id]
  );
  return rows[0];
};

const createCategoryDB = async (name, price, user_id) => {
  const [result] = await pool.query(
    "INSERT INTO categories (name, price, user_id) VALUES (?, ?, ?)",
    [name, price, user_id]
  );
  return { id: result.insertId, name, price, user_id };
};

const updateCategoryDB = async (id, name, price, user_id) => {
  const [result] = await pool.query(
    "UPDATE categories SET name = ?, price = ? WHERE id = ? AND user_id = ?",
    [name, price, id, user_id]
  );
  return result.affectedRows > 0;
};

const deleteCategoryDB = async (id, user_id) => {
  const [result] = await pool.query(
    "DELETE FROM categories WHERE id = ? AND user_id = ?",
    [id, user_id]
  );
  return result.affectedRows > 0;
};

module.exports = {
  getAllCategoriesDB,
  getCategoryByIdDB,
  createCategoryDB,
  updateCategoryDB,
  deleteCategoryDB,
};
