export const routes = [
  {
    //登录页
    path: '/Signin',
    name: 'Signin',

    //懒加载组件
    component: r => require(['../views/Signin.vue'], r)
  },
  {
    //注册页
    path: '/register',
    name: 'Register',

    //懒加载组件
    component: r => require(['../views/Register.vue'], r)
  },
  {
    //忘记密码页
    path: '/forgetPassword',
    name: 'forgetPassword',

    //懒加载组件
    component: r => require(['../views/forgetPassword.vue'], r)
  },
  {
    //密码修改页
    path: '/setPasword',
    name: 'setPasword',

    //懒加载组件
    component: r => require(['../views/setPasword.vue'], r)
  },
  {
    //主页
    path: '/home',
    name: 'Home',

    //懒加载组件
    component: r => require(['../views/Home.vue'], r),
    children: [
      {
        //动态
        path: 'world',
        name: 'World',
        component: r => require(['../views/World.vue'], r),
      },
      {
        //消息
        path: 'myInfo',
        name: 'myInfo',
        component: r => require(['../views/myInfo.vue'], r),
      },
      {
        //用户上传栏目展示页
        path: 'myUpload',
        name: 'myUpload',
        component: r => require(['../views/myUpload.vue'], r),
      },
      {
        //上传音乐栏
        path: 'musicUpload',
        name: 'musicUpload',
        component: r => require(['../views/musicUpload.vue'], r),
      },
      {
        //日志上传
        path: 'journalUp',
        name: 'journalUp',
        component: r => require(['../views/journalUp.vue'], r),
      },
      {
        //视频上传
        path: 'videoUp',
        name: 'videoUp',
        component: r => require(['../views/videoUp.vue'], r),
      }
    ]
  },
  {
    //功能测试页
    path: '/test',
    name: 'test',
    component: r => require(['../views/test.vue'], r)
  },
  {
    path: '*',
    redirect: {
      name: 'Signin'
    }
  }
]