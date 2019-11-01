import {ProRouteConfig} from '@/model/project/route/route.model'

const Sale = () => import(/* webpackChunkName: "sale" */ '@/modules/sale/views/Sale.vue')
const HasClass = () => import(/* webpackChunkName: "sale" */ '@/modules/sale/views/has-class/HasClass.vue')
const HasNoClass = () => import(/* webpackChunkName: "sale" */ '@/modules/sale/views/has-no-class/HasNoClass.vue')

const router: ProRouteConfig = {
  path: 'sale',
  name: 'sale',
  component: Sale,
  children: [
    {
      path: 'hasNoClass',
      name: 'hasNoClass',
      component: HasNoClass,
      meta: {
        title: '待分班',
      },
    },
    {
      path: 'hasClass',
      name: 'hasClass',
      component: HasClass,
      meta: {
        title: '已分班',
      },
    },
  ],
  meta: {
    title: '销售平台',
  },
}
export default router
