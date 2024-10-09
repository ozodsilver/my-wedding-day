<script setup lang="ts">
const route = useNuxtApp()
import gsap from "gsap";

const showDay = ref(false)

onMounted(() => {
  // left fingers
  gsap.fromTo('.left-fingers',
      {opacity: 0, left: -80, rotate: -20, bottom: 0},
      {
        opacity: 1,
        left: 0,
        rotate: 0,
        bottom: 200,
        duration: 1,
        ease: 'circ',
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
      }
  );

  // right fingers
  gsap.fromTo('.right-fingers',
      {opacity: 0, right: -300, bottom: 0},
      {
        opacity: 1,
        right: 0,
        bottom: 140,
        duration: 1,
        ease: 'circ',
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
      }
  );



  // left-flower
  gsap.to('.left-flower',
      {
        left: 0,
        opacity: 1,
        bottom: 0,
        rotate: 0,
        duration: 2,
        ease: 'expo',
        repeatDelay: 1 // 4 soniya kutish
      }
  );

  // right flower
  gsap.fromTo('.right-flower',
      {right: -70, opacity: 0, top: 0},
      {
        right: 0,
        opacity: 1,
        top: 0,
        rotate: 0,
        duration: 2,
        ease: 'elastic',
        repeat: 0,
      }
  );


  gsap.fromTo('.animational-flower',
      {left: -90, opacity: 0, top: 0},
      {
        left: -70,
        opacity: 1,
        top: 0,
        rotate: 0,
        duration: 2,
        ease: 'back.in',
        repeat: 0,
      }
  );

  // day

  gsap.from('.day',
      {
        y: -140,
        opacity: 0,
        delay : 3,
        duration: 1,
        ease: 'bounce',
        repeat: 0,
      }
  );

  gsap.from('.month',
      {
        y: -180,
        opacity: 0,
        delay : 4,
        duration: 1.2,
        ease: 'bounce',
        repeat: 0,
      }
  );

  gsap.from('.year',
      {
        y: -200,
        opacity: 0,
        delay : 5,
        duration: 1.2,
        ease: 'bounce',
        repeat: 0,
      }
  );

  showDay.value = false
  setTimeout(() => {
    showDay.value = true
  }, 6000)
})


</script>


<template>
  <section class="home ">
    <!--  <video class="h-[500px] pigeon object-cover" src="~/assets/videos/wedding.mp4" muted autoplay loop  />-->
    <div class="w-full  h-[600px]  overflow-hidden top-0 z-40 relative">

      <img src="~/assets/images/left-fingers.png" class=" w-[180px] absolute left-fingers" alt="">

      <img src="~/assets/images/right-fingers.png" alt="" class=" w-[180px] absolute right-fingers">

      <img src="~/assets/images/bottom-left-flower.png" alt="" class="left-flower w-[180px] absolute">
      <img src="~/assets/images/top-right-flower.png" alt="" class="right-flower w-[180px] absolute">


      <iframe class="absolute animational-flower top-0 left-0"
              src="https://lottie.host/embed/3d3e6064-0834-4318-9f93-42b05e7143da/xSvikz1xKw.json"></iframe>

        <div class="date playfair-display-400">
        <h1 class="text-[160px] day">23</h1>
        <h1 class="text-[160px] relative top-[-90px] month">10</h1>
        <h1 class="text-[160px] relative top-[-190px] year">24</h1>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
.home {
  background-image: url("/assets/images/bg-home.svg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}

.date {
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 60%;
  margin: 0;
  color: #05654E;
}

</style>