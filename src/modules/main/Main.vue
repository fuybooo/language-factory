<template>
  <el-container class="h">
    <el-header class="main-header" id="main-header" height="50px">
      <main-header></main-header>
    </el-header>
    <el-main class="h">
      <el-container class="h">
        <el-header height="24">
          <app-page-header class="common-el-page-padding"></app-page-header>
        </el-header>
        <el-main class="h">
          <el-container class="h">
            <el-aside>
              <main-aside></main-aside>
            </el-aside>
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
  }
</script>
