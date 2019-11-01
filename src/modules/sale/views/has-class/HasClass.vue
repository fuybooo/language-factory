<template>
  <el-container class="h">
    <el-main>
      HasClass
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class HasClass extends Vue {
  }
</script>
