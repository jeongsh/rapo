<template>
  <div>
    <button class="btn-push" @click="stateStore.changeState('playing')">asdasd</button>
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

const vh = ref(window.innerHeight)
</script>

<style lang="scss" scoped>

</style>
