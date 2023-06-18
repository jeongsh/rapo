<template>
  <div class="result">
    <div class="top">
      <h1 class="title">최종 결과</h1>
      <img class="img" src="~/assets/images/games/qr/result/trophy.svg" alt="트로피">
    </div>

    <div class="main">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">우리 팀</h2>
        </div>

        <div class="card-body">
          <div class="team-grid">
            <div class="bedge">
              <i
                class="icon icon-trophy"
              ></i>
            </div>
            <div class="rank">1위</div>
            <div class="divide">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="4"><path d="M28 2a2 2 0 112 2 2 2 0 01-2-2zM14 2a2 2 0 112 2 2 2 0 01-2-2zM0 2a2 2 0 112 2 2 2 0 01-2-2z" fill="currentColor"/></svg>
            </div>
            <div class="name">A</div>
            <div class="success">
              <span class="text-green">성공</span><span class="text-gray">({{gameOverTime}})</span>
            </div>
          </div>
        </div>
      </div>
      <!-- / card -->
      <div class="card">
        <div class="card-header">
          <h2 class="card-title team-title-grid">
            <span></span>
            <span>순위</span>
            <span></span>
            <span>팀</span>
            <span>탈출</span>
          </h2>
        </div>

        <div class="card-body">
          <div
            v-for="team of fiveRankedTeams"
            :key="team.teamNumber"
            class="team-grid"
          >
            <div class="bedge">
              <i
                v-if="team.rank === 1"
                class="icon icon-trophy"
              ></i>
            </div>
            <div class="rank">{{team.rank ? team.rank + '위' : '-'}}</div>
            <div class="divide gray">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="4"><path d="M28 2a2 2 0 112 2 2 2 0 01-2-2zM14 2a2 2 0 112 2 2 2 0 01-2-2zM0 2a2 2 0 112 2 2 2 0 01-2-2z" fill="currentColor"/></svg>
            </div>
            <div class="name">{{team.teamTitle}}</div>
            <div class="success">
              <template
                v-if="team.isCleared"
              >
                <span class="text-green">성공</span><span class="text-gray">({{team.clearedTimeText}})</span>
              </template>
              <span
                v-else
                class="text-orange"
              >실패</span>
            </div>
          </div>
        </div>
      </div>
      <!-- / card -->
      
      <div class="row cap">
        <div class="col cap-title">종료 시간</div>
        <div class="col cap-body">
          <i class="icon icon-timer"></i>
          {{gameOverTime}}
        </div>
      </div>
    </div>
    <!-- / main -->
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useStateStore } from '@/stores/qrquiz/gameState';

const stateStore = useStateStore()
const {
  startDt,
  endDt,
} = storeToRefs(stateStore)

const gameOverTime = ref('')

const fiveRankedTeams = ref(
  [
    {
      teamNumber: 1,
      teamTitle: 'A',
      rank: 1,
      isCleared: true,
      clearedTimeText: gameOverTime,
    },
    {
      teamNumber: 2,
      teamTitle: 'B',
      rank: undefined,
      isCleared: false,
      clearedTimeText: '00:00',
    },
    {
      teamNumber: 3,
      teamTitle: 'C',
      rank: undefined,
      isCleared: false,
      clearedTimeText: '00:00',
    },
    {
      teamNumber: 4,
      teamTitle: 'D',
      rank: undefined,
      isCleared: false,
      clearedTimeText: '00:00',
    },
    {
      teamNumber: 5,
      teamTitle: 'E',
      rank: undefined,
      isCleared: false,
      clearedTimeText: '00:00',
    },
  ]
)

//endDt와 startDt의 차이를 분초 00:00로 나타내기
const getDiffTime = (startDt: Date, endDt: Date) => {
  const diff = endDt.getTime() - startDt.getTime()
  const diffMin = Math.floor(diff / 1000 / 60).toString().padStart(2, '0')
  const diffSec = (Math.floor(diff / 1000) % 60).toString().padStart(2, '0')
  return `${diffMin}:${diffSec}`
}

onMounted(() => {
  if(startDt.value !== undefined && endDt.value !== undefined) {
    gameOverTime.value = getDiffTime(startDt.value, endDt.value)
  }
})

</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins
//
@import ~/assets/sass/userResult

$yellow: #F4AF1E

.result
  .main
    height: 100%
    padding-bottom: 80px
  .card
    margin-bottom: 24px
    border-width: 0
    border-radius: 10px
    box-shadow: 0px 3px 6px #00000029
    overflow: hidden

    &-header,
    &-body
      padding: 18px
      border-radius: 0
      text-align: center
      background: #fff
    &-header
      background-color: var(--tm-primary)
    &-body
      font-size: 18px
      font-weight: 500

      .icon
        font-size: 24px
        color: $yellow
      .name
        font-size: 20px
        font-weight: 700
    &-title
      margin: 0
      color: $white
      font-family: $font-jalnan
      font-size: 20px
      line-height: 1
      vertical-align: bottom
  .team-grid
    display: grid
    margin-bottom: 26px
    grid-template-columns: 1fr 1fr 1.5fr 1fr 4fr

    &:last-child
      margin-bottom: 0
  .team-title-grid
    display: grid
    // grid-template-columns: 1.6fr 0.8fr 2.1fr
    grid-template-columns: 1fr 1fr 1.5fr 1fr 4fr
  .divide
    color: $yellow

    &.gray
      color: #9B8C9B

  .cap
    display: flex
    position: fixed
    margin: 0 auto
    left: 0
    right: 0
    bottom: 24px
    width: 290px
    font-size: 18px
    font-weight: 500
    background-color: $white
    box-shadow: 0px 3px 16px #00000029
    border-radius: 25px

    &-title
      color: $white
      background-color: #E24949
      border-radius: 25px
      text-align: center
    &-body
      text-align: right
    .col
      padding: 12px 24px
    .icon
      margin-right: 2px
      color: #999999
      font-size: 24px
      vertical-align: -2px
  .text-green
    color: #0E9C7B
  .text-gray
    color: #666
  .text-orange
    color: #E24949

.theme-14, .theme-18
  .result
    .card-header
      background: #704421

.theme-17
  .result .card-header
    background: #389D4A

.theme-29
  .result .card-header
    background: #369B80
</style>
