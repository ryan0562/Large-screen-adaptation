<template>
  <el-dialog title="新增场景" :visible.sync="visible" width="300px" @close="close">
    <!-- <div class="layoutBox">
      <div class="list">
        <div class="tit">场景列表</div>
        <div class="itemBox">
          <div
            v-for="(item, key) in data"
            :key="key"
            :class="['item', { act: act === key }]"
            @click="showInfo(key, item)"
          >
            {{ key }}
          </div>
        </div>
      </div> -->
    <!-- <div class="view" v-if="act"> -->
    <el-form :model="form" ref="form" label-width="80px">
      <el-form-item label="场景名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="左侧面板" prop="left">
        <el-input-number v-model="form.left" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="左侧面板" prop="right">
        <el-input-number v-model="form.right" :min="0"></el-input-number>
      </el-form-item>
    </el-form>
    <!-- </div>
    </div> -->

    <span slot="footer" class="dialog-footer">
      <!-- <el-button @click="add">新增</el-button> -->
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
function initForm() {
  return {
    left: null,
    right: null,
    name: null,
  };
}
export default {
  data() {
    return {
      visible: false,
      act: null,
      sourceData: {},
      data: {},
      form: initForm(),
      rules: {
        name: [{ required: true, message: '请输入场景名称', trigger: 'blur' }],
        left: [{ required: true, message: '请输入左侧面板数', trigger: 'blur' }],
        right: [{ required: true, message: '请输入右侧面板数', trigger: 'blur' }],
      },
    };
  },
  methods: {
    add() {
      this.$set(this.data, 'name', {});
    },
    showInfo(key, item) {
      const panels = item?.panels;
      const left = [],
        right = [],
        other = [];
      for (const key in panels) {
        const element = panels[key];
        switch (element.place) {
          case 'left':
            left.push(element);
            break;
          case 'right':
            right.push(element);
            break;
          default:
            other.push(element);
            break;
        }
      }
      this.form.left = left.length;
      this.form.right = right.length;
      this.form.name = key;

      this.act = key;
    },
    open(data) {
      this.sourceData = data;
      this.data = JSON.parse(JSON.stringify(data));
      this.visible = true;
    },
    submit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          const empty = {
            module: [],
            type: 1,
            visible: true,
          };

          let panels = {};
          const num = this.form.left + this.form.right;
          for (let index = 1; index <= num; index++) {
            if (index > this.form.left) {
              panels[index] = { ...empty, place: 'right' };
            } else {
              panels[index] = { ...empty, place: 'left' };
            }
          }

          this.sourceData[this.form.name]=panels;
          this.visible = false;
        }
      });
    },
    close() {
      this.form = initForm();
    },
  },
};
</script>

<style lang="less" scoped>
.el-input-number {
  width: 100%;
}
// .layoutBox {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   min-height: 500px;
//   .list {
//     width: 260px;
//     border: 1px solid #eee;
//     display: flex;
//     flex-direction: column;
//     .tit {
//       background: #87a9e4;
//       line-height: 40px;
//       font-size: 24px;
//       color: #fff;
//       text-align: center;
//     }
//     .itemBox {
//       flex: 1;
//       min-height: 0;
//       overflow: overlay;
//       .item {
//         line-height: 40px;
//         font-size: 24px;
//         text-align: center;
//         background: #fdd9d9;
//         margin-top: 10px;
//         cursor: pointer;
//         &.act {
//           background: #fc8c8c;
//         }
//       }
//     }
//   }
//   .view {
//     flex: 1;
//     margin-left: 20px;
//     border: 1px solid #eee;
//     .el-image {
//       width: 100%;
//       height: 100%;
//     }
//   }
// }
</style>