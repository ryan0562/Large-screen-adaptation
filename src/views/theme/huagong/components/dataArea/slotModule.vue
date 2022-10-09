<template>
  <div class="slotModule">
    <dataBlock :data="data" />
    <span v-if="$route.query.edit === '1'" class="el-icon-circle-close delete" @click="deleteData"></span>
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
  methods: {
    deleteData(){
      this.$emit('delete')
    }
  },
};
</script>

<style scoped lang="less">
.slotModule {
  position: relative;
  .delete {
    font-size: 30px;
    position: absolute;
    top: -15px;
    right: -15px;
  }
}
</style>
