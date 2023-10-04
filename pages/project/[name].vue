<template>
  <div>
    <p>{{ $route.params.name }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style lang="scss" scoped>

</style>
