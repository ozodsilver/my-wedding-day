<script setup lang="ts">
const route = useNuxtApp()
import  gsap from "gsap";
onMounted(()=>{
  gsap.from('.pigeon', { opacity: 0, duration: 1.9, ease : 'elastic.inOut' });
})
</script>

<template>
<section>
  <video class="h-[500px] pigeon object-cover" src="~/assets/videos/wedding.mp4" muted autoplay loop  />
<div class="w-full h-[450px] relative z-40 top-[-450px]  gradient-block">
<div class="text-center capitalize text-[40px]">
  <h1>Salom</h1>
  <h1>{{route._route.query.message}}</h1>
</div>
</div>
<!--  <iframe  class="absolute top-[-10px] left-[-60px]" src="https://lottie.host/embed/2fe18b5e-fc0c-4280-833a-6dfaf8ec8465/srno38OAWh.json"></iframe>-->
<!--  <img class="w-[40%] float-right pigeon" src="~/assets/images/pigeon.png" alt="">-->
</section>
</template>

<style scoped>
.gradient-block{
  background: rgb(0,30,36);
  background: linear-gradient(180deg, rgba(0,30,36,0) 0%, rgba(241,241,241,0.6026785714285714) 49%);
}
</style>