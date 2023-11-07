const sequelize = require("../../sequelize/sequelize.service");
const categoryModel = require("../../../models/category.model");
const subCategoryModel = require("../../../models/subCategory.model");

class category {
  constructor() {
    this.category = new sequelize(categoryModel);
    this.subCategory = new sequelize(subCategoryModel);
  }

  async addCategory(req) {
    try {
      const title = req.body.title;
      const category = await this.category.create({ title });
      return category;
    } catch (error) {
      return error;
    }
  }
  async editCategory(req) {
    try {
      const title = req.body.title;
      const categoryId = req.params.id;
      const category = await this.category.findOneAndUpdate(
        { title },
        categoryId
      );
      return category;
    } catch (error) {
      return error;
    }
  }
  async deleteCategory(req) {
    try {
      const categoryId = req.params.id;
      const result = await this.category.findOneAndDelete(categoryId);
      return result;
    } catch (error) {
      return error;
    }
  }
  async CategoryList(query) {
    try {
      const result = await this.category.findOne({ where: query });
      return result;
    } catch (error) {
      return error;
    }
  }
  async addSubCategory(req) {
    try {
      const categoryId = req.body.categoryId;
      const title = req.body.title;
      if (!(await this.CategoryList({ id: categoryId }))) {
        throw Error;
      }
      const subCategory = await this.subCategory.create({ title, categoryId });
      return subCategory;
    } catch (error) {
      return error;
    }
  }
  async editSubCategory(req) {
    try {
      const subCategoryId = req.params.id;
      const title = req.body.title;
      let categoryId = req.body.categoryId;

      if (!categoryId) {
        categoryId = await this.subCategory.findOne({
          where: { id: subCategoryId },
        }).categoryId;
      }
      const subCategory = await this.subCategory.findOneAndUpdate(
        { title, categoryId },
        subCategoryId
      );
      return subCategory;
    } catch (error) {
      return error;
    }
  }
}

module.exports = category;
