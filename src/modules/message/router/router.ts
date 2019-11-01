import {ProRouteConfig} from '@/model/project/route/route.model'
import {setUpRouter} from '@/model/project/route/route.fn'

const Message = () => import(/* webpackChunkName: "message" */ '@/modules/message/views/Message.vue')
const MessageList = () => import(/* webpackChunkName: "message" */ '@/modules/message/views/message-list/MessageList.vue')

const router: ProRouteConfig = {
  path: 'message',
  name: 'message',
  component: Message,
  children: [
    {
      path: 'messageList',
      name: 'messageList',
      component: MessageList,
      meta: {
        title: '消息中心',
      },
    },
  ],
  meta: {
    title: '消息中心',
  },
}
// 显示消息中心时不显示左侧菜单，消息中心不显示在左侧
export default setUpRouter(router, {hideMenu: true, hidden: true})
