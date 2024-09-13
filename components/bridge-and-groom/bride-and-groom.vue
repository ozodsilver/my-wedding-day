<script setup lang="ts">
const route = useNuxtApp()
import  gsap from "gsap";
onMounted(()=>{
  gsap.from('.top-animation-flower', { opacity: 0, duration: 1.9, ease : 'elastic.inOut', x:-100, y:-30 });
  gsap.to('.top-animation-flower', { opacity: 1, duration: 1.9, ease : 'elastic.inOut', x:0, y:0 });
})

</script>

<template>
<section>
<!--  <video class="h-[500px] pigeon object-cover" src="~/assets/videos/wedding.mp4" muted autoplay loop  />-->
<div class="w-full h-[500px] top-0 z-40   gradient-block">
 <Transition name="fade">
   <iframe class="absolute top-animation-flower top-0 left-[-70px]" src="https://lottie.host/embed/3d3e6064-0834-4318-9f93-42b05e7143da/xSvikz1xKw.json"></iframe>
 </Transition>
<div class="text-center capitalize text-[130px]">
  <div class="relative">
    <h1 class="dancing-script-700 text-shadow text-white font-bold relative">O</h1>
  </div>
  <img src="~/assets/images/ring.png" alt="" class="w-[80px] block mx-auto">
  <div class="relative background-text">
    <h1 class="dancing-script-700 text-shadow text-white relative">F</h1>
  </div>
</div>

<!--  <div class="border w-full flex items-center justify-center text-[40px] italic dancing-script-700 bg-fixed h-[60px]  bg-gradient-to-br">-->
<!--<h1>12/03/1992</h1>-->
<!--  </div>-->
</div>
 
<!--  <img class="w-[40%] float-right pigeon" src="~/assets/images/pigeon.png" alt="">-->
</section>
</template>

<style scoped>
.gradient-block{
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='627' height='627' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%239a0009'/%3E%3Cstop offset='1' stop-color='%23cb002a'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%23868686'/%3E%3Cstop offset='0.09' stop-color='%23ababab'/%3E%3Cstop offset='0.18' stop-color='%23c4c4c4'/%3E%3Cstop offset='0.31' stop-color='%23d7d7d7'/%3E%3Cstop offset='0.44' stop-color='%23e5e5e5'/%3E%3Cstop offset='0.59' stop-color='%23f1f1f1'/%3E%3Cstop offset='0.75' stop-color='%23f9f9f9'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='0.32' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top center;
}

  .background-text {
    position: relative;
    display: inline-block;
    font-size: 140px;
    font-weight: bold;
    color: white;
    text-align: center;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("/assets/images/flower-for-f.png");
      background-size: cover;
      background-position: center;
      z-index: -1;
    }
  }



</style>