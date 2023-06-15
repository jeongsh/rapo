<template>
  <div class="type-ox">
    <label for="type-o">
      <input
        type="radio"
        name="ox"
        :value="'o'"
        @change="(e, ...args) => handleChangeInputAnswer(e, args)"
        id="type-o"
      >
      <div class="box-o box-ox"></div>
    </label>
    <label for="type-x">
      <input
        type="radio"
        name="ox"
        :value="'x'"
        @change="(e, ...args) => handleChangeInputAnswer(e, args)"
        id="type-x"
      >
      <div class="box-x box-ox"></div>
    </label>
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
input[type="radio"]
  display: none

.type-ox
  display: flex
  justify-content: center
  gap: 12px
.box-ox
  width: 148px
  height: 148px
  border-radius: 8px
  border: 4px solid #F8F8F8
  box-shadow: 0 3px 0 rgba(0,0,0,0.16)
  transition: background-color 0.2s
.box-o
  background: url(@/assets/images/games/qr/quiz/type-o-gray.svg) 50% 50% / cover
.box-x
  background: url(@/assets/images/games/qr/quiz/type-x-gray.svg) 50% 50% / cover

input[type="radio"]:checked ~
  .box-o
    background: #0E9C7B url(@/assets/images/games/qr/quiz/type-o-white.svg) 50% 50% / cover
    box-shadow: 0 3px 0 rgba(0,0,0,0.16), inset 0 8px 0 #28B191

  .box-x
    background: #E24949 url(@/assets/images/games/qr/quiz/type-x-white.svg) 50% 50% / cover
    box-shadow: 0 3px 0 rgba(0,0,0,0.16), inset 0 8px 0 #E56B6B

.type-ox
  text-align: center

@media (min-width: 541px) and (max-width: 992px)
  .box-ox
    width: 200px
    height: 200px
  .box-o
    margin-right: 8px
</style>
