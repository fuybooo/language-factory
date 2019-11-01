import {ProRouteConfig} from '@/model/project/route/route.model'

const Operate = () => import(/* webpackChunkName: "operate" */ '@/modules/operate/views/Operate.vue')
const Elegant = () => import(/* webpackChunkName: "operate" */ '@/modules/operate/views/elegant/Elegant.vue')
const Profiles = () => import(/* webpackChunkName: "operate" */ '@/modules/operate/views/profiles/Profiles.vue')

const router: ProRouteConfig = {
  path: 'operate',
  name: 'operate',
  component: Operate,
  children: [
    {
      path: 'elegant',
      name: 'elegant',
      component: Elegant,
      meta: {
        title: '风采展示',
      },
    },
    {
      path: 'profiles',
      name: 'profiles',
      component: Profiles,
      meta: {
        title: '教师简介',
      },
    },
  ],
  meta: {
    title: '运营平台',
  },
}
export default router
