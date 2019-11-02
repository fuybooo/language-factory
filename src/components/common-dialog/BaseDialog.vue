<template>
  <el-dialog
    ref="dialog"
    class="base-dialog"
    :visible.sync="localVisible"
    v-bind="props"
  >
    <template slot="title">
      <slot name="title"></slot>
    </template>
    <template>
      <slot></slot>
    </template>
    <template slot="footer">
      <slot name="footer">
        <template v-if="onlyOk">
          <el-button type="primary" @click="ok">确 定</el-button>
        </template>
        <template v-else-if="onlyCancel">
          <el-button type="primary" @click="cancel">取 消</el-button>
        </template>
        <template v-else>
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="ok">确 定</el-button>
        </template>
      </slot>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator'
  import './BaseDialog.less'

  @Component({})
  export default class BaseDialog extends Vue {
    @Prop({default: false, type: Boolean}) public visible!: boolean
    @Prop() public props!: object
    @Prop({default: true, type: Boolean}) public autoClose!: boolean
    @Prop({default: false, type: Boolean}) public onlyOk!: boolean
    @Prop({default: false, type: Boolean}) public onlyCancel!: boolean
    public localVisible = this.visible

    @Watch('visible')
    public visibleChange () {
      this.localVisible = this.visible
    }

    @Watch('localVisible')
    public localVisibleChange () {
      this.$emit('update:visible', this.localVisible)
    }

    @Emit()
    public cancel () {
      if (this.autoClose) {
        this.localVisible = false
      }
    }

    @Emit()
    public ok () {
      if (this.autoClose) {
        this.localVisible = false
      }
    }
  }
</script>
<style scoped lang="less">

</style>
