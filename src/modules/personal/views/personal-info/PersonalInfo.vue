<template>
  <el-container class="h">
    <el-main>
      <div class="title">
        基本信息
      </div>
      <base-form :schema="schema" v-model="form" :inline="false" is-row :span="8"
                 :form-pattern="formPattern"
      >
        <template>
          <div class="default-btn-box">
            <el-button v-if="formPattern === 'view'" type="primary" @click="edit">编辑</el-button>
            <el-button v-if="formPattern !== 'view'" type="primary" @click="save">保存</el-button>
            <el-button v-if="formPattern !== 'view'" @click="cancel">取消</el-button>
          </div>
        </template>
      </base-form>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Schema} from '@/components/common-form/form.model'
  import {genderList, ageList} from '@/model/project/models'
  import {fb} from '@/util/common/fns/fns-form'
  import {HttpRes} from '@/model/common/models'
  import {deepClone} from '@/util/common/fns/fns'
  import {listDestValue} from '@/util/common/fns/fns-array'

  @Component({})
  export default class PersonalInfo extends Vue {
    public schema: Schema[] = [
      {
        label: '姓名',
        prop: 'name',
        formItemProps: {
          rules: [
            {required: true},
          ],
        },
      },
      {
        label: '电话',
        prop: 'phone',
        formItemProps: {
          rules: [
            {required: true},
          ],
        },
      },
      {
        label: '登录账号',
        prop: 'loginName',
        formItemProps: {
          rules: [
            {required: true},
          ],
        },
      },
      {
        label: '性别',
        prop: 'gender',
        comp: 'select',
        props: {
          options: genderList,
        },
        viewFilter (value: any) {
          return listDestValue(genderList, value)
        },
      },
      {
        label: '年龄',
        prop: 'age',
        comp: 'select',
        props: {
          options: ageList,
        },
      },
      {
        label: '职位',
        prop: 'position',
        comp: 'select',
        props: {
          options: genderList,
        },
        viewFilter (value: any) {
          return listDestValue(genderList, value)
        },
      },
      {
        label: '状态',
        prop: 'status',
        comp: 'select',
        props: {
          options: genderList,
        },
        viewFilter (value: any) {
          return listDestValue(genderList, value)
        },
        span: 24,
      },
      {
        label: '家庭住址',
        prop: 'address',
        span: 24,
      },
      {
        label: '现任课班级',
        prop: 'nowClass',
        comp: 'slot',
        span: 24,
      },
      {
        label: '曾任课班级',
        prop: 'agoClass',
        comp: 'slot',
        span: 24,
      },
    ]
    public form = fb(this.schema)
    public formPattern = 'view'
    public originForm = {}

    public created () {
      // 获取用户信息
      this.$req(this.$urls.login.hasLogin).then((res: HttpRes) => {
        if (res.code === 200) {
          this.originForm = deepClone(res.data)
          this.form = {...fb(this.schema), ...res.data}
        }
      })
    }

    public edit () {
      this.formPattern = 'edit'
    }

    public save () {

    }

    public cancel () {
      this.form = deepClone({...fb(this.schema), ...this.originForm})
      this.formPattern = 'view'
    }
  }
</script>
