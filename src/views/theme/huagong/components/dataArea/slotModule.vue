<template>
  <div class="slotModule" :style="css">
    <dataBlock :data="OB" />
    <template v-if="isEdit">
      <div class="keepOut" @click.stop="editPanel"></div>
      <span class="el-icon-circle-close delete" @click="deleteData"></span>
    </template>
  </div>
</template>

<script>
export default {
  components: {
    dataBlock: () => import('./dataBlock.vue'),
  },
  props: {
    data: {
      // type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    OB(){
      return this.data.modules[this.data.module_index]
    },
    isEdit() {
      return this.$route.query.edit === '1';
    },
    css(){
      return {
        height:`calc((100% - 90px) / 12 * ${this.OB.grid})`,
        ...this.data.style
      }
    }
  },
  methods: {
    editPanel() {
      this.$bus.$emit('moduleInfoPanel', this.data, 'edit');
    },
    deleteData() {
      this.$emit('delete');
    },
  },
};
</script>

<style scoped lang="less">
.slotModule {
  position: relative;
  padding-top: 12px;

  .delete {
    font-size: 30px;
    position: absolute;
    top: -15px;
    right: -15px;
    z-index: 2;
  }
  .keepOut {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
  }
}
</style>
