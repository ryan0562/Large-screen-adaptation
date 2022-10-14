<template>
  <el-dialog title="组件库" :visible.sync="visible" width="1400px" append-to-body	>
    <div class="itemList">
      <el-radio-group v-model="moduleOB">
        <el-radio v-for="item in $moduleList" :key="item.comCode" :label="item">
          <templateItem :src="`http://10.168.4.28:17011${item.comImg}`" :preview-src-list="[`http://10.168.4.28:17011${item.comImg}`]" :name="item.name"></templateItem>
        </el-radio>
      </el-radio-group>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  components: {
    templateItem: () => import('@/components/templateItem.vue'),
  },
  data() {
    return {
      visible: false,
      moduleOB: null,
      data: null, //暂存数据
    };
  },
  mounted() {
    this.$bus.$on('componentsList', this.open);
  },
  methods: {
    submit() {
      // this.data.component = {
      //   is: this.moduleId,
      // };

      // if (this.moduleId === 'myImg') {
      //   this.data.component.src = '/demoImg/l_1_1.png';
      // }
      this.$emit('change',{
        src:`http://10.168.4.28:17011${this.moduleOB.comImg}`,
        is:this.moduleOB.code,
      })
      this.visible = false;
    },
    open(data) {
      this.data = data;
      this.visible = true;
    },
  },
};
</script>

<style lang="less" scoped>
.itemList {
  display: flex;
  flex-wrap: wrap;
  .item {
    position: relative;
    margin: 16px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 258px;
    height: 184px;
    border: 1px solid #3a4659;
    background: #171b22;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    > .el-image {
      flex: 1;
      min-height: 0;
      width: 100%;
    }
  }
}
::v-deep {
  .el-dialog__footer {
    text-align: left;
  }
}
</style>