<template>
  <div class="no-cursor">
    <p>{{ $route.params.name }}</p>
  </div>
  <Cursor />
</template>

<script setup lang="ts">
import Cursor from '~/components/common/Cursor.vue'
const route = useRoute()
</script>

<style lang="scss" scoped>
.aaa{
  height: 100vh;
}
</style>
