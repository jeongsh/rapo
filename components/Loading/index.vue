<template>
  <div class="wrap theme-5">
    <div
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
  </div>
</template>

<script setup lang="ts">
import {
  storeToRefs
} from 'pinia'

import {
  useStateStore,
} from '@/stores/qrquiz/gameState'

const stateStore = useStateStore()
const {
  gameState,
} = storeToRefs(stateStore)
onMounted(() => {
  setTimeout(() => {
    stateStore.changeState('playing')
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
