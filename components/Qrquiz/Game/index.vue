<template>
  <div class="user-wrapper">
    <game-main
      :open-normal-quiz="handleClickOpenNormalQuiz"
      :open-boss-quiz="handleClickOpenBossQuiz"
    />

    <normal-quiz
      v-if="isNormalQuiz"
      :close-normal-quiz="handleClickCloseNormalQuiz"
    />

    <boss-quiz
      v-if="isBossQuiz"
      :close-boss-quiz="handleClickCloseBossQuiz"
    />
  </div>
</template>

<script setup lang="ts">
import GameMain from '@/components/Qrquiz/GameMain/index.vue'
import NormalQuiz from '@/components/Qrquiz/NormalQuiz/index.vue'
import BossQuiz from '@/components/Qrquiz/BossQuiz/index.vue'

const isNormalQuiz = ref(false)
const isBossQuiz = ref(false)

const handleClickOpenNormalQuiz = () => {
  isNormalQuiz.value = true
}

const handleClickCloseNormalQuiz = () => {
  isNormalQuiz.value = false
}

const handleClickOpenBossQuiz = () => {
  isBossQuiz.value = true
}

const handleClickCloseBossQuiz = () => {
  isBossQuiz.value = false
}
</script>

<style lang="scss" scoped>
.user-wrapper{
  height: 100%;
}
</style>
