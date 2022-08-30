<template>
  <div>
    <screen_header
      v-if="layout.header"
      :options="layout.header"
    />
  </div>
</template>

<script>
export default {
  components: {
    screen_header: () => import('@/components/header/screen_header.vue'),
  },
  computed:{
    layout(){
      return this.$store.state.config.layout['1920_1080']
    }
  }
};
</script>

<style lang="less" scoped>
</style>