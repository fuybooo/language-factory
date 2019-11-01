<template>
  <el-container class="h">
    <el-main class="h">
      <div>
        <a @click="saveMenuFlag(menuFlagMap.operate)">运营平台</a>
      </div>
      <div>
        <a @click="saveMenuFlag(menuFlagMap.sale)">销售平台</a>
      </div>
      <div>
        <a @click="saveMenuFlag(menuFlagMap.system)">后台管理</a>
      </div>
      <div>
        <a @click="saveMenuFlag(menuFlagMap.teacher)">教师平台</a>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {ls} from '@/util/common/fns/fns'
  import {KEY_MENU_FLAG} from '@/model/project/local-storage-keys/keys'
  import { menuFlagMap } from '@/model/project/models'

  @Component({})
  export default class MainHome extends Vue {
    public menuFlagMap = menuFlagMap
    public created () {
    }

    public saveMenuFlag (menuFlag: any) {
      ls(KEY_MENU_FLAG, menuFlag.name)
      // 更新菜单
      this.$globalEvent.$emit(this.$event.resetMenu)
      // 延迟跳转 【主要目的是等待菜单加载完成，否则会出现页面显示不正常的情况】
      setTimeout(() => {
        this.$router.push({name: menuFlag.route})
      }, 200)
    }
  }
</script>
<style scoped lang="less">
</style>
