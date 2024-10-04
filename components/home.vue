<script setup lang="ts">
const route = useNuxtApp()
import gsap from "gsap";

onMounted(() => {
  gsap.from('.left-fingers', {opacity: 0, duration: 2.9, ease: 'circ', x: -100, y: -30});
  gsap.to('.left-fingers', {opacity: 1, duration: 2.9, ease: 'circ', x: 0, y: 0});


//   right fingers
  gsap.from('.right-fingers', {opacity: 0, duration: 2.9, ease: 'circ', right: -300, });
  gsap.to('.right-fingers', {opacity: 1, duration: 2.9, ease: 'circ', right:0, y: 0});

  // heart
  gsap.from('.heart', {opacity: 0, duration: 2.9, ease: 'circ', right: -100, });
  gsap.to('.heart', {opacity: 1, duration: 2.9, ease: 'circ', right:200,  y: 80});

})

</script>

<template>
  <section class="home relative">
    <!--  <video class="h-[500px] pigeon object-cover" src="~/assets/videos/wedding.mp4" muted autoplay loop  />-->
    <div class="w-full  h-[700px] top-0 z-40 ">

      <img src="~/assets/images/left-fingers.png" class="top-[300px] absolute left-fingers" alt="">
      <img src="~/assets/images/heart.png" alt="" class="absolute top-[300px]  heart">
      <img src="~/assets/images/right-fingers.png" alt="" class="top-[300px] absolute right-fingers">
      

<!--      <Transition name="fade">-->
<!--        <iframe class="absolute top-animation-flower top-0 left-[-87px]"-->
<!--                src="https://lottie.host/embed/3d3e6064-0834-4318-9f93-42b05e7143da/xSvikz1xKw.json"></iframe>-->
<!--      </Transition>-->

    </div>

    <!--    <div class="border w-full  flex items-center justify-center text-[40px] italic dancing-script-700 bg-fixed h-[60px]  bg-gradient-to-br">-->
    <!--      <h1 class="text-slate-600">12/03/1992</h1>-->
    <!--    </div>-->

    <!--  <img class="w-[40%] float-right pigeon" src="~/assets/images/pigeon.png" alt="">-->
  </section>
</template>

<style lang="scss" scoped>
.home{
  background-image: url("/assets/images/bg-home.svg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

}

</style>