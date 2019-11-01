<template>
  <el-container class="h">
    <el-main>
      HasNoClass
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class HasNoClass extends Vue {
  }
</script>
