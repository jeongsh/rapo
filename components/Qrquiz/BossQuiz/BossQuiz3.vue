<template>
  <div class="boss-quiz">
    <div class="boss-header">
      <div class="box-text">
        <h2 class="boss-title font-jalnan">추론문제</h2>
        <span class="current-quiz">{{currentBossQuizNo + 1}} / {{wholeBossQuizCount}}</span>
      </div>
      <div class="box-hint">
        <button class="btn btn-dropdown font-jalnan" @click="toggleHintbox">
          힌트
          <i class="icon-chevron_right"></i>
        </button>
        <ul class="hint-list" :class="{'show': hintboxToggle}">
          <li class="hint-item">
            <button
              class="btn-hint btn-first-hint"
              @click="showFirstHint"
              :class="{'used' : isUsedFirstBossHint}"
              :disabled="false">
              <i v-if="isUsedFirstBossHint" class="icon-eye"></i>
              <i v-else class="icon-hint"></i>
              1차 힌트
            </button>
          </li>
          <li class="hint-item">
            <button
              class="btn-hint btn-second-hint"
              @click="showSecondHint"
              :class="{'used' : isUsedSecondBossHint}"
              :disabled="(
                !isUsedFirstBossHint
              )"
              >
              <i v-if="isUsedSecondBossHint" class="icon-eye"></i>
              <i v-else class="icon-airplane"></i>
              2차 힌트
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- / boss-header -->

    <div class="boss-content">
      <div class="quiz-content pt-0">
        <p class="gray-box">'띵동~'<br>앗? 선생님의 오래된 핸드폰으로<br>악마가 문자를 보냈다. 무슨 말을 하는 걸까??</p>
      </div>
      <img src="~/assets/images/games/qr/boss/theme-5/quiz3.jpg" alt="" class="quiz-img">
      정답은 '나잡아봐라'입니다.
    </div>

    <div
      v-if="isTeamLeader"
      class="boss-type-input"
    >
      <input type="text" name="" id="" class="input-text" placeholder="정답을 입력해 주세요."
        v-model="inputtedAnswer"
      >
    </div>

    <div
      v-if="isTeamLeader"
      class="box-custom-btn"
    >
      <button
        type="button"
        class="btn-push"
        @click="handleClickSubmit"
      >제출하기</button>
    </div>

    <div
      v-if="isShowHint"
      class="boss-hint-modal"
    >
      <div class="wrap-hint">
        <button
          @click="hideHint()"
          class="btn btn-close"
        >
          <i class="icon-xmark"></i>
        </button>
        <p class="hint-title font-jalnan">
          {{hintNo}}차 힌트
        </p>
        <div
          v-if="hintNo === 1"
        >
          <div
            v-if="isUsedFirstBossHint"
          >
            <div class="hint-content open">
              <div class="white-box">
                <p class="hint-message">핸드폰의 자판을 보면<br><span class="red">숫자마다 한글</span>이 있어!</p>
              </div>
            </div>
            <div class="hint-footer justify-content-center">
              <button
                type="button"
                class="btn-push"
                @click="hideHint()"
              >확인</button>
            </div>
          </div>
          <div
            v-else
          >
            <div class="hint-content">
              <p class="require-hint font-jalnan">
                <i class="icon-hint"></i>
                <img src="~/assets/images/games/qr/boss/icn-round-x.svg" alt="">1
              </p>
              <p class="hint-count font-jalnan">팀 보유 열쇠: {{earnedBossHintCount - usedBossHintCount}}</p>
              <p class="hint-text">
                열쇠 1개를 사용하여<br>1차 힌트를 보겠습니까?
              </p>
            </div>
            <div class="hint-footer">
              <button
                type="button"
                class="btn-push gray"
                @click="hideHint"
              >취소</button>
              <button
                type="button"
                class="btn-push"
                @click="handleClickUseBossHint"
              >사용</button>
            </div>
          </div>
        </div>
        <div
          v-else-if="hintNo === 2"
        >
          <!--
            TODO: 1차 힌트를 사용하기 전에 2차 힌트를 사용하거나 표시할 수 없도록 해야 하는가??
          -->
          <div
          >
            <div class="hint-content open">
              <div class="hint-message white-box">문제에 있는 특수 문자와<br>자음, 모음을 보고<br>문장을 만들어 보자.</div>
            </div>
            <div class="hint-footer justify-content-center">
              <button
                type="button"
                class="btn-push"
                @click="hideHint()"
              >확인</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 다음 문제로 가기 버튼?? -->
    <div
      v-if="isShowFeedback"
      class="feedbackModal"
    >
      <div
        v-if="showingFeedbackType === 'correct'"
        class="modal-content"
      >
        <img src="~assets/images/games/qr/quiz/icn-feedback-star.png" alt="">
        <h2 class="modal-title font-jalnan">정답!</h2>
        <div class="box-answer">
          <p class="modal-text font-weight-bold">나잡아봐라</p>
        </div>
        <!-- <p class="box-message">벌써 중간까지 왔네?<br>좀 더 힘내 보자!</p> -->
        <div class="box-btn">
          <button
            type="button"
            class="btn-push"
            @click="handleClickNextQuiz"
          >다음</button>
        </div>
      </div>
      <div
        v-else
        class="modal-content"
      >
        <img src="~assets/images/games/qr/quiz/icn-feedback-siren.png" alt="">
        <h2 class="modal-title font-jalnan">오답!</h2>
        <div class="box-answer">
          <p class="modal-text">다시 한 번 신중하게 풀어보자.<br>힌트를 사용해볼까?</p>
        </div>
        <div class="box-btn">
          <button
            type="button"
            class="btn-push"
            @click="handleClickFeedbackPopup"
          >계속</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  storeToRefs
} from 'pinia'

import {
  useStateStore,
} from '@/stores/qrquiz/gameState'
const stateStore = useStateStore()
const {
  wholeBossQuizCount,
  currentBossQuizNo,
  earnedBossHintCount,
  usedBossHintCount,
  isUsedFirstBossHint,
  isUsedSecondBossHint
} = storeToRefs(stateStore)

const hintboxToggle = ref(false)
const hintNo = ref(0)
const isShowHint = ref(false)
const isShowFeedback = ref(false)
const showingFeedbackType = ref('')
const inputtedAnswer = ref('')
const isTeamLeader = ref(true)

const props = defineProps<{
  closeBossQuiz: () => void
}>()

const toggleHintbox = () => {
  hintboxToggle.value = !hintboxToggle.value
}

const showFirstHint = () => {
  isShowHint.value = true
  hintNo.value = 1
}

const handleClickUseBossHint = () => {
  if(earnedBossHintCount.value - usedBossHintCount.value < 1) {
    alert('보유한 힌트가 없습니다. 일반 문제를 더 풀어주세요!')
    return
  }
  stateStore.useHint()
  stateStore.useFirstBossHint()
}
const showSecondHint = () => {
  if(isUsedFirstBossHint.value) {
    hintNo.value = 2
    isShowHint.value = true
    stateStore.useSecondBossHint()
  }
}
const hideHint = () => {
  isShowHint.value = false
}
const handleClickSubmit = () =>{
  isShowFeedback.value = true
  if(inputtedAnswer.value === '나잡아봐라') {
    showingFeedbackType.value = 'correct'
  } else {
    showingFeedbackType.value = 'incorrect'
  }
}

const handleClickFeedbackPopup = () => {
  isShowFeedback.value = false
}
const handleClickNextQuiz = () => {
  stateStore.changeState('complete')
  stateStore.endGame()
}
</script>
