<template>
  <el-menu :default-active="activeIndex" class="main-header-menu" @select="handleSelect">
    <base-menu :menus="menus"></base-menu>
  </el-menu>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import {ProRouteConfig} from '@/model/project/route/route.model'
  import {debounce} from '@/util/common/fns/fns'
  import {setMenus} from '@/stores/mutation-types'
  import {getDefaultMenus} from '@/components/common-menu/menu.fn'

  @Component({})
  export default class MainHeader extends Vue {
    public menus: any[] = []
    public activeIndex: string = ''

    public created () {
      this.list()
      // this.$globalEvent.$on(this.$event.researchMenu, this.list)
    }
    public list () {
      // 若菜单策略为后台配置，则发送请求，否则使用路由直接进行转化
      // this.$req(this.$urls.menu.list).then((res: HttpRes) => {
      //   if (res.head.errCode === 0) {
      //     this.menus = getMenus(res.data.results)
      //     this.$store.commit(setMenus, res.data.results.filter((item: any) => item.parentId !== 0))
      //   }
      // })
      this.menus = getDefaultMenus()
      this.$store.commit(setMenus, this.menus)
    }

    @Watch('$route', {immediate: true})
    public routeChange (crtRoute: ProRouteConfig) {
      const me = this
      debounce(() => {
        me.activeIndex = crtRoute.meta.parentName || crtRoute.name
      }, 100)()
    }

    public handleSelect (name: string) {
      this.$router.push({name})
    }
  }
</script>
<style scoped lang="less">

</style>
