const service = require("./category.service");
const categoryService = new service();
const categoryModel = require("../../../models/category.model");
const subCategoryModel = require("../../../models/subCategory.model");

exports.addCategory = async (req, res, next) => {
  try {
    if (!req.permissions.includes("category")) {
      throw Error;
    }
    const category = await categoryService.addCategory(req);
    res.send(category);
  } catch (error) {
    next(error);
  }
};
exports.editCategory = async (req, res, next) => {
  try {
    if (!req.permissions.includes("category")) {
      throw Error;
    }
    if (!(await categoryModel.findOne({ where: { id: req.params.id } }))) {
      throw Error;
    }
    const category = await categoryService.editCategory(req);
    res.send(category);
  } catch (error) {
    next(error);
  }
};
exports.deleteCategory = async (req, res, next) => {
  try {
    if (!req.permissions.includes("category")) {
      throw Error;
    }
    if (!(await categoryModel.findOne({ where: { id: req.params.id } }))) {
      throw Error;
    }
    const category = await categoryService.deleteCategory(req);
    res.send(category);
  } catch (error) {
    next(error);
  }
};
exports.addSubCategory = async (req, res, next) => {
  try {
    if (!req.permissions.includes("category")) {
      throw Error;
    }
    const subCategory = await categoryService.addSubCategory(req);
    res.send(subCategory);
  } catch (error) {
    next(error);
  }
};
exports.editSubCategory = async (req, res, next) => {
  try {
    if (!req.permissions.includes("category")) {
      throw Error;
    }
    if (!(await subCategoryModel.findOne({ where: { id: req.params.id } }))) {
      throw Error;
    }
    const subCategory = await categoryService.editSubCategory(req);
    res.send(subCategory);
  } catch (error) {
    next(error);
  }
};
