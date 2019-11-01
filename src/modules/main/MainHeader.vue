<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="18">
    </el-col>
    <el-col :span="6" class="tar">
      <el-button type="text" @click="openMessage">消息中心</el-button>
      <el-button type="text" @click="openPersonal">个人中心</el-button>
      <el-button type="text" @click="logout">{{$t('sys.logout')}}</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {dc} from '@/util/common/fns/fns'
  import {KEY_TOKEN, KEY_TYPE} from '@/model/project/local-storage-keys/keys'

  @Component({})
  export default class MainHeader extends Vue {

    public created () {
    }

    public openMessage () {
      this.$router.push({name: 'messageList'})
    }

    public openPersonal () {
      this.$router.push({name: 'personalInfo'})
    }

    public logout () {
      dc(KEY_TOKEN)
      dc(KEY_TYPE)
      this.$router.push({name: 'login'})
    }
  }
</script>
<style scoped lang="less">

</style>
