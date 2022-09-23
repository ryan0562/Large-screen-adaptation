<template>
  <div :style="$layout.styles" :data-theme="$config.theme">
    <router-view :name="name" />
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$config.theme || 'default';
    },
  },
};
</script>