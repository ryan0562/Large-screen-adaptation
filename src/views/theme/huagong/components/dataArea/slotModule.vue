<template>
  <div class="slotModule">
    <addModule v-if="data.component.is === 'addModule'" :data="data" :style="data.style" />
    <template v-else>
      <dataBlock :data="data" />
      <span class="el-icon-circle-close delete" @click="data.component.is='addModule'"></span>
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
  computed: {},
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
