<template>
  <div class="cursor">
    <div class="circle inner">
      <img src="@/assets/images/icons/left-click.svg" alt="" class="left-click">
    </div>
    <div class="circle outer"></div>
  </div>
</template>

<script lang="ts" setup>
onMounted(() =>{
  const cursor = document.querySelectorAll<HTMLElement>('.circle');
  window.addEventListener('mousemove', (e) => {
    cursor.forEach((el) => {
      if(el !== null) {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });
  });
})
</script>

<style lang = "scss" scoped>
.cursor{
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 999999;
  mix-blend-mode: difference;
  .circle{
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    transform-origin: 50% 50%;
  }
  .inner{
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    left: calc(50% - 5px);
    top: calc(50% - 5px);
    .left-click{
      width: 24px;
      height: 24px;
      max-width: none;
      display: none;
    }
    &.active{
      background: transparent;
      .left-click{
        display: block;
      }
    }
  }
  .outer{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    transition: all 400ms cubic-bezier(0.19, 1, 0.22, 1);
    border: 2px solid #fff;
    box-sizing: border-box;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    &.active{
      width: 96px;
      height: 96px;
      border-radius: 60px;
      left: calc(50% - 48px);
      top: calc(50% - 48px);
    }
  }
}
</style>