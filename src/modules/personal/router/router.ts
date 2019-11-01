import {ProRouteConfig} from '@/model/project/route/route.model'
import {setUpRouter} from '@/model/project/route/route.fn'

const Personal = () => import(/* webpackChunkName: "personal" */ '@/modules/personal/views/Personal.vue')
const PersonalInfo = () => import(/* webpackChunkName: "personal" */ '@/modules/personal/views/personal-info/PersonalInfo.vue')

const router: ProRouteConfig = {
  path: 'personal',
  name: 'personal',
  component: Personal,
  children: [
    {
      path: 'personalInfo',
      name: 'personalInfo',
      component: PersonalInfo,
      meta: {
        title: '个人中心',
      },
    },
  ],
  meta: {
    title: '个人中心',
  },
}
// 显示个人中心时不显示左侧菜单，个人中心不显示在左侧
export default setUpRouter(router, {hideMenu: true, hidden: true})
