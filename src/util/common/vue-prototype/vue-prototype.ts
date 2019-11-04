import Vue from 'vue'
import '@/util/project/urls/urls'
import '@/api/base-axios'
import '@/util/project/models/global-event'
// import {Notification} from 'element-ui'
import {MessageType} from 'element-ui/types/message'
// import {i18n} from '@/config/i18n-config'
import {HttpRes} from '@/model/common/models'
import {debounce} from '@/util/common/fns/fns'
import {Message} from 'element-ui'

// notify 通知
function notify (type: MessageType, message: string, title?: string | undefined) {
  // @ts-ignore
  // Notification[type]({message, title: title || i18n.t('common.Tip'), duration: 2000})
  Message[type]({message, showClose: true})
}

Vue.prototype.$error = (message: string, title?: string) => {
  notify('error', message, title)
}
Vue.prototype.$success = (message: string, title?: string) => {
  notify('success', message, title)
}
Vue.prototype.$tip = debounce((res: HttpRes) => {
  notify(res.code === 200 ? 'success' : 'error', res.msg || (res.code === 200 ? '操作成功' : '操作失败'))
})
// Vue.prototype.$tip = (res: HttpRes) => {
//   // 判断条件根据项目实际情况定义
//   debounce(() => {
//     notify(res.code === 200 ? 'success' : 'error', res.msg)
//   })()
// }

