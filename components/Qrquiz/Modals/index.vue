<template>
  <div class="modal modal-help">
    <div class="modal-header">
      <h2 class="modal-title font-jalnan">게임방법</h2>
      <button
        @click="$emit('close')"
        class="btn-close"
      >
        <i class="icon-xmark"></i>
      </button>
    </div>
    <help-1
      v-if="helpNo === 1"
    />
    <help-2
      v-else-if="helpNo === 2"
    />
    <help-3
      v-else-if="helpNo === 3"
    />
    <div class="modal-footer">
      <p class="page-number">
          {{helpNo}} / 3
        </p>
      <div class="box-custom-btn">
        <button
          class="btn-push"
          :disabled="(helpNo === 1)"
          @click="movePrevHelp"
        >
          이전
        </button>
        <button
          class="btn-push"
          :disabled="(helpNo === 3)"
          @click="moveNextHelp"
        >
          다음
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Help1 from '@/components/Qrquiz/Modals/Help1.vue'
import Help2 from '@/components/Qrquiz/Modals/Help2.vue'
import Help3 from '@/components/Qrquiz/Modals/Help3.vue'

const helpNo = ref(1)

const moveNextHelp = () => {
  helpNo.value += 1
}

const movePrevHelp = () => {
  helpNo.value -= 1
}

</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins

.modal.modal-help
  max-width: 540px
  width: 100%
  height: 100%
  position: fixed
  left: 50%
  top: 0
  transform: translateX(-50%)
  background: #fff
  z-index: 1000
  overflow-y: auto
  display: block

  .modal-header
    width: 100%
    height: 75px
    display: flex
    align-items: center
    justify-content: space-between
    border-bottom: 1px solid #DDDDDD
    padding: 0 1rem
  .modal-title
    color: #333333
    font-size: 1.5rem

  .btn-close
    background: none
    outline: none
    border: none
    .icon-xmark
      font-size: 32px
.modal-footer
  position: absolute
  bottom: 37px
  padding: 0 1.5rem
  width: 100%
  @media (max-height: 760px)
    position: unset
    margin: 32px 0

.page-number
  text-align: center
  font-size: 18px
  font-weight: 500
  color: #999999
  margin-bottom: 12px
.box-custom-btn
  width: 100%
  display: flex
  justify-content: space-between

.btn-push
  width: 142px

@media (min-width: 541px) and (max-width: 992px)
  .custom-btn
    width: 48%
</style>
