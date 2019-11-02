import {Menu} from '@/components/common-menu/menu.model'
import {ProRouteConfig} from '@/model/project/route/route.model'
import {defaultTitle, menuFlagMap} from '@/model/project/models'
import {mainRoute} from '@/router/main.router'
import operateRouter from '@/modules/operate/router/router'
import saleRouter from '@/modules/sale/router/router'
import systemRouter from '@/modules/system/router/router'
import teacherRouter from '@/modules/teacher/router/router'
import personalRouter from '@/modules/personal/router/router'
import messageRouter from '@/modules/message/router/router'
import {convertListToTree} from '@/util/common/fns/fns-tree'
import {setUpRouter} from '@/model/project/route/route.fn'

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

// 根据菜单标志获取相应的菜单
export function getMenusByMenuFlag (menuFlag: string) {
  let leftMenus: any = []
  switch (menuFlag) {
    case menuFlagMap.operate.name:
      leftMenus = operateRouter.children
      break
    case menuFlagMap.sale.name:
      leftMenus = saleRouter.children
      break
    case menuFlagMap.system.name:
      leftMenus = systemRouter.children
      break
    case menuFlagMap.teacher.name:
      leftMenus = teacherRouter.children
      break
    default:
      leftMenus = []
      break
  }
  // 将特性路由和公共路由合并起来 【只有公共路由在所有路由中，bread才能正常显示】
  // @ts-ignore
  return transferRoutesToMenus(leftMenus.concat(personalRouter.children).concat(messageRouter.children))
}

// 根据菜单标志获取相应的菜单 【多余的菜单隐藏】
export function getMenusByMenuFlagHidden (menuFlag: string) {
  // 将特性路由和公共路由合并起来 【只有公共路由在所有路由中，bread才能正常显示】
  return transferRoutesToMenus(
    // @ts-ignore
    setUpRouter(operateRouter.children, {hidden: menuFlag !== menuFlagMap.operate.name})
    // @ts-ignore
      .concat(setUpRouter(saleRouter.children, {hidden: menuFlag !== menuFlagMap.sale.name}))
      // @ts-ignore
      .concat(setUpRouter(systemRouter.children, {hidden: menuFlag !== menuFlagMap.system.name}))
      // @ts-ignore
      .concat(setUpRouter(teacherRouter.children, {hidden: menuFlag !== menuFlagMap.teacher.name}))
      // @ts-ignore
      .concat(personalRouter.children)
      // @ts-ignore
      .concat(messageRouter.children))
}
