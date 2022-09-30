<template>
  <addModule v-if="data.component.is === 'addModule' || !data.component.is" :data="data" :style="data.style"/>
  <dataBlock :data="data" v-else />
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
</style>
