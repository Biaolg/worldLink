//路由控制器层

//导入api(服务)层
let api = require(__basename + '/api/api.js');

//导入工具库
let utils = require(__basename + '/utils/utils.js');

//导入moment模块，用于处理日期时间
const moment = require('moment');

//导入sequelize模块
const Sequelize = require('sequelize');

//获取sequelize操作符模块
let Op = Sequelize.Op;

//导入multiparty(文件上传处理)
const multiparty = require('multiparty');

//文件操作模块
const fs = require('fs');

class RouterController {

  //验证邮箱码
  validMailCode(req, res, next) {

    if (whileList.mailList.indexOf(req.url) > - 1) {
      //需要验证邮箱验证码
      //根据邮箱和验证码查询

      //获取当前时间减去邮箱验证的过期时间
      let currentTime = new Date().getTime() - 5 * 60 * 1000;

      //使用moment处理日期时间
      let date = moment(currentTime).format('YYYY-MM-DD HH:mm:ss');

      api.findData('Code', {
        email: req.body.email,
        code: req.body.code,
        createdAt: {
          [Op.gte]: date
        }
      }).then(result => {
        // 
        if (result.length == 0) {
          res.send({ msg: '验证码已失效或者不正确', code: 1013 });
        } else {
          //验证码验证通过
          next();
        }

      }).catch(err => {

        res.send({ msg: '邮箱验证码验证失败', code: 1012 });
      })
    } else {
      //不需要验证邮箱验证码
      next();
    }

  }

  //注册
  registerController(req, res) {
    //截取请求参数 req.body

    //查询该邮箱是否被注册
    api.findData('Business', {
      email: req.body.email
    }).then(result => {
      //移动头像文件

      if (result.length == 0) {
        //该邮箱没有被注册
        //生成userId
        let userId = '_b' + new Date().getTime();

        //密码加盐加密
        let password = utils.encodeString(config.saltOptions.passwordSalt + req.body.password);

        let userImgPath = userId + '.' + req.body.img.split('.')[1];

        //头像文件移动
        fs.rename(req.body.img, 'public/headPortrait/' + userImgPath, err => {

        });
        if (req.body.img.split('.')[1] == undefined) {
          userImgPath = 'default.png'
        }

        //添加数据
        api.createData('Business', {
          userId,
          nickname: req.body.nickname,
          password,
          email: req.body.email,
          userImg: userImgPath
        }).then(result => {
          res.send({ msg: '注册成功', code: 1000 });
        }).catch(err => {

          res.send({ msg: '注册失败', code: 1001 });
        })

      } else {
        res.send({ msg: '该邮箱已经被注册', code: 1002 });
      }

    }).catch(err => {


      res.send({ msg: '注册失败', code: 1001 });
    })

  }

  //发送邮箱验证码
  sendMailCode(req, res) {

    //储存验证码
    let code = Math.random().toString().slice(-6);

    api.createData('Code', {
      email: req.body.email,
      code
    }).then(result => {


      res.send({ msg: '验证码已发至您邮箱', codes: code, code: 1010 });

      utils.sendMail(req.body.email, code, (err, info) => {
        //发送邮件失败
        if (err) {
          res.send({ msg: '邮件发送失败!', code: 1011 });
        } else {
          res.send({ msg: '发送成功,请验收!', code: 1010 });
        }
      });
    }).catch(err => {
      res.send({ msg: '发送邮箱验证码失败', code: 1011 })
    })
  }

  //登录
  singinController(req, res) {
    //根据邮箱查询
    api.findData('Business', {
      email: req.body.email,
      isDestroy: 0
    }, ['userId', 'password']).then(result => {

      //如果没有查询到数据
      if (result.length == 0) {
        res.send({ msg: '用户不存在', code: 1022 });
      } else {
        //如果存在用户，则需要验证密码是否正确
        let password = utils.encodeString(config.saltOptions.passwordSalt + req.body.password);

        if (password == result[0].dataValues.password) {
          //如果密码正确
          //生成token
          let token = utils.signString({
            value: result[0].dataValues.userId,
            salt: config.tokenOptions.tokenSalt,
            expires: config.tokenOptions.expires
          });
          res.send({ msg: '登录成功', code: 1020, token });
        } else {
          res.send({ msg: '邮箱或者密码不正确', code: 1023 });
        }
      }
    }).catch(err => {

      res.send({ msg: '登录失败', code: 1021 });
    })
  }

  //找回密码邮箱认证
  GetItBackAuthentication(req, res) {

    // res.send({ msg: '收到申请', code: 1040 });

    //查询该邮箱是否被注册
    api.findData('Business', {
      email: req.body.email,
      isDestroy: 0
    }, ['userId']).then(result => {

      if (result.length == 0) {
        res.send({ msg: '该邮箱未注册', code: 1042 });
      } else {
        //生成token
        let token = utils.signString({
          value: result[0].dataValues.userId,
          salt: config.tokenOptions.tokenSalt,
          //用于转跳页面 10秒过期
          expires: 10
        });
        res.send({ msg: '申请成功', code: 1040, token });
      }
    }).catch(err => {
      res.send({ msg: '查询失败', code: 1041 });
    })
  }

  //设置密码
  Setpassword(req, res) {
    // res.send({ msg: '修改成功', code: 1070 });
    //密码加盐加密
    let password = utils.encodeString(config.saltOptions.passwordSalt + req.body.password);
    api.updateData('Business', {
      password: password
    }, {
      email: req.body.email
    }).then(result => {
      res.send({ msg: '修改成功', code: 1070 });
    }).catch(err => {

      res.send({
        msg: '修改失败',
        code: 1071
      });
    })
  }

  //注销账号
  cancellation(req, res) {
    //根据邮箱查询
    api.findData('Business', {
      email: req.body.email,
      isDestroy: 0
    }, ['password']).then(requer => {
      let password = utils.encodeString(config.saltOptions.passwordSalt + req.body.password);
      if (password == requer[0].dataValues.password) {
        api.updateData('Business', {
          isDestroy: 1
        }, {
          email: req.body.email
        }).then(requer => {
          res.send({ msg: '注销成功,江湖有缘,worldlink等你回来', code: 1120 });
        }).catch(err => {

          res.send({ msg: '注销失败,请联系客服', code: 1121 });
        })
      } else {
        res.send({ msg: '密码不正确', code: 1123 });
      }
    })
  }
  //栏目上传
  fileDataUpload(req, res) {

    //添加数据
    let { title, briefIntroduction, musicPath, imgPath, vudioPath, email, content, type } = req.body;
    // 

    let coverImg = imgPath.split('/')[1];

    let coverMusic = musicPath ? musicPath.split('/')[1] : 'default.mp3';

    let coverVudio = vudioPath ? vudioPath.split('/')[1] : 'default.mp4';

    //文件移动
    musicPath && fs.rename(musicPath, 'public/music/' + coverMusic, err => { });

    vudioPath && fs.rename(vudioPath, 'public/vudio/' + coverVudio, err => { });

    //图片文件移动
    fs.rename(imgPath, 'public/cover/' + coverImg, err => {
      console.log(err);
    });

    //文件路径
    coverMusic = `${config.serverOptions.host}:${config.serverOptions.port}/music/${coverMusic}`;
    coverImg = `${config.serverOptions.host}:${config.serverOptions.port}/cover/${coverImg}`;
    coverVudio = `${config.serverOptions.host}:${config.serverOptions.port}/vudio/${coverVudio}`;

    //数据写入
    api.createData('Column', {
      email,
      type,
      coverTitle: title,
      coverMessage: briefIntroduction,
      coverImg,
      coverMusic,
      coverVudio,
      content
    }).then(result => {
      res.send({ msg: '上传成功', code: 1090 });
    }).catch(err => {
      res.send({ msg: '上传失败', code: 1091 });
    })
  }

  //临时文件删除路由
  deleteTempFile(req, res) {
    res.send({ msg: '收到' });
  }

  //获取用户数据
  getUser(req, res) {
    api.findData('Business', {
      isDestroy: 0
    }, ['userId', 'email', 'nickname', 'userImg']).then(require => {
      //头像图片路径
      for (let i = 0; i < require.length; i++) {
        require[i].userImg = `${config.serverOptions.host}:${config.serverOptions.port}/headPortrait/` + require[i].userImg;
      }
      res.send({ require, code: 2060 });
    }).catch(err => {
      res.send({ msg: '获取失败!', err: err, code: 2061 })

    })
  }

  //流文件上传路由
  upFile(req, res) {
    const form = new multiparty.Form({ uploadDir: 'temp' });

    form.parse(req, function (err, fields, files) {
      // var filesTmp = JSON.stringify(files, null, 2);
      if (err) {
      } else {
        var inputFile = files.file[0];
        var uploadedPath = inputFile.path;

        //重命名为真实文件名
        fs.rename(uploadedPath, uploadedPath, function (err) {
          if (err) {
            // 
            res.send({ msg: '文件上传失败', code: 1081 });
          } else {
            // 
            res.send({ msg: '文件上传成功', code: 1080, filePath: uploadedPath });
          }
        });
      }
    });
  }

  //获取个人信息
  getMyInf(req, res) {
    api.findData('Business', {
      email: req.body.email,
      isDestroy: 0
    }, ['userId', 'email', 'nickname', 'userImg']).then(require => {
      //头像图片路径
      require[0].userImg = `${config.serverOptions.host}:${config.serverOptions.port}/headPortrait/` + require[0].userImg;
      res.send({ require });
    }).catch(err => {
      res.send({ msg: '获取失败!', err: err })

    })
  }

  //获取个人上传
  getMyUpdata(req, res) {
    // 
    api.findData('Column', {
      email: req.body.email,
      isDelete: 0
    }, ['type', 'coverTitle', 'coverMessage', 'content', 'coverImg', 'coverMusic', 'coverVudio', 'isShare', 'id']
    ).then(require => {
      res.send({ require, msg: '成功', code: 1090 });
    }).catch(err => {
      // 
      res.send({ require, msg: '失败', code: 1091 });
    })
  }

  //删除或分享
  deleteAndShare(req, res) {

    // api.updateData('Column', {
    //   isShare:req.body.isShare
    // }, [Rename]).then(requer => {
    //   res.send({ msg: '成功', code: 1120 })
    // }).catch(err => {
    //   res.send({ msg: '失败', code: 1121 })
    // })

    if (req.body.operation != 0) {
      api.updateData('Column', {
        isShare: req.body.isShare
      }, {
        id: req.body.id
      }).then(requer => {
        res.send({ msg: '成功', code: 1120 })
      }).catch(err => {
        res.send({ msg: '失败', code: 1121 })
      })
    } else {
      api.updateData('Column', {
        isDelete: req.body.isDelete
      }, {
        id: req.body.id
      }).then(requer => {
        res.send({ msg: '成功', code: 1120 })
      }).catch(err => {
        res.send({ msg: '失败', code: 1121 })
      })
    }


  }

  //首页数据获取
  getHomeData(req, res) {
    api.findData('Column', {
      isShare: 1,
      isDelete: 0
    }, ['email', 'type', 'coverTitle', 'coverMessage', 'content', 'coverImg', 'coverMusic', 'coverVudio', 'isShare', 'id']
    ).then(require => {
      res.send({ require, msg: '成功', code: 1110 });
    }).catch(err => {

      res.send({ require, msg: '失败', code: 1111 });
    })
  }

  //功能测试页
  functionTest(req, res) {

  }
}
//导出
module.exports = new RouterController();