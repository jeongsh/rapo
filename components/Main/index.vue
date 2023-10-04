<template>
  <div>
    <div class="intro" v-if="false">
      <h1 class="title" v-for="a in titleArrr" :key="a">
        {{ a }}
      </h1>
    </div>
    <div class="slider">
      <div
        v-for="(page) in PAGE_INFO" :key="page.name"
        class="slide"
      >
        <nuxt-link :to="`/project/${page.name}`" class="link">
          <div class="wrap-title">
            <h2 class="title line">
              {{ page.name }}
            </h2>
            <h2 class="title fill">
              {{ page.name }}
            </h2>
          </div>
        </nuxt-link>
      </div>
    </div>

    <div
      class="page-transition"
      :class="[
        {'up' : isUpScroll},
        {'down' : isDownScroll}
      ]"
      :style="{
        'background': PAGE_INFO[currentSlide].color
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import textScroll from '@/assets/js/TextScroll.js'

import { PAGE_INFO } from '@/const/pageInfo'

onMounted(() => {
  const slider = document.querySelector('.slider')

  window.addEventListener('wheel', (e) => {
    if(isScroll.value) return
    isScroll.value = true
    console.log('down')
    if (e.deltaY > 0) {
      if(currentSlide.value !== PAGE_INFO.length - 1){
        currentSlide.value++
        isDownScroll.value = true
        setTimeout(() => {
          slider?.scrollBy(0, window.innerHeight)
        }, 700)
      }
    } else {
      if(currentSlide.value !== 0){
        currentSlide.value--
        isUpScroll.value = true
        setTimeout(() => {
          slider?.scrollBy(0, -window.innerHeight)
        }, 700)
      }
    }
    setTimeout(() => {
      isScroll.value = false
      isUpScroll.value = false
      isDownScroll.value = false
    }, 1500)
  })

  textScroll()
})
const isScroll = ref(false)
const isUpScroll = ref(false)
const isDownScroll = ref(false)
const currentSlide = ref(0)

</script>

<style lang="scss" scoped>

.slider {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.slide {
  width: 100vw;
  height: 100vh;
  font-size: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  .wrap-title{
    position: relative;
    width: 80vw;
    text-align: center;
  }
  .title{
    display: inline-block;
    font-size: max(146px, 5vw);
    color: #fff;
    line-height: 1;
    text-transform: uppercase;
    &.line{
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      -webkit-text-fill-color: transparent;
      overflow: hidden;
    }
    &.fill{
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      -webkit-text-fill-color: #fff;
      clip-path: circle(0vw at 50% 50%);
    }
  }
}

.page-transition {
  width: 100vw;
  height: 150vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  z-index: 100;
  &.up {
    animation: upScroll 1.5s forwards;
  }
  &.down {
    animation: downScroll 1.5s forwards;
  }
}


@keyframes upScroll {
  0% {
    transform: translate(-50%, -100%);
  }
  45% {
    transform: translate(-50%, 0%);
  }
  55%{
    transform: translate(-50%, 0%);
  }
  100% {
    transform: translate(-50%, 100%);
  }
}

@keyframes downScroll {
  0% {
    transform: translate(-50%, 100%);
  }
  45% {
    transform: translate(-50%, 0%);
  }
  55%{
    transform: translate(-50%, 0%);
  }
  100% {
    transform: translate(-50%, -100%);
  }
}
</style>