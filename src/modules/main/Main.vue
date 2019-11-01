<template>
  <el-container class="h">
    <el-header class="main-header" id="main-header" height="50px">
      <main-header></main-header>
    </el-header>
    <el-main class="h">
      <el-container class="h">
        <el-aside class="h" v-show="showAside">
          <main-aside></main-aside>
        </el-aside>
        <el-main class="h">
          <el-container class="h">
            <el-header height="24">
              <app-page-header v-show="showBread" class="common-el-page-padding"></app-page-header>
            </el-header>
            <el-main class="h">
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import MainHeader from '@/modules/main/MainHeader.vue'
  import MainAside from '@/modules/main/MainAside.vue'

  @Component({components: {MainHeader, MainAside}})
  export default class Main extends Vue {
    // 是否隐藏左侧菜单
    public get showAside () {
      return !this.$route.meta.hideMenu
    }

    // 是否隐藏面包导航
    public get showBread () {
      return !this.$route.meta.hideBread
    }
  }
</script>
