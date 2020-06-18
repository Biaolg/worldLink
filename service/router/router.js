//路由层

//导入路由控制器
const routerController = require(__basename + '/router_controller/routerController.js');

module.exports = app => {

  //验证邮箱验证码
  app.use(routerController.validMailCode);

  //注册
  app.post('/register', routerController.registerController);

  //发送邮箱验证码
  app.post('/sendmail', routerController.sendMailCode);

  //登录
  app.post('/singin', routerController.singinController);

  //找回密码邮箱认证
  app.post('/forgetpassword', routerController.GetItBackAuthentication);

  //设置密码
  app.post('/Setpassword', routerController.Setpassword);

  //注销账号
  app.post('/cancellation', routerController.cancellation);

  //文件上传
  app.post('/fileDataUpload', routerController.fileDataUpload);

  //删除临时文件
  app.post('/deletefile', routerController.deleteTempFile);

  //文件流上传
  app.post('/upfile', routerController.upFile);

  //获取个人信息
  app.post('/getmyinf', routerController.getMyInf);

  //获取个人上传
  app.post('/getmyuodata', routerController.getMyUpdata);

  //删除或分享
  app.post('/deleteandshare', routerController.deleteAndShare);

  //获取用户列表
  app.post('/getuser',routerController.getUser);

  //首页数据获取
  app.get('/gethomedata', routerController.getHomeData);


  //test
  app.get('/test', routerController.functionTest);

}