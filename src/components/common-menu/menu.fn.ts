import {Menu} from '@/components/common-menu/menu.model'
import {ProRouteConfig} from '@/model/project/route/route.model'
import {defaultTitle} from '@/model/project/models'
import {mainRoute} from '@/router/main.router'
import {convertListToTree, TreeNode} from '@/util/common/fns/fns-tree'

export function transferRoutesToMenus (routes: ProRouteConfig[], parentRoute?: ProRouteConfig): Menu[] {
  return routes.map(menuItem => {
    // @ts-ignore
    menuItem.meta.pagePath = parentRoute ? [
      ...(parentRoute.meta.pagePath || []),
      parentRoute,
      // 目前只考虑父路由在同级下的情况
      ...(menuItem.meta.parentName ? [routes.find(item => item.name === menuItem.meta.parentName)] : []),
      menuItem,
    ] : []
    // 将每个菜单节点构建成树节点的形式
    return {
      id: menuItem.name,
      parentId: parentRoute ? parentRoute.id || '' : '',
      index: menuItem.name, // 这里要求route中的name是必填且唯一的
      hidden: !!menuItem.meta.hidden,
      parentName: menuItem.meta.parentName || '',
      title: menuItem.meta ? (menuItem.meta.menuName || menuItem.meta.title) : defaultTitle,
      ...(menuItem.children ? {children: transferRoutesToMenus(menuItem.children, menuItem)} : {}),
    }
  })
}
// 转换前端的菜单
export function getDefaultMenus () {
  return transferRoutesToMenus(mainRoute.children || [])
}
// 转换后端的菜单
export function getMenus (list: any[]) {
  return convertListToTree(list)
}
