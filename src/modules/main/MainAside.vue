<template>
  <el-menu :key="key" :default-active="activeIndex" class="main-header-menu" @select="handleSelect">
    <base-menu :menus="menus"></base-menu>
  </el-menu>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import {ProRouteConfig} from '@/model/project/route/route.model'
  import {debounce, guid, lg} from '@/util/common/fns/fns'
  import {setMenus} from '@/stores/mutation-types'
  import {getMenusByMenuFlag} from '@/components/common-menu/menu.fn'
  import {KEY_MENU_FLAG} from '@/model/project/local-storage-keys/keys'

  @Component({})
  export default class MainHeader extends Vue {
    public menus: any[] = []
    public activeIndex: string = ''
    public crtMenuFlag: string = ''
    public key = guid()

    public created () {
      this.getMenus()
      this.$globalEvent.$on(this.$event.resetMenu, this.getMenus)
    }

    /**
     * 只有在切换平台时才执行该方法，普通切换路由不执行该方法
     */
    public getMenus () {
      // 若菜单策略为后台配置，则发送请求，否则使用路由直接进行转化
      // this.$req(this.$urls.menu.list).then((res: HttpRes) => {
      //   if (res.code === 200) {
      //     this.menus = getMenus(res.data.results)
      //     this.$store.commit(setMenus, res.data.results.filter((item: any) => item.parentId !== 0))
      //   }
      // })
      // 默认根据路由生成菜单列表 - 将所有的菜单都展示出来了，而且meta属性无法解决只显示某些菜单的问题
      // this.menus = getDefaultMenus()
      // 根据特殊条件显示相应的菜单
      const menuFlag = lg(KEY_MENU_FLAG)
      if (menuFlag) {
        this.menus = getMenusByMenuFlag(menuFlag)
        this.$store.commit(setMenus, this.menus)
        this.key = guid()
      } else {
        // 当前页面不是首页，则跳到首页
        if (this.$route.name !== 'home') {
          this.$router.push({name: 'home'})
        }
      }
    }

    @Watch('$route', {immediate: true})
    public routeChange (crtRoute: ProRouteConfig) {
      const me = this
      const menuFlag = lg(KEY_MENU_FLAG)
      debounce(() => {
        me.activeIndex = crtRoute.meta.parentName || crtRoute.name
        // 在同一个菜单flag下切换路由时不重新全然路由
        if (menuFlag === me.crtMenuFlag) {
          return
        }
        me.crtMenuFlag = menuFlag
      }, 100)()
    }

    public handleSelect (name: string) {
      this.$router.push({name})
    }
  }
</script>
<style scoped lang="less">

</style>
