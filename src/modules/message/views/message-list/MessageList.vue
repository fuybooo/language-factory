<template>
  <el-container class="h">
    <el-main>
      <div class="message-tab">
        <el-radio-group v-model="params.read">
          <el-radio-button label="1">未读</el-radio-button>
          <el-radio-button label="2">已读</el-radio-button>
        </el-radio-group>
      </div>
      <div class="common-query pt10 pb10">
        <el-button :disabled="!selectedList.length"
                   type="primary"
                   @click="changeStatus">{{params.read === '1' ? '标记为已读' : '删除'}}
        </el-button>
      </div>
      <base-table
        ref="table"
        fixed-elements=".message-tab"
        :url="url"
        :params.sync="params"
        :columns.sync="columns"
        :node-attrs="tableAttrs"
      >
        <template v-slot:content="{row}">
          {{row.content}}<a class="ml10" @click="viewContent(row)">点击查看</a>
        </template>
      </base-table>
      <base-dialog :visible.sync="visible" :props="{title: '消息内容'}" only-ok>
        <div>{{crtMessage}}</div>
      </base-dialog>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {columns} from '@/modules/message/models/models'
  import {HttpRes} from '@/model/common/models'

  @Component({})
  export default class MessageList extends Vue {
    public url = this.$urls.message.list
    public columns = columns
    public params = {read: '1'}
    public selectedList = []
    public visible = false
    public crtMessage = {}

    public get tableAttrs () {
      const me = this
      return {
        on: {
          'selection-change' (val: any) {
            me.selectedList = val
          },
        },
      }
    }

    public search () {
      (this.$refs.table as any).search(true)
    }

    public changeStatus () {
      this.$req(this.$urls.message.changeStatus, {
        read: this.params.read,
        idList: this.selectedList.map((item: any) => item.id),
      }).then((res: HttpRes) => {
        if (res.code === 200) {
          this.search()
        }
        this.$tip(res)
      })
    }

    public viewContent (row: any) {
      this.visible = true
      this.crtMessage = row
    }
  }
</script>
