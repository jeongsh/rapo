<template>
  <div class="wrap theme-5">
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

<style lang="sass">
.theme-1
  @import ~/assets/sass/games/qr/var-qr1

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}

.theme-2
  @import ~/assets/sass/games/qr/var-qr2

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}

.theme-3
  @import ~/assets/sass/games/qr/var-qr3

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}

.theme-4
  @import ~/assets/sass/games/qr/var-qr4

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}

.theme-5
  @import ~/assets/sass/games/qr/var-qr5

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}

.theme-6
  @import ~/assets/sass/games/qr/var-qr6

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}

.theme-7, .theme-11
  @import ~/assets/sass/games/qr/var-qr7

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}

.theme-8
  @import ~/assets/sass/games/qr/var-qr8

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}

.theme-9
  @import ~/assets/sass/games/qr/var-qr9

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}

.theme-10
  @import ~/assets/sass/games/qr/var-qr10

  @each $name, $color in $tmc
    --tm-#{$name}: #{$color}
</style>