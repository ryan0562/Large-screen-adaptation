<template>
  <!-- 编辑状态 -->
  <div class="slotModule" v-if="$route.query.edit === '1'">
    <addModule v-if="!data.component.is" :data="data" :style="data.style" />
    <template v-else>
      <dataBlock :data="data" />
      <span class="el-icon-circle-close delete" @click="data.component = { is: '' }"></span>
    </template>
  </div>
  <!-- 展示状态 -->
  <div class="slotModule" v-else>
    <dataBlock :data="data" v-if="data.component.is"/>
  </div>
</template>

<script>
export default {
  components: {
    dataBlock: () => import('./dataBlock.vue'),
  },
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    type() {},
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
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
