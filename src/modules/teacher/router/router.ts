import {ProRouteConfig} from '@/model/project/route/route.model'

const Teacher = () => import(/* webpackChunkName: "teacher" */ '@/modules/teacher/views/Teacher.vue')
const MyTodo = () => import(/* webpackChunkName: "teacher" */ '@/modules/teacher/views/my-todo/MyTodo.vue')
const MyClass = () => import(/* webpackChunkName: "teacher" */ '@/modules/teacher/views/my-class/MyClass.vue')

const router: ProRouteConfig = {
  path: 'teacher',
  name: 'teacher',
  component: Teacher,
  children: [
    {
      path: 'myTodo',
      name: 'myTodo',
      component: MyTodo,
      meta: {
        title: '我的待办',
      },
    },
    {
      path: 'myClass',
      name: 'myClass',
      component: MyClass,
      meta: {
        title: '我的班级',
      },
    },
  ],
  meta: {
    title: '教师平台',
  },
}
export default router
