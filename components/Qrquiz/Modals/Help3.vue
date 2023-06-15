<template>
  <div class="help-content">
    <div class="box-method">
     <div class="method-header">
       <div class="step">
         <p class="font-jalnan">방법 3</p>
       </div>
       <p class="method-title">열쇠와 힌트</p>
     </div>
      <img class="m-auto d-block" src="~/assets/images/games/qr/play/help3.svg" alt="">
    </div>
    <div class="text-area">
      <div class="round-box yellow">
        열쇠
      </div>
      <p class="help-text">
        팀이 문제를 많이 풀어야 얻을 수 있습니다.<br>부족하면 <span class="red">일반 문제</span>를 더 풀어보세요!
      </p>
      <div class="round-box gray">
        1차 힌트
      </div>
      <p class="help-text">
        보유한 <span class="red">열쇠</span>를 사용하여 볼 수 있습니다.
      </p>
      <div class="round-box dark">
        2차 힌트
      </div>
      <p class="help-text">
        1차 힌트 사용 후 요청이 가능합니다. <span class="red">‘방장’</span>이 수락하면 힌트를 볼 수 있습니다. 물론! 방장이 순순히 주지 않겠지요?
      </p>
      <p class="caution">
        목표는 탈출! 힌트를 아끼지 마세요!
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins
@import ~/assets/sass/helpModal
</style>