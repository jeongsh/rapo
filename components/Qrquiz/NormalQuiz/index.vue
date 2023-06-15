<template>
  <div class="normal">
    <div class="normal-header">
      <h2 class="normal-title">일반문제 {{currentQuizNo + 1}}.</h2>
      <button
        @click="props.closeNormalQuiz"
        class="btn btn-close"
      >
        <i class="icon-xmark"></i>
      </button>
    </div>
    <div class="normal-wrap">
      <div class="normal-body">
        <div class="wrap-content wrap">
          <h3
            class="quiz-title"
            v-html="`Q. ${currentQuiz.title}`"
          >
          </h3>
          <quiz-1
            v-if="currentQuizNo === 0"
          />
          <quiz-2
            v-if="currentQuizNo === 1"
          />
          <quiz-3
            v-if="currentQuizNo === 2"
          />
          <quiz-4
            v-if="currentQuizNo === 3"
          />
          <quiz-5
            v-if="currentQuizNo === 4"
          />
          <quiz-6
            v-if="currentQuizNo === 5"
          />
        </div>
        <div
          :class="[
            {'wrap-ox': currentQuiz.questionType == 'ox'},
            {'wrap-lock': currentQuiz.questionType == 'numbers'},
            {'wrap-direction': currentQuiz.questionType == 'directions'}
          ]"
          class="wrap-choice wrap"
        >
          <Ox
            v-if="currentQuiz.questionType == 'ox'"
            :changeAnswer="chaneAnswer"
          />
          <Input
            v-if="currentQuiz.questionType == 'input'"
            :changeAnswer="chaneAnswer"
          />
          <Choice
            v-if="currentQuiz.questionType == 'choice'"
            :changeAnswer="chaneAnswer"
          />
          <Numbers
            v-if="currentQuiz.questionType == 'numbers'"
            :changeAnswer="chaneAnswer"
          />
          <Directions
            v-if="currentQuiz.questionType == 'directions'"
            :changeAnswer="chaneAnswer"
          />
        </div>
      </div>

      <div class="normal-footer">
        <button
          type="button"
          class="btn-push"
          @click="handleClickSubmitAnswer"
        >정답 제출</button>
      </div>
    </div>
    
    
    <div
      v-if="isShowingFeedbackModal"
      class="feedbackModal"
    >
      <div
        v-if="isCorrect"
        class="modal-content"
      >
        <img src="@/assets/images/games/qr/quiz/icn-feedback-star.png" alt="">
        <h2 class="modal-title font-jalnan">정답!</h2>
        <div>
          <p class="answer-count"><span class="green">{{solvedNormalQuizCount}}</span> / {{wholeQuizCount}}</p>
        </div>
      </div>

      <div
        v-else-if="!isCorrect"
        class="modal-content"
      >
        <img src="@/assets/images/games/qr/quiz/icn-feedback-siren.png" alt="">
        <h2 class="modal-title font-jalnan">오답!</h2>
        <div
          class="box-answer"
        >
          <p class="modal-text"><strong class="red">2</strong>초 후 다시 도전할 수 있습니다.</p>
          <p class="modal-notice">(카운트가 끝나면 자동으로 닫힙니다.)</p>
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

import Quiz1 from '@/components/Qrquiz/QuizContents/quiz1.vue'
import Quiz2 from '@/components/Qrquiz/QuizContents/quiz2.vue'
import Quiz3 from '@/components/Qrquiz/QuizContents/quiz3.vue'
import Quiz4 from '@/components/Qrquiz/QuizContents/quiz4.vue'
import Quiz5 from '@/components/Qrquiz/QuizContents/quiz5.vue'
import Quiz6 from '@/components/Qrquiz/QuizContents/quiz6.vue'

import Ox from '@/components/Qrquiz/QuizTypes/ox.vue'
import Input from '@/components/Qrquiz/QuizTypes/input.vue'
import Choice from '@/components/Qrquiz/QuizTypes/choice.vue'
import Numbers from '@/components/Qrquiz/QuizTypes/numbers.vue'
import Directions from '@/components/Qrquiz/QuizTypes/directions.vue'

const stateStore = useStateStore()
const {
  currentQuizNo,
  myNormalQuizList,
  wholeQuizCount,
  solvedNormalQuizCount,
} = storeToRefs(stateStore)

const currentQuiz = ref(myNormalQuizList.value[currentQuizNo.value])
const props = defineProps<{
  closeNormalQuiz: () => void
}>()

const answer = ref()
const isCorrect = ref<undefined | true | false>(undefined)
const isShowingFeedbackModal = ref(false)

const chaneAnswer = (input : any) => {
  answer.value = input
}

const handleClickSubmitAnswer = () =>{
  isShowingFeedbackModal.value = true
  if(answer.value === currentQuiz.value.answer){
    stateStore.changeCorrect()
    isCorrect.value = true
    setTimeout(() => {
      isShowingFeedbackModal.value = false
      isCorrect.value = undefined
      stateStore.normalQuizSolved(currentQuizNo.value)
      props.closeNormalQuiz()
    }, 2000)
  } else {
    isCorrect.value = false
    setTimeout(() => {
      isShowingFeedbackModal.value = false
      isCorrect.value = undefined
    }, 2000)
  }
}
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins
@import @/assets/sass/games/qr/var-qr5

.normal
  position: absolute
  width: 100%
  max-width: 992px
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
    padding: 0 16px
    background-color: var(--tm-primary)
    display: flex
    align-items: center
    justify-content: space-between
  &-title
    font-size: 20px
    font-weight: 500
    color: #F8F8F8
  .icon-xmark
    font-size: 30px
    color: #fff
  &-wrap
    height: calc(100% - 60px)
    overflow-y: auto
  &-body
    padding: 16px
    margin-bottom: 16px
  &-footer
    text-align: center
    padding-bottom: 30px

    .btn-push
      width: 306px
.wrap
  padding: 1.5rem 1rem 1rem 1rem
  background: #fff
  border: 1px solid #ddd
  border-radius: 4px
  box-shadow: 0px 3px 6px #00000029
  width: 100%
  > *
    width: 100%
  &:nth-child(1)
    margin-bottom: 16px

  .quiz-title
    font-size: 20px
    font-weight: 500
    line-height: 26px
    margin-bottom: 16px

  .wrap-ox
    width: 100%
    margin: 0 auto

  .wrap-lock
    background: #BCC5DB
    display: flex
    align-items: center
    justify-content: center
    padding: 24px 0 36px 0

  .wrap-direction
    padding: 21px 0 26px
    background: #BCC5DB
    position: relative
    overflow: hidden
    border-radius: 4px
    &::before
      content: ""
      width: 100%
      height: 162px
      border-bottom: 6px solid rgba(0,0,0,0.3)
      background: #F2F4F8
      position: absolute
      left: 0
      top: 0

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
  overflow-y: auto
  &.explanation
    padding: 0
  .modal
    &-content
      max-width: 358px
      width: 100%
      padding: 62px 32px 32px
      border-radius: 4px
      background: #fff
      text-align: center
    &-full
      margin: 0 -16px
      width: calc(100% + 32px)
      max-width: none
      min-height: 100%
      border-radius: 0

      .modal-title
        margin-bottom: 24px
      .answer-count
        margin: 24px auto 32px
        background-color: #F8F8F8
      .btn-ok
        display: block
        width: 100%
        margin: 32px 0 0
        padding: 12px
        color: $white
        background-color: $gray-6
        border: none
        border-radius: 8px
        font-size: 18px

    &-title
      font-size: 50px
      margin: 16px 0 42px
  .explain
    margin: 8px -8px
    border: 1px solid $gray-1
    border-radius: 8px
    overflow: hidden
    &-text
      padding: 16px
      color: $gray-4
      background-color: #F9F9F9
      font-size: 17px
      line-height: 25px
      text-align: left

  .box-answer
    width: auto
    height: 111px
    background: #F8F8F8
    border-radius: 4px
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    &.inCorrectBox
      height: 137px

  .modal-text
    font-size: 18px
    font-weight: 500
    line-height: 1.2
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
    margin: 0 auto
    margin-top: 8px
    .green
      color: #0E9C7B
  .modal-notice
    font-size: 14px
    font-weight: 400
    color: #999999

  .modal-explanation
    padding: 80px 23px 60px 23px
    height: 100%
    overflow: auto
    max-width: none
    border-radius: 0
    .modal-title
      margin-bottom: 24px

    .answer-count
      width: 68px
      height: 23px
      background: #EDEDED
      border-radius: 23px
      display: flex
      align-items: center
      justify-content: center
      font-weight: 400
      margin: 0 auto 32px auto

.inCorrectText
  margin-bottom: 8px

// theme
// ==========================================
.theme-2
  .normal
    &-header
      background-image: linear-gradient(to bottom, #4979BA, #3252BE)

.theme-3
  .normal-header
    background: #9A3FE1

  .box-answer
    background-color: #EFE7F5
    border-color: #CEBFD9

.theme-5
  .normal-header
    background: #512B51
  .box-answer
    background-color: #F8F8F8
    border: none

.theme-8
  .normal-header
    background: #0E8EBE

.theme-10
  .box-answer
    border: none
</style>