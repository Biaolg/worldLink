//用户模型(数据表结构)
const Sequelize = require('sequelize');

let Model = Sequelize.Model;

//Business模型继承Model
class Column extends Model {

}

//创建business数据表结构
Column.init({
    //id字段
    id: {
        //数据类型, INTEGER: 整型, UNSIGNED: 无符号
        type: Sequelize.INTEGER.UNSIGNED,

        //是否允许为null
        allowNull: false,

        //主键
        primaryKey: true,

        //自动递增
        autoIncrement: true,

        //备注
        comment: '表id'
    },

    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        //默认值
        defaultValue: '',
        comment: '用户邮箱'
    },

    type: {
        type: Sequelize.STRING(50),
        allowNull: false,
        //默认值
        defaultValue: '',
        comment: '栏目类型'
    },

    coverTitle: {
        type: Sequelize.STRING(250),
        allowNull: false,
        //默认值
        defaultValue: '',
        comment: '栏目标题'
    },

    coverMessage: {
        type: Sequelize.STRING(250),
        allowNull: false,
        //默认值
        defaultValue: '',
        comment: '栏目寄语'
    },

    content: {
        type: Sequelize.STRING(250),
        allowNull: true,
        //默认值
        defaultValue: '',
        comment: '栏目内容'
    },

    coverImg: {
        type: Sequelize.STRING(1234),
        allowNull: false,
        defaultValue: 'default.png',
        comment: '栏目封面'
    },

    coverMusic: {
        type: Sequelize.STRING(1234),
        allowNull: true,
        defaultValue: 'default.mp3',
        comment: '栏目音乐'
    },

    coverVudio: {
        type: Sequelize.STRING(1234),
        allowNull: true,
        defaultValue: 'default.mp4',
        comment: '栏目视频'
    },
    //是否分享
    isShare: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '分享: 1, 未分享0'
    },

    //是否删除
    isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '删除: 1, 未删除0'
    }

}, {
    //配置
    // 默认为类的名称，即在这种情况下为`Business`。 这将控制自动生成的`foreignKey`（外键）的名称和关联命名
    modelName: 'column',

    //是否添加时间戳属性 (updatedAt, createdAt)
    timestamps: true,

    //是否开启假删除
    //不实际删除数据库记录，而是设置一个新 deletedAt 属性，其值为当前日期
    paranoid: true,

    //自动设置字段为蛇型（以_方式命名）命名规则
    underscored: true,

    //是否禁止修改表名
    //默认情况下，sequelize 会自动将所有传递的模型名称转换为复数形式。
    freezeTableName: true,

    //定义表名
    tableName: 'column',

    //连接实例
    sequelize

})

//force: true, 如果存在该表，则先删除该表，再创建新表，否则直接创建新表
//force: false, 如果存在该表，则不创建新表，否则创建新表
Column.sync({ force: false });

//导出模型
module.exports = Column;