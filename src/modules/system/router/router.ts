import {ProRouteConfig} from '@/model/project/route/route.model'

const System = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/System.vue')
const SystemClass = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-class/SystemClass.vue')
const SystemTeacher = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-teacher/SystemTeacher.vue')

const router: ProRouteConfig = {
  path: 'system',
  name: 'system',
  component: System,
  children: [
    {
      path: 'systemClass',
      name: 'systemClass',
      component: SystemClass,
      meta: {
        title: '班级管理',
      },
    },
    {
      path: 'systemTeacher',
      name: 'systemTeacher',
      component: SystemTeacher,
      meta: {
        title: '教师管理',
      },
    },
  ],
  meta: {
    title: '销售平台',
  },
}
export default router
