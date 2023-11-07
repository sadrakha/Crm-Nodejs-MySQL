class SequelizeService {
  constructor(Model) {
    this.model = Model;
  }

  create(body) {
    return this.model.build(body).save();
  }
  bulkCreate(body){
    return this.model.bulkCreate(body)
  }
  findOne(query){
    return this.model.findOne(query)
  }
  findAll(query){
    return this.model.findAll(query)
  }
  findAndCountAll(query){
    return this.model.findAndCountAll(query)
  }
  async findOneAndDelete(id){
    return this.model.destroy({where:{id}})
  }
  async findAllAndUpdate(body,query){
    return this.model.update(body,query)
  }
  async findOneAndUpdate(body,id){
    const row=await this.model.findOne({where:{id}})
    return row.update(body)
  }
  delete(query){
    return this.model.destroy(query)
  }
}
module.exports = SequelizeService;
