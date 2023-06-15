<template>
  <div class="user-main">
    <header class="header">
      <div class="box-nickname">
        <p class="my-nickname font-jalnan">상훈이</p>
        <span class="my-role reader">팀장</span>
      </div>
      
      <button
        class="btn-help font-jalnan"
        @click="handleClickOpenHelpModal"
      >?</button>
    </header>
    <div class="body">
      <div
        class="room-door"
        :class="{ open: Math.floor(progress * 100) >= 50 }"
      >
        <transition name="fade">
          <div
            v-if="Math.floor(progress * 100) >= 50"
            class="box-message"
          >
            <p class="message-enterable" style="text-align: center;">문이 열렸습니다. <br>클릭하여 추론문제에 입장해주세요</p>
          </div>
        </transition>
      </div>
      <div class="progress">
        <div class="progress-box">
          <p class="progress-title font-jalnan">추론 문제 방</p>
          <span class="progress-num">{{Math.floor(progress * 100)}} / 100%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-current" :style="{width: (progress * 100) + '%'}">
          </div>
        </div>
      </div>
      <div class="status">
        <div class="status-header">
          <p class="team-title font-jalnan">A팀 정보 <span class="team-count">1명</span></p>
          <button
            class="btn-member"
            @click="handleClickShowMyTeamMembers"
          >
            <img class="pr-1" src="~assets/images/games/qr/play/icon-team-member.svg" alt="">
            <i class="icon-chevron_right"></i>
          </button>
        </div>
        <div class="wrap-count">
          <p class="key-title font-jalnan">
            <i class="icon icon-hint"></i>
            팀 열쇠 현황
          </p>
          <div class="box-key">
            <div class="key-header">
              <p class="font-jalnan">보유</p>
              <p class="font-jalnan">사용</p>
              <p class="font-jalnan">전체</p>
            </div>
            <div class="key-body">
              <p class="key-count">{{earnedBossHintCount}}</p>
              <p class="key-count">{{usedBossHintCount}}</p>
              <p class="key-count">3</p>
            </div>
          </div>
          <div class="box-solved" @click="handleClickShowMySolvedQuizzes">
            <p class="solved-title font-jalnan">내가 푼 문제</p>
            <p class="solved-count">
              <span class="green">{{solvedNormalQuizCount}}</span>&nbsp;/ {{wholeQuizCount}}
            </p>
            <button
              class="btn-my-solved"
            >
              <i class="icon-chevron_right"></i>
            </button>
          </div>
        </div>
        <div class="text-center">
          <button
            type="button"
            class="btn-push"
            @click="props.openNormalQuiz"
          >QR스캔<small>(데모라서 스킵합니다)</small></button>
        </div>
      </div>
      <!-- status end-->
    </div>
    <help-modal
      v-if="isHelpOpen"
      @close="handleClickCloseHelpModal"
    />
    <div
      v-if="isShowMyTeamMembers"
      class="modal modal-member"
    >
      <div class="content-area">
        <div class="modal-header">
          <h2 class="modal-title font-jalnan">팀원 보기</h2>
          <button
            class="btn-close"
            @click="handleClickHideMyTeamMembers"
          >
            <i class="icon-xmark"></i>
          </button>
        </div>
        <div class="modal-body">
          <ul class="list-member">
            <li
              class="item-member reader"
            >
              <p class="member-name">
                상훈이
                <span class="member-score">
                  ({{solvedNormalQuizCount}}/{{wholeQuizCount}})
                </span>
              </p>
              <span
                class="member-role reader"
              >
                팀장
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      v-if="isShowMySolvedQuizzes"
      class="modal-solved modal"
    >
      <div class="content-area">
        <div class="modal-header">
          <h2 class="modal-title font-jalnan">내가 푼 문제</h2>
          <button
            class="btn-close"
            @click="handleClickHideMySolvedQuizzes"
          >
            <i class="icon-xmark"></i>
          </button>
        </div>
        <div class="modal-body">
          <ul class="list-quiz">
            <li
              v-for="quiz of myNormalQuizList"
              :key="quiz.quizNo"
              class="item-quiz"
              :class="{'solved': quiz.isSolved}"
            >
              {{quiz.quizNo}}
            </li>
          </ul>
        </div>
      </div>
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

import helpModal from '@/components/Qrquiz/Modals/index.vue'

const stateStore = useStateStore()
const {
  wholeQuizCount,
  solvedNormalQuizCount,
  progress,
  earnedBossHintCount,
  usedBossHintCount,
  myNormalQuizList,
} = storeToRefs(stateStore)

const props = defineProps<{
  openNormalQuiz: () => void
}>()

const isHelpOpen = ref(false)
const isShowMyTeamMembers = ref(false)
const isShowMySolvedQuizzes = ref(false)

const handleClickOpenHelpModal = () => {
  isHelpOpen.value = true
}

const handleClickCloseHelpModal = () => {
  isHelpOpen.value = false
}
const handleClickShowMyTeamMembers = () => {
  isShowMyTeamMembers.value = true
}
const handleClickHideMyTeamMembers = () => {
  isShowMyTeamMembers.value = false
}

const handleClickShowMySolvedQuizzes = () => {
  isShowMySolvedQuizzes.value = true
}
const handleClickHideMySolvedQuizzes = () => {
  isShowMySolvedQuizzes.value = false
}
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins
@import ~/assets/sass/games/qr/_var-qr5

.user-main
  background: #2C192C
  height: 100%

.header
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  height: 60px
  padding: 0 1rem
  background-color: var(--tm-primary)

  .box-nickname
    margin-left: 10px
    width: auto
    min-width: 162px
    min-height: 34px
    background: $white
    box-shadow: inset 0px 3px 0px #00000029, 0px 3px 6px #00000029
    border-radius: 23px
    display: flex
    align-items: center
    padding-left: 48px
    padding-right: 15px
    position: relative
    padding-top: 3px
    &::after
      content: ""
      position: absolute
      width: 46px
      height: 46px
      top: 50%
      left: -10px
      background: url(~/assets/images/games/qr/play/icon-red-profile.svg)
      transform: translateY(-50%)
    .my-nickname
      font-size: 16px
      color: #222222
      word-break: break-all
      max-width: calc(100% - 28px)

    .my-role
      width: 38px
      height: 20px
      border-radius: 4px
      background: #444444
      display: flex
      align-items: center
      justify-content: center
      color: $white
      font-size: 14px
      font-weight: 500
      margin-left: 8px
      line-height: 20px

    .reader
      background: #82462B
  // box-nickname
  .btn-help
    width: 34px
    height: 34px
    border: 3px solid #fff
    background: #82462B
    box-shadow: 0px 3px 6px #00000029
    border-radius: 50%
    font-size: 18px
    color: $white
    display: flex
    align-items: center
    justify-content: center
    padding-top: 0.3rem
    padding: 0
    bottom: 0
.room-door
  position: relative
  // flex: 1 0 200px
  min-height: 200px
  aspect-ratio: 540 / 297
  background-image: url(@/assets/images/games/qr/boss/theme-1/room-close.jpg)
  background-size: cover
  background-position: center

  &.open
    background-image: url(@/assets/images/games/qr/boss/theme-1/room-open.jpg)

  .box-message
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  .message-enterable
    width: 310px
    height: 70px
    display: flex
    align-items: center
    justify-content: center
    background: #000000C7
    color: $white
    font-size: 16px
    font-weight: 500
    border-radius: 8px

// header
.body
  height: calc(100% - 60px)
  display: flex
  flex-direction: column
.progress
  width: 100%
  padding: 20px 2.5rem 28px 2.5rem
  background: #191714
  &-box
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 2px
  &-title
    font-size: 16px
    color: $white
  &-num
    font-size: 18px
    color: $white
  &-bar
    width: 100%
    height: 20px
    border-radius: 20px
    background: $white
    border: 2px solid #ddd
  &-current
    width: 50%
    height: 100%
    border-radius: 20px
    background: #FFAD08
// progress
.status
  border-radius: 10px 10px 0 0
  background: #FFF0D8
  padding: 1rem
  padding-top: 40px
  flex-grow: 1
  &-header
    display: flex
    justify-content: space-between
    height: 24px
    margin-bottom: 24px
  .team-title
    font-size: 22px
    display: flex
    line-height: 1.1

  .team-count
    display: flex
    justify-content: center
    width: 44px
    height: 23px
    color: $white
    font-size: 16px
    font-weight: 500
    border-radius: 4px
    background: #82462B
    font-family: $font-family-sans-serif
    margin-left: 10px
    line-height: 23px
  .icon-chevron_right
    font-size: 24px
    color: #2B2B2B

.btn-member
  background: none
  border: none
  outline: none
  display: flex
  align-items: center
  padding: 0

.wrap-count
  width: 100%
  padding: 1.5rem
  background: #FCE2BA
  border-radius: 8px
  margin-bottom: 1.5rem
  .key-title
    font-size: 20px
    line-height: 26.5px
    margin-bottom: 16px

    .icon
      margin-right: -7px
      color: #FFAD08
      font-size: 26px
      vertical-align: -2px

  .box-key
    box-shadow: 0px 2px 4px #0000001A
    border-radius: 8px
    overflow: hidden
    margin-bottom: 20px
    .key-header
      display: flex
      align-items: center
      justify-content: space-between
      height: 49px
      background: #FFAD08
      border-radius: 8px 8px 0 0
      .font-jalnan
        flex: 1 1
        text-align: center
        color: $white
        font-size: 16px
    .key-body
      height: 49px
      display: flex
      align-items: center
      justify-content: space-between
      border: 1px solid #F2F2F2
      background: $white
      .key-count
        flex: 1 1
        text-align: center
        font-size: 22px
        font-weight: 600
        color: #2B2B2B
        &:nth-child(1)
          color: #0E9C7B
        &:nth-child(2)
          color: #E24949
.box-solved
  width: 100%
  height: 60px
  background: #0E9C7B
  display: flex
  align-items: center
  position: relative
  border-radius: 0.5rem
  padding: 0 1rem
  cursor: pointer
  .solved-title
    color: $white
    font-size: 16px
    margin-right: 19px
  .solved-count
    min-width: 68px
    padding: 0 8px
    height: 23px
    display: flex
    align-items: center
    justify-content: center
    font-weight: 500
    font-size: 16px
    color: #666666
    background: #fff
    border-radius: 23px
    .green
      color: #0E9C7B
  .btn-my-solved
    position: absolute
    background: none
    border: none
    outline: none
    right: 16px
    .icon-chevron_right
      color: #fff
      font-size: 24px

.btn-push
  width: 306px
  display: block
  margin: 0 auto
  small
    font-family: inherit
    font-size: 14px
.modal
  max-width: 540px
  width: 100%
  height: 100%
  position: absolute
  left: 50%
  transform: translateX(-50%)
  top: 0
  background: rgba(0,0,0,0.6)
  z-index: 1000
  display: flex
  align-items: center
  justify-content: center
  .content-area
    width: 358px
    background: #fff
    border: 1px solid #DDDDDD
    border-radius: 4px
    box-sizing: content-box

  &-header
    width: 100%
    height: 75px
    display: flex
    align-items: center
    justify-content: space-between
    border-bottom: 1px solid #DDDDDD
    padding: 0 16px

  &-body
    padding: 16px

  &-title
    color: #333333
    font-size: 24px

  .btn-close
    background: none
    outline: none
    border: none
    .icon-xmark
      font-size: 32px

  .list-member
    padding-left: 0
    list-style: none
    background: #F8F8F8
    border: 1px solid #DDDDDD
    border-radius: 8px
    height: 327px
    overflow-y: auto
    -ms-overflow-style: none
    scrollbar-width: none
    &::-webkit-scrollbar
      display: none
    .item-member
      display: flex
      align-items: center
      justify-content: space-between
      height: 60px
      padding: 0 23px
      &:nth-last-child(1)
        margin-bottom: 0

      &.reader
        background: #485D92
        .member-name
          color: #fff
          .member-score
            color: #fff

  .member-name
    font-size: 16px
    font-weight: 500
    color: #666666
    .member-score
      font-weight: 300
      padding-left: 4px
      color: #999999

  .member-role
    font-size: 15px
    font-weight: 500
    width: 40px
    height: 22px
    display: flex
    align-items: center
    justify-content: center
    color: #666666
    background: #ECECEC
    border-radius: 4px

    &.reader
      background: #C5EDFF

  .list-quiz
    padding-left: 0
    list-style: none
    padding: 24px 19px
    background: #F8F8F8
    border-radius: 8px
    height: 288px
    overflow-y: auto
    display: flex
    flex-wrap: wrap
    align-content: flex-start
    margin: 0
    -ms-overflow-style: none
    scrollbar-width: none
    &::-webkit-scrollbar
      display: none

    .item-quiz
      width: 48px
      height: 48px
      background: #fff
      border-radius: 50%
      box-shadow: inset 0px 2px 2px #00000029
      display: flex
      align-items: center
      justify-content: center
      font-size: 22px
      font-weight: 600
      font-family: 'Noto Sans KR'
      margin-right: 12px
      margin-bottom: 16px
      &:nth-child(5n)
        margin-right: 0
      &.solved
        color: #fff

      &.solved:nth-child(6n + 1)
        background: #FCAB02
      &.solved:nth-child(6n + 2)
        background: #FB658E
      &.solved:nth-child(6n + 3)
        background: #956395
      &.solved:nth-child(6n + 4)
        background: #5EC3EF
      &.solved:nth-child(6n + 5)
        background: #67D0BE
      &.solved:nth-child(6n)
        background: #7E96F6

@media (min-width: 541px) and (max-width: 992px)
  .btn-push
    width: 60%

@media (max-width: 380px)
  .header .box-nickname
    padding-left: 40px

  .header .box-nickname .my-nickname
    font-size: 12px
    word-break: keep-all
    overflow: hidden
    text-overflow: ellipsis

  .progress
    padding: 20px 1rem 28px

// theme
// =============================================
.theme-2
  $gd: linear-gradient(to bottom, #4979BA, #3252BE)

  .header
    background-image: $gd
    .box-nickname
      .reader
        background-image: $gd
    .btn-help
      background-color: #FFAD08
  .status
    background-color: #F4F7FF

    .team-count
        background-image: $gd
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-2/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-2/room-open.jpg)
  .wrap-count
    background-color: #D1E5FF

.theme-3
  .header
    background: #2D0050
    .reader
      background: #9A3FE1
    .btn-help
      background: #51195E

  .progress
    background: #1D1324
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-3/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-3/room-open.jpg)
  .status
    background: #EDDEF8
  .wrap-count
    background: #fff

  .team-count
    background: #2D0050

.theme-4
  .header
    background: #293654
    .reader
      background: #3E5992
    .btn-help
      background: #293654

  .progress
    background: #181F2E
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-4/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-4/room-open.jpg)
  .status
    background: #DDE6FB
  .wrap-count
    background: #fff

  .team-count
    background: #3B4D77

.theme-5
  .header
    background: #512B51
    .reader
      background: #512B51
    .btn-help
      background: #946394

  .progress
    background: #2C192C
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-5/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-5/room-open.jpg)
  .status
    background: #FFF0D8
  .wrap-count
    background: #FCE2BA

  .team-count
    background: #2D0050

.theme-6
  .header
    background: #172137

    .reader
      background: #1C3E88
    .btn-help
      background: #1C3E88

  .progress
    background: #191714
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-6/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-6/room-open.jpg)
  .status
    background: #FFF0D8
  .wrap-count
    background: #FCE2BA

  .team-count
    background: #1C3E88

.theme-7, .theme-11
  .header
    background: #642F17

    .reader
      background: #5E2E19
    .btn-help
      background: #9F6044

  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-7/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-7/room-open.jpg)
  .status
    background: #FFF0D8
  .wrap-count
    background: #FCE2BA

  .team-count
    background: #5E2E19

.theme-8
  .header
    background: #0E8EBE

    .reader
      background: #0B6D92
    .btn-help
      background: #006084

  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-8/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-8/room-open.jpg)
  .status
    background: #FFF0D8
  .wrap-count
    background: #FCE2BA

  .team-count
    background: #5E2E19

.theme-9
  .header
    .reader
      background: #154D47
    .btn-help
      background: #154D47

  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-9/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-9/room-open.jpg)

  .team-count
    background: #1B9B8D

.theme-10
  .header
    background: #302323
    .reader
      background: #F23535
    .btn-help
      background: #F23535

  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-10/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-10/room-open.jpg)

  .team-count
    background: #F23535

.theme-12
  .header
    .reader
      background: #469A41
    .btn-help
      background: #356E32

  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-12/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-12/room-open.jpg)

  .team-count
    background: #2C442B

.theme-13
  .header
    background: #17314D
    .reader
      background: #3159A5
    .btn-help
      background: #3159A5

  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-13/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-13/room-open.jpg)

  .team-count
    background: #3159A5
  .user-main
    background: #1A2B3D
  .progress
    background: #1A2B3D

.theme-14, .theme-18
  .header
    background: #271E17

  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-14/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-14/room-open.jpg)

.theme-16
  .header
    background: #271E17

  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-16/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-16/room-open.jpg)

.theme-17
  .header .box-nickname .reader
    background: #000
  .header .btn-help
    background: #52985E
  .user-main
    background: #0B2A10
  .progress
    background: #0B2A10
  .team-count
    background: #21C23D
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-17/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-17/room-open.jpg)

.theme-19
  .header
    background: #271E17
    .btn-help
      background: #F23535
  .box-nickname .reader
    background: #F23535
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-19/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-19/room-open.jpg)

.theme-20
  .header
    background: #302323
    .btn-help
      background: #F23535
  .box-nickname .reader
    background: #F23535
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-20/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-20/room-open.jpg)

.theme-21
  .header
    background: #302323
    .btn-help
      background: #F23535
  .box-nickname .reader
    background: #F23535
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-21/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-21/room-open.jpg)

.theme-22
  .header
    background: #302323
    .btn-help
      background: #F23535
  .box-nickname .reader
    background: #F23535
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-22/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-22/room-open.jpg)
.theme-23
  .header
    background: #302323
    .btn-help
      background: #00929C
  .box-nickname .reader
    background: #00929C
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-23/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-23/room-open.jpg)
  .btn-push
    background: #007981
    color: #fff

.theme-24
  .header
    background: #302323
    .btn-help
      background: #F23535
  .box-nickname .reader
    background: #1944A2
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-24/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-24/room-open.jpg)
  .team-count
    background: #3C5FAC

.theme-25
  .header
    background: #302323
    .btn-help
      background: #F23535
  .box-nickname .reader
    background: #F23535
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-25/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-25/room-open.jpg)
  .team-count
    background: #F23535

.theme-26
  .header
    background: #302323
    .btn-help
      background: #F23535
  .box-nickname .reader
    background: #F23535
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-26/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-26/room-open.jpg)
  .team-count
    background: #F23535

.theme-27
  .header
    background: #181B1C
    .btn-help
      background: #421D98
  .box-nickname .reader
    background: #7452C5
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-27/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-27/room-open.jpg)
  .team-count
    background: #6849B0

.theme-28
  .header
    background: #181B1C
    .btn-help
      background: #421D98
  .box-nickname .reader
    background: #7452C5
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-28/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-28/room-open.jpg)
  .team-count
    background: #6849B0

.theme-29
  .header
    background: #181B1C
    .btn-help
      background: #347B53
  .box-nickname .reader
    background: #53A175
  .room-door
    background-image: url(@/assets/images/games/qr/boss/theme-29/room-close.jpg)
    &.open
      background-image: url(@/assets/images/games/qr/boss/theme-29/room-open.jpg)
  .team-count
    background: #53A175
</style>
