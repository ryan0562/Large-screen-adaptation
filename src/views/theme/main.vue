<template>
  <div :style="$layout.styles" :data-theme="$config.theme" class="sceenMain">
    <router-view :name="name" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters(['$config', '$layout']),
    name() {
      return this.$config.theme || 'default';
    },
  },
  created() {},
};
</script>
<style lang="less">
.sceenMain {
  position: absolute;
  left: 0;
  top: 0;
}
</style>