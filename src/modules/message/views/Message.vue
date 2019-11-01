<template>
  <el-container class="h">
    <el-main class="common-el-main-padding h">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import '@/modules/message/assets/less/index.less'

  @Component({})
  export default class Message extends Vue {
  }
</script>
<style scoped lang="less">

</style>
