<template>
  <div class="type-lock">
    <i class="icon-locker"></i>
    <div class="box-lock">
      <!-- lockNumArray 테스트 데이터 -->
      <div
        v-for="(item, index) in lockNumArray"
        :key="index"
        class="locker"
      >
        <button type="button" class="btn btn-lock-up" @click="handleClickMoveNumber(index, true)">
          <img src="~assets/images/games/qr/quiz/icn-lock-up.svg" alt="숫자증가 아이콘">
        </button>
          <p class="locker-num">{{item}}</p>
        <button type="button" class="btn btn-lock-down" @click="handleClickMoveNumber(index, false)">
          <img src="~assets/images/games/qr/quiz/icn-lock-down.svg" alt="숫자감소 아이콘">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  changeAnswer: (input: any) => void
}>()

const lockNumArray = ref([0, 0, 0, 0])
const answer = ref('')
const handleClickMoveNumber = (index: number, isPlus: boolean) =>{
  if(isPlus){
    if(lockNumArray.value[index] < 9){
      lockNumArray.value[index] += 1
    }else{
      lockNumArray.value[index] = 0
    }
  }else{
    if(lockNumArray.value[index] > 0){
      lockNumArray.value[index] -= 1
    }else{
      lockNumArray.value[index] = 9
    }
  }
  props.changeAnswer(lockNumArray.value.join(''))
}
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins
.input-text
  width: 100%
  min-height: 45px
  padding: 12px 16px
  font-size: 18px
  font-weight: 400
  letter-spacing: -0.54px
  line-height: 1.2
  border: 1px solid $gray-1
  border-radius: 8px
  outline: none
  &::placeholder
    font-size: 18px
    font-weight: 400
    letter-spacing: -0.54px
    line-height: 1.2
    color: $gray-3

.type-lock
  text-align: center
  width: 100%
  .icon-locker
    font-size: 24px
    color: #324473
    display: block
    margin: 0 auto 54px auto
.box-lock
  display: flex
  justify-content: center
  width: 100%
  background: #324473
  padding: 11px 0
  margin-bottom: 28px
.locker
  margin-right: 8px
  position: relative
  width: 100%
  max-width:48px
  &:nth-last-child(1)
    margin-right: 0
  .locker-num
    width: 100%
    height: 96px
    font-size: 47px
    font-weight: 500
    border: 1px solid $gray-2
    border-radius: 8px
    text-align: center
    display: flex
    align-items: center
    justify-content: center
    background: linear-gradient(180deg, #B2B2B2 0%, #FBFBFB00 17%, #FFFFFF00 51%, #FDFDFD00 85%, #B2B2B2 100%) #fff
    position: relative
  .btn
    display: block
    position: absolute
    left: 50%
    padding: 0
    width: 100%
    max-width: 40px
    transform: translateX(-50%)
    border: none
    img
      width: 100%
  .btn-lock-up
    top: -40px
  .btn-lock-down
    bottom: -40px
</style>
