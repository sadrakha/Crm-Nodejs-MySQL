const router = require("express").Router();

const categoryController = require("./category.controller");

router.post(
  "/category/add",
  categoryController.addCategory
);
router.post(
  "/category/edit/:id",
  categoryController.editCategory
);
router.delete(
  "/category/delete/:id",
  categoryController.deleteCategory
);

router.post(
  "/subCategory/add",
  categoryController.addSubCategory
);
router.post(
  "/subCategory/edit/:id",
  categoryController.editSubCategory
);
// router.delete('/subCategory/delete',verify.verifyToken,categoryController.)

module.exports = router;
