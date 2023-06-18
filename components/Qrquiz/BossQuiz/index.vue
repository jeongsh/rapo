<template>
  <div class="boss">
    <div class="boss-header">
      <button
        class="btn btn-close"
        @click="closeBossQuiz"
      >
        <i class="icon-chevron_right"></i>
        <span>메인</span>
      </button>
      <div class="box-hint">
        <p class="font-jalnan hint-count">
          {{earnedBossHintCount - usedBossHintCount}}
        </p>
      </div>
    </div>
    <boss-quiz-1
      v-if="currentBossQuizNo === 0"
      :close-boss-quiz="closeBossQuiz"
    />
    <boss-quiz-2
      v-if="currentBossQuizNo === 1"
      :close-boss-quiz="closeBossQuiz"
    />
    <boss-quiz-3
      v-if="currentBossQuizNo === 2"
      :close-boss-quiz="closeBossQuiz"
    />
  </div>
</template>

<script setup lang="ts">
import {
  storeToRefs
} from 'pinia'

import {
  useStateStore,
} from '@/stores/qrquiz/gameState'

import BossQuiz1 from './BossQuiz1.vue'
import BossQuiz2 from './BossQuiz2.vue'
import BossQuiz3 from './BossQuiz3.vue'

const stateStore = useStateStore()
const {
  wholeQuizCount,
  solvedNormalQuizCount,
  progress,
  earnedBossHintCount,
  usedBossHintCount,
  myNormalQuizList,
  currentBossQuizNo
} = storeToRefs(stateStore)

const props = defineProps<{
  closeBossQuiz: () => void
}>()
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins

.boss
  position: fixed
  width: 100vw
  max-width: 540px
  height: 100%
  margin: 0 auto
  top: 0
  left: 0
  right: 0
  background: #F8F8F8
  z-index: 90

  &-header
    width: 100%
    height: 60px
    background: var(--tm-primary)
    padding: 0 1rem 0 0.625rem
    display: flex
    align-items: center
    justify-content: space-between
    .btn
      padding: 0
      color: #fff
      display: flex
      align-items: center
      font-size: 20px
      border: none
      span
        line-height: 26.4px
        padding-top: 0.1em
    .icon-chevron_right
      font-size: 24px
      transform: scaleX(-1)
      margin-right: 4px
  // boss-header

  .box-hint
    width: auto
    min-width: 77px
    height: 32px
    display: flex
    background: #fff
    border-radius: 32px
    padding-left: 40px
    position: relative
    &::before
      content: ""
      width: 41px
      height: 43px
      background: url(~/assets/images/games/qr/boss/theme-1/icn-boss-key.png) center no-repeat
      background-size: 41px 43px
      position: absolute
      left: -13px
      top: -4px
    .hint-count
      font-size: 18px
      padding-top: 0.1em
  .btn-push
    width: 306px

// theme
// ========================================
.theme-2
  .boss-header
    background-image: linear-gradient(to bottom, #4979BA, #3252BE)
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-2/icn-boss-key.png)

.theme-3
  .boss-header
    background: #780CCB
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-3/icn-boss-key.png)

.theme-4
  .boss-header
    background: #293654
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-4/icn-boss-key.png)

.theme-5
  .boss-header
    background: #512B51
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-5/icn-boss-key.png)

.theme-6
  .boss-header
    background: #172137
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-6/icn-boss-key.png)

.theme-8
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-8/icn-boss-key.png)

.theme-9
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-9/icn-boss-key.png)

.theme-10
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-10/icn-boss-key.png)

.theme-12
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-12/icn-boss-key.png)

.theme-13
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-13/icn-boss-key.png)

.theme-17
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-17/icn-boss-key.png)

.theme-23
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-23/icn-boss-key.png)

.theme-24
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-24/icn-boss-key.png)

.theme-25
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-25/icn-boss-key.png)

.theme-27
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-27/icn-boss-key.png)

.theme-28
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-28/icn-boss-key.png)


.theme-29
  .box-hint::before
    background-image: url(~/assets/images/games/qr/boss/theme-29/icn-boss-key.svg)
</style>

<style lang="sass">
@import ~/assets/sass/variables
@import ~/assets/sass/games/qr/var-qr5

.boss-quiz
  padding: 0 1rem
  height: calc(100% - 60px)
  overflow: auto
  padding-bottom: 60px
  -ms-overflow-style: none
  scrollbar-width: none
  &::-webkit-scrollbar
    display: none
  .boss-header
    height: 70px
    align-items: center
    justify-content: space-between
    display: flex
  .boss-title
    font-size: 22px
  .box-text
    display: flex
    align-items: center
  .current-quiz
    min-width: 50px
    height: 23px
    padding: 0 10px
    font-size: 16px
    background: #DDDDDD
    color: #666666
    border-radius: 17px
    display: flex
    align-items: center
    justify-content: center
    font-weight: 500
    margin-left: 10px
  .box-hint
    position: relative
  .btn-dropdown
    width: 132px
    height: 40px
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 10px 0 22px
    background: $tm-hint-menu
    border-radius: 20px
    box-shadow: 0px 3px 10px #00000029
    font-size: 18px
    color: #fff
    z-index: 1
    position: relative

    .icon-chevron_right
      font-size: 32px
      transform: rotate(90deg)
  .hint-list
    list-style: none
    width: 100%
    height: 0
    position: absolute
    top: 0
    left: 0
    padding: 0 10px 0 10px
    box-shadow: 0px 3px 6px #00000029
    background: #fff
    border-radius:14px
    transition: 0.2s
    &.show
      height: auto
      padding: 56px 10px 16px 10px
      .btn-hint
        opacity: 1
        visibility: visible
        transition: 0.2s 0.1s
  .btn-hint
    width: 100%
    height: 33px
    background-color: $tm-hint
    border-radius: 20px
    color: #fff
    font-size: 15px
    font-weight: 600
    border: none
    display: flex
    align-items: center
    padding-left: 13px
    opacity: 0
    visibility: hidden
    padding-right: 0
    &.btn-first-hint
      margin-bottom: 10px
    .icon-hint, .icon-airplane
      font-size: 24px
      color: #FDC837
      padding-right: 3px

    &:disabled
      background: #F2F2F2 !important
      color: #CFCFCF
      .icon-hint, .icon-airplane
        color: #FFE6A2

    &.used
      background: #FFAD08 !important
      .icon-eye
        font-size: 24px
        padding-right: 5px
        color: #fff

  .boss-content
    margin-bottom: 16px
    width: 100%
    height: auto
    min-height: 300px
    border: 1px solid #DDDDDD
    border-radius: 4px
    background-color: #FFFFFF
    box-shadow: 0px 3px 6px #00000029
    overflow: hidden
    padding: 24px

  .quiz
    &-img
      width: 100%
    &-content
      padding: 1.5rem 0
      font-size: 18px
      font-weight: 500
      line-height: 24px

      .gray-box
        width: 100%
        padding: 20px 0
        background: #DDDDDD
        border-radius: 10px
        text-align: center
        line-height: 1.45

      p:not(:last-child)
        margin-bottom: 1em

      strong
        font-weight: 600

  .boss-type-input
    width: 100%
    height: auto
    margin-bottom: 16px
    padding: 1rem
    border: 1px solid #ddd
    border-radius: 4px
    background-color: #fff
    box-shadow: 0px 3px 6px #00000029

.input-text
  width: 100%
  padding: 10px 14px
  background: #F8F8F8
  border: 1px solid #DDDDDD
  font-size: 18px

  &:focus-visible
    outline-color: #86B0FF

  &::placeholder
    color: #999999

.box-custom-btn
  text-align: center

  .btn-push
    width: 306px
    color: #000

.boss-hint-modal
  width: 100%
  height: 100%
  background: rgba(0,0,0,0.6)
  position: fixed
  left: 0
  top: 0
  z-index: 999
  display: flex
  align-items: center
  justify-content: center
  padding: 0 16px
  .wrap-hint
    width: 100%
    max-width: 358px
    background: #fff
    border-radius: 4px
    border: 1px solid #707070
    padding: 35px 30px
    position: relative

    .btn-close
      position: absolute
      right: 15px
      top: 15px
      font-size: 24px
      padding: 0
      display: block

  .hint-title
    width: 132px
    height: 34px
    background-color: #6D2E6D
    font-size: 18px
    display: flex
    align-items: center
    justify-content: center
    color: #fff
    border-radius: 20px
    margin: 0 auto
    margin-bottom: 20px

  .hint-content
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    margin-bottom: 21px
    padding: 40px 0 56px
    min-height: 260px
    border: 1px solid #DDDDDD
    background-color: #F8F8F8
    border-radius: 5px
    text-align: center

    &.open
      padding: 20px 17px

      .hint-img
        width: 100%
      .hint-message
        margin-top: 16px
        font-weight: 500
        &.gray
          color: #666666
      .big-message
        font-size: 40px
        font-weight: 700
        color: #333333
      .white-box
        height: 186px
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        background: #fff
        width: 100%
        margin-top: 0
        // text-align: center

    &-second
      padding: 26px 0 40px

    &.no-img
      height: 286px
      padding: 0
      display: flex
      align-items: center
      justify-content: center

  .require-hint
    font-size: 32px
    width: 144px
    height: 53px
    background: #fff
    border-radius: 29px
    display: flex
    align-items: center
    justify-content: center
    margin: 0 auto
    .icon-hint
      color: #FDC837
      font-size: 40px
      width: 25px
      display: flex
      justify-content: center
    img
      padding: 0 8px

  .hint-count
    font-size: 18px
    margin: 16px 0 35px
  .hint-text
    font-size: 18px
    font-weight: 500
    line-height: 24px

  .hint-footer
    width: 100%
    display: flex
    justify-content: space-between

    .btn-push
      width: 140px
      margin: 0 auto

  .box-airplane
    width: 98px
    height: 98px
    display: flex
    align-items: center
    justify-content: center
    background: #fff
    border-radius: 50%
    margin: 0 auto 19px auto
    .icon-airplane
      color: #FDC837
      font-size: 60px
      padding-top: 5px
      padding-left: 3px

  .hint-notice
    font-size: 16px
    font-weight: 400
    color: #E24949
    margin-top: 16px
    line-height: 22px

.feedbackModal
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(0,0,0,0.6)
  z-index: 999
  display: flex
  align-items: center
  justify-content: center
  padding: 0 16px

  .modal
    &-content
      max-width: 358px
      width: 100%
      padding: 62px 32px 32px 32px
      border-radius: 4px
      background: #fff
      text-align: center

    &-title
      font-size: 50px
      margin: 16px 0 42px

  .box-answer
    display: flex
    // width: 294px
    // height: 111px
    padding: 26px 15px
    border: 1px solid #ddd
    background-color: #F8F8F8
    border-radius: 4px
    text-align: center
    align-items: center
    justify-content: center
    flex-direction: column
  .box-message
    margin: 18px auto
    font-size: 18px
    font-weight: 500
    text-align: center
  .box-btn
    width: 145px
    margin: 60px auto 0

    .btn-push
      width: 100%

  .modal-text
    font-size: 18px
    font-weight: 500
    .red
      font-size: 24px
      font-weight: 700
      color: #D20C20
  .answer-count
    font-size: 16px
    font-weight: 500
    color: #666666
    width: 68px
    height: 23px
    background: #fff
    border-radius: 17px
    margin-top: 8px

    .green
      color: #0E9C7B
  .modal-notice
    font-size: 14px
    font-weight: 400
    color: #999999
.red
  color: #E10017

// @media (min-width: 541px) and (max-width: 992px)
//   .box-custom-btn .btn-push
//     width: 60%
</style>

