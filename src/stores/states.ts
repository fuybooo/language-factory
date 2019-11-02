import {Menu} from '@/components/common-menu/menu.model'
import {DicType} from '@/model/project/dic/dic'
import {User} from '@/model/project/user/user'

export interface State {
  showLangSetting: boolean
  menus: Menu[]
  menuFlag: string
  dic: DicType
  user: User
}

const state: State = {
  showLangSetting: true, // 是否显示语言选择器
  menus: [],
  menuFlag: '',
  dic: {},
  user: {},
}
export default state
