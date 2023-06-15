<template>
  <div class="type-input">
    <input
      type="text"
      @input="(e, ...args) => handleChangeInputAnswer(e, args)"
      placeholder="정답을 입력해주세요."
      class="input-text"
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  changeAnswer: (input: any) => void
}>()

const handleChangeInputAnswer = (e: Event) => {
  const answer = ((e.target) as HTMLInputElement).value
  props.changeAnswer(answer)
}
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins
.wrap
  padding: 1.5rem 1rem 1rem 1rem
  background: #fff
  border: 1px solid #ddd
  border-radius: 4px
  box-shadow: 0px 3px 6px #00000029
  width: 100%
  > *
    width: 100%
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

</style>

