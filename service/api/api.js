//服务层

class API {

  //添加数据
  createData(modelName, o) {

    //modelName: 模型名称, string
    //o: 创建的数据, object
    return model[modelName].create(o);
  }

  //查询数据
  findData(modelName, condition, attrs) {
    //modelName: 模型名称, string
    //condition: 查询条件, object
    //attrs: 查询字段, array
    return model[modelName].findAll({
      where: condition,
      attributes: attrs
    })
  }

  //更新数据
  updateData(modelName, values, condition) {
    //modelName: 模型名称, string
    //values: 需要设置的数据, object
    //condition: 条件, object
    return model[modelName].update(values, {
      where: condition
    });
  }

}

module.exports = new API();