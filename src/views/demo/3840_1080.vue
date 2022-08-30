<template>
  <div>
    <top-bar
      v-if="layout.header"
      :style="layout.header.styles"
      :layout="layout.header"
    />
  </div>
</template>

<script>
export default {
  components: {
    topBar: () => import('@/components/topbar/topbar.vue'),
  },
  computed:{
    layout(){
      return this.$store.state.config['1920_1080']
    }
  }
};
</script>

<style lang="less" scoped>
</style>