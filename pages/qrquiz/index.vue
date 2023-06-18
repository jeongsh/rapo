<template>
  <div class="wrap theme-5">
    <div
      v-if="!isStarted"
      class="intro"
    >
      <button class="btn-push" @click="startGame">sdasdasd</button>
    </div>
    <user
      v-else
    >
    </user>
  </div>
</template>

<script setup lang="ts">
import User from '@/components/Qrquiz/User/index.vue'
import { storeToRefs } from 'pinia';
import { useStateStore } from '@/stores/qrquiz/gameState';

const stateStore = useStateStore()

const isStarted = ref(false)

const startGame =  () => {
  stateStore.startGame()
  isStarted.value = true
}
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins

.wrap
  display: flex
  align-items: center
  justify-content: center
  background: #F8F8F8

  .intro
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    max-width: 540px
    width: 100%
    height: 100vh
    background: #F8F8F8
    position: relative
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