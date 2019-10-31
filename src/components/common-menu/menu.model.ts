export interface Menu {
  index?: string
  title?: string
  hidden?: boolean // 不在菜单中显示
  parentName?: string,
  children?: Menu[]
}
