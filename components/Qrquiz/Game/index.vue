<template>
  <div class="user-wrapper">
    <game-main
      :open-normal-quiz="handleClickOpenNormalQuiz"
    />

    <normal-quiz
      v-if="isNormalQuiz"
      :close-normal-quiz="handleClickCloseNormalQuiz"
    />
  </div>
</template>

<script setup lang="ts">
import GameMain from '@/components/Qrquiz/GameMain/index.vue'
import NormalQuiz from '@/components/Qrquiz/NormalQuiz/index.vue'

const isNormalQuiz = ref(false)

const handleClickOpenNormalQuiz = () => {
  isNormalQuiz.value = true
}

const handleClickCloseNormalQuiz = () => {
  isNormalQuiz.value = false
}

</script>

<style lang="scss" scoped>

</style>
