<template>
  <div class="content-area">
    <div
      class="type-text"
    >
      상훈이를 합격시킨다
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins
.content-area > *
  margin-bottom: 16px
  &:nth-last-child(1)
    margin-bottom: 0

.type-text
  font-size: 16px
  font-weight: 400

.type-image
  border-radius: 8px
  border: 1px solid #ddd
  width: 100%
</style>
