<template>
  <div
    class="user"
    :style="{
      height: vh + 'px',
    }"
  >
    <loading v-if="gameState === 'opening'"></loading>
    <game v-else-if="gameState === 'playing'"></game>
    <result v-else-if="gameState === 'complete'"></result>
  </div>
</template>

<script lang="ts" setup>
import {
  storeToRefs
} from 'pinia'

import {
  useStateStore,
} from '@/stores/qrquiz/gameState'

import Loading from '@/components/Loading/index.vue'
import Game from '~/components/Qrquiz/Game/index.vue'
import Result from '~/components/Qrquiz/Result/index.vue'

const stateStore = useStateStore()
const {
  gameState,
} = storeToRefs(stateStore)

const vh = ref(window.innerHeight)

onMounted(() => {
  window.addEventListener('resize', () => {
    vh.value = window.innerHeight
  })
})

</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins

.user
  flex: 1 1 540px
  max-width: 540px
  width: 100%
  height: 100%
  background: #F8F8F8
  box-shadow: 0 0 10px #0006
  overflow-y: auto
  -ms-overflow-style: none
  scrollbar-width: none
  &::-webkit-scrollbar
    display: none
</style>
