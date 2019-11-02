<template>
  <el-container class="h">
    <el-main class="h">
      <div class="welcome">
        <base-flex fixed-width="80px" fixed="before">
          <div class="avatar" slot="fixed"></div>
          <div class="greet-info">
            <div class="greet">{{getGreeting()}}，{{$store.state.user.name}}，欢迎使用Language Factory后台管理系统</div>
            <div class="text">系统管理员</div>
          </div>
        </base-flex>
      </div>
      <div class="platform-list">
        <div class="title">请选择使用平台</div>
        <div class="platform-box">
          <el-row>
            <el-col :span="12">
              <el-card class="platform-card">
                <img src="./assets/img/system.png" alt="运营平台" class="image">
                <div class="card-content">
                  <div class="title">系统管理</div>
                  <div class="desc">校区系统数据录入修改及维护</div>
                  <div class="link"><a class="blue" @click="saveMenuFlag(menuFlagMap.system)">点击进入</a></div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="platform-card fr">
                <img src="./assets/img/operate.png" alt="运营平台" class="image">
                <div class="card-content">
                  <div class="title">运营平台</div>
                  <div class="desc">banner、风采展示及教师简介等</div>
                  <div class="link"><a class="green" @click="saveMenuFlag(menuFlagMap.operate)">点击进入</a></div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mt50 mb60">
            <el-col :span="12">
              <el-card class="platform-card">
                <img src="./assets/img/sale.png" alt="运营平台" class="image">
                <div class="card-content">
                  <div class="title">销售平台</div>
                  <div class="desc">课程内容展示与购课签约系统</div>
                  <div class="link"><a class="red" @click="saveMenuFlag(menuFlagMap.sale)">点击进入</a></div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="platform-card fr">
                <img src="./assets/img/teacher.png" alt="运营平台" class="image">
                <div class="card-content">
                  <div class="title">教师平台</div>
                  <div class="desc">课程复习资料、月度报告的编辑发送</div>
                  <div class="link"><a class="orange" @click="saveMenuFlag(menuFlagMap.teacher)">点击进入</a></div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {ls} from '@/util/common/fns/fns'
  import {KEY_MENU_FLAG} from '@/model/project/local-storage-keys/keys'
  import {menuFlagMap} from '@/model/project/models'
  import {getUser} from '@/stores/action-types'

  @Component({})
  export default class MainHome extends Vue {
    public menuFlagMap = menuFlagMap
    public getGreeting = () => {
      const date = new Date()
      const h = date.getHours()
      let greeting = '早安'
      if (h > 0 && h < 12) {
        greeting = '早安'
      } else if (h >= 12 && h <= 18) {
        greeting = '下午好'
      } else {
        greeting = '晚上好'
      }
      return greeting
    }

    public created () {
      // 获取用户信息
      this.$store.dispatch(getUser)
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
