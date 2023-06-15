<template>
  <div class="type-choice">
    <div
      class="box-choice"
      v-for="(choice, index) in choices"
      :key="index"
      @click="(e, ...args) => handleClickInputAnswer(choice.value)"
    >
      <input type="radio" value="" name="choice" :id="'type-choice-' + choice.value">
      <label :for="'type-choice-' + choice.value">
        <div class="box-choice-text">
          <p class="choice-value">{{index + 1}}.</p>
          <p
            v-html="choice.content"
            class="choice-content"
          ></p>
          <div class="check-btn">
            <i class="icon-check"></i>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  changeAnswer: (input: any) => void
}>()

const handleClickInputAnswer = (value: number) => {
  props.changeAnswer(value)
}

const choices = [
  {
    value: 1,
    content: '아빠 상어'
  },
  {
    value: 2,
    content: '엄마 상어'
  },
  {
    value: 3,
    content: '상어가족'
  },
  {
    value: 4,
    content: '아기상어'
  }
]
</script>

<style lang="sass">
@import ~/assets/sass/variables
@import ~/assets/sass/mixins

.type-choice
  .box-choice
    margin-bottom: 8px
  input[type="radio"]
    display: none
  label
    width: 100%
    cursor: pointer
  .check-btn
    width: 24px
    height: 24px
    border-radius: 50%
    border: 1px solid #9D9D9D
    position: relative
    cursor: pointer
    margin-bottom: 0
    &::before
      content: ""
      width: 16px
      height: 16px
      border-radius: 50%
      background: $gray-1
      border: 1px solid $gray-2
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
  .icon-check
    display: none
  .box-choice-text
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 10px
    &:nth-last-child(1)
      margin-bottom: 0
  .choice-value
    font-size: 20px
    font-weight: 400
    width: 18px
  .choice-content
    width: calc(100% - 60px)
    min-height: 45px
    border-radius: 8px
    border: 1px solid #DDDDDD
    background-color: #F8F8F8
    padding: 13px 12px
    font-size: 18px

input[type="radio"]:checked ~
  label
    .check-btn
      border-color: var(--tm-radio-border)

      &::before
        border-color: var(--tm-radio-border)
        background-image: linear-gradient(to bottom, var(--tm-radio-gr1), var(--tm-radio-gr2))

    .choice-value
      color: var(--tm-input-text)

    .choice-content
      color: var(--tm-input-text)
      border-color: var(--tm-input-border)
      background-color: var(--tm-input-bg)

.theme-13
  .type-choice-all input[type=checkbox]:checked ~ label .choice-value
    color: #3E80FF
</style>
