import {ProRouteConfig} from '@/model/project/route/route.model'
import Main from '@/modules/main/Main.vue'
import MainHome from '@/modules/main/MainHome.vue'
import demoRouter from '@/demo/router/router'
import operateRouter from '@/modules/operate/router/router'
import saleRouter from '@/modules/sale/router/router'
import systemRouter from '@/modules/system/router/router'
import teacherRouter from '@/modules/teacher/router/router'
import messageRouter from '@/modules/message/router/router'
import personalRouter from '@/modules/personal/router/router'

export const mainRoute: ProRouteConfig = {
  path: '/main',
  name: 'main',
  redirect: {name: 'home'},
  component: Main,
  // @ts-ignore
  children: [
    {
      path: '',
      name: 'home',
      component: MainHome,
      meta: {
        title: 'Home',
        hideBread: true,
        hideMenu: true,
        hidden: true,
      },
    },
    demoRouter,
    // 运营平台路由
    operateRouter,
    // 销售平台路由
    saleRouter,
    // 后台管理路由
    systemRouter,
    // 教师平台路由
    teacherRouter,
    // 消息中心路由
    messageRouter,
    // 个人中心路由
    personalRouter,
  ],
  meta: {
    title: 'main',
  },
}
