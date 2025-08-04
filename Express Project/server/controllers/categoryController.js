const asyncHandler = require("express-async-handler");
const {
  getAllCategoriesDB,
  getCategoryByIdDB,
  createCategoryDB,
  updateCategoryDB,
  deleteCategoryDB,
} = require("../models/categoryModel");

const getCategories = asyncHandler(async (req, res) => {
  const user_id = req.user.id; 
  const categories = await getAllCategoriesDB(user_id);
  res.status(200).json(categories);
});

const createCategory = asyncHandler(async (req, res) => {
  const user_id = req.user.id;
  const { name, price } = req.body;

  if (!name || price == null) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const newCategory = await createCategoryDB(name, price, user_id);
  res.status(201).json(newCategory);
});

const getCategory = asyncHandler(async (req, res) => {
  const user_id = req.user.id;
  const category = await getCategoryByIdDB(req.params.id, user_id);

  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  res.status(200).json(category);
});

const updateCategory = asyncHandler(async (req, res) => {
  const user_id = req.user.id;
  const { name, price } = req.body;
  const id = req.params.id;

  const existing = await getCategoryByIdDB(id, user_id);
  if (!existing) {
    res.status(404);
    throw new Error("Category not found");
  }

  const success = await updateCategoryDB(id, name, price, user_id);
  if (!success) {
    res.status(400);
    throw new Error("Failed to update category");
  }

  res.status(200).json({ message: `Updated category ${id}` });
});

const deleteCategory = asyncHandler(async (req, res) => {
  const user_id = req.user.id;
  const id = req.params.id;

  const existing = await getCategoryByIdDB(id, user_id);
  if (!existing) {
    res.status(404);
    throw new Error("Category not found");
  }

  const success = await deleteCategoryDB(id, user_id);
  if (!success) {
    res.status(400);
    throw new Error("Failed to delete category");
  }

  res.status(200).json({ message: "Category deleted" });
});

module.exports = {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
