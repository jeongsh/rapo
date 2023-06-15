<template>
  <div class="type-direction">
    <div class="box-reset">
      <button class="btn btn-reset-direction" @click="resetDirection">
        <img src="~/assets/images/games/qr/quiz/icn-reset-direction.svg" alt="">
      </button>
      <transition name="fade">
        <p
          class="reset-meesage"
          v-if="resetMessage"
        >초기화 완료</p>
      </transition>
    </div>
    <div class="direction-panel">
      <button class="btn btn-up" @click="moveDirection('up')">
        <img src="~/assets/images/games/qr/quiz/direction-button.svg" alt="">
      </button>
      <button class="btn btn-down" @click="moveDirection('down')">
        <img src="~/assets/images/games/qr/quiz/direction-button.svg" alt="">
      </button>
      <button class="btn btn-left" @click="moveDirection('left')">
        <img src="~/assets/images/games/qr/quiz/direction-button.svg" alt="">
      </button>
      <button class="btn btn-right" @click="moveDirection('right')">
        <img src="~/assets/images/games/qr/quiz/direction-button.svg" alt="">
      </button>
      <div
        class="direction-controller"
        :class="direction"
      ></div>
      <i class="icon-locker"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
type Direction = 'up' | 'down' | 'left' | 'right'
const props = defineProps<{
  changeAnswer: (input: any) => void
}>()
const direction = ref('')
const resetMessage = ref(false)
const inputtedDirection = ref('')

const handleChangeInputAnswer = (e: Event) =>{
  const answer = ((e.target) as HTMLInputElement).value
  props.changeAnswer(answer)
}
const moveDirection = (input: Direction)=>{
  moveStick(input)

  const directionData = {
    'up': 'u',
    'down': 'd',
    'left': 'l',
    'right': 'r',
  }[input]
  inputtedDirection.value = inputtedDirection.value + directionData
  props.changeAnswer(inputtedDirection.value)
}
const moveStick = (input: Direction) =>{
  direction.value = input
  setTimeout(() => {direction.value = 'center'}, 200)
}

const showResetMessage = () =>{
  resetMessage.value = true
  setTimeout(() => {resetMessage.value = false}, 2000)
}

const resetDirection = ()=>{
  const resettedInput = ''
  inputtedDirection.value = resettedInput

  props.changeAnswer(resettedInput)
  showResetMessage()
}
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins

.type-direction
  display: flex
  justify-content: center
.direction-panel
  width: 222px
  height: 227px
  margin-top: 10px
  position: relative
  background: url(~/assets/images/games/qr/quiz/direction-panel.svg) 50% 50% no-repeat
  .icon-locker
    position: absolute
    right: 0
    top: -2px
    font-size: 24px
    color: #324473
.reset-meesage
  color: #2D73F8
  font-size: 14px
  font-weight: 500
  letter-spacing: -0.42px
  margin-top: 8px
  position: relative
.btn
  padding: 0
  border: none
  &-reset-direction
    width: 63px
    height: 63px
    border: 3px solid #fff
    border-radius: 50%
    background: #F9AD12
    box-shadow: inset 4px 6px 0 #FFC248, 0 2px 0 rgba(0,0,0,0.16)
    margin-right: 16px
    position: relative
  &-up
    position: absolute
    top: 8px
    left: 50%
    transform: translateX(-50%)
  &-down
    position: absolute
    bottom: 8px
    left: 50%
    transform: translateX(-50%) rotate(180deg)
  &-left
    position: absolute
    top: 50%
    left: 8px
    transform: translateY(-50%) rotate(270deg)
  &-right
    position: absolute
    top: 50%
    right: 8px
    transform: translateY(-50%) rotate(90deg)
  &-center
    position: absolute
    width: 74px
    height: 74px
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
.direction-controller
  width: 111px
  height: 108px
  position: absolute
  background: url(~/assets/images/games/qr/quiz/direction-controller.svg) 50% 50% no-repeat
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  transition: 0.3s

  &.up
    transform: translate(-50%, -100%)
  &.down
    transform: translate(-50%, 0)
  &.left
    transform: translate(-100%, -50%)
  &.right
    transform: translate(0%, -50%)
  &.center
    transform: translate(-50%, -50%)

</style>
