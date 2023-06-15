<template>
  <div class="wrap">
    <div
      v-if="isLoading"
      class="centered"
    >
      <div class="spinner">
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
      </div>

      <p class="text">loading ...</p>
    </div>
    <user
      v-else
    >
    </user>
  </div>
</template>

<script setup lang="ts">
import User from '@/components/Qrquiz/User/index.vue'
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins

.wrap
  display: flex
  align-items: center
  justify-content: center
  background: #F8F8F8

  .centered
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    max-width: 540px
    width: 100%
    height: 100vh
    // height: 100%
    background: #F8F8F8
    // box-shadow: 0 0 10px #0006
    position: relative
  .text
    margin-top: 8px
    color: $gray-5
    font-size: 14px
    font-weight: 500
    text-transform: uppercase
</style>
