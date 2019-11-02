export const defaultTitle = '管理系统'
// 页面内标题
export const defaultPageTitleMap = {
  view: '详情',
  create: '创建',
  edit: '编辑',
}
export const genderList = [
  {
    id: 1,
    label: '男',
  },
  {
    id: 2,
    label: '女',
  },
]
export const menuFlagMap = {
  operate: {name: 'operate', route: 'elegant'},
  teacher: {name: 'teacher', route: 'myTodo'},
  sale: {name: 'sale', route: 'hasNoClass'},
  system: {name: 'system', route: 'systemClass'},
}
export const ageList = Array(42).fill(0).map((item, i) => ({
  id: i + 18,
  label: i + 18,
}))
