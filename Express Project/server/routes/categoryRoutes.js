const express = require('express');
const { getCategories, createCategory, getCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const validateToken = require('../middleware/validateTokenHandler');
const router = express.Router();

router.use(validateToken);
router.route("/").get(getCategories).post(createCategory);
router.route("/:id").get(getCategory).put(updateCategory).delete(deleteCategory);


module.exports = router;