<template>
  <div class="content-area">
    <div class="type-embed-video">
      <iframe
        src="https://www.youtube.com/embed/761ae_KDg_Q"
        class="video-frame"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture
        "
        allowfullscreen
      >
      </iframe>
    </div>
    <div
      class="type-text"
    >
      다음 영상의 제목으로 알맞은 것은?
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
@import ~/assets/sass/variables
@import ~/assets/sass/mixins
.content-area > *
  margin-bottom: 16px
  &:nth-last-child(1)
    margin-bottom: 0

.type-text
  font-size: 16px
  font-weight: 400

.type-image
  border-radius: 8px
  border: 1px solid #ddd
  width: 100%
</style>
