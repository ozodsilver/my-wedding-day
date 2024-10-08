<template>
  <img src="~/assets/images/splitter-heart.png" class="mx-auto" alt="">
  <h1 class="text-[40px] alegreya text-[#05654E] text-center">Bazmgoh manzili</h1>
  <div class="layout-container flex justify-between rounded-lg bg-[#f2f4f3] max-w-4xl mx-auto my-5">
    <!-- O'ng tomondagi rasm qismi -->
    <div class="image-container flex items-center justify-center relative p-5">
      <img src="~/assets/images/bagdad.png" alt="Banquet Hall" class="location-image w-3/4 rounded-lg img-anim"/>
      <img src="~/assets/images/bagdad-two.png" alt="Banquet Hall" class="location-image w-2/4 bottom-[-40px] right-6 absolute rounded-lg img-anim"/>
      <img src="~/assets/images/bagdad3.png" alt="Banquet Hall" class="location-image w-2/4 bottom-[-60px] left-6 absolute rounded-lg img-anim"/>
    </div>
  </div>

  <div class="mt-20">
    <a target="_blank" href="https://maps.app.goo.gl/Kd1RC6EzySmSigp77"  class="w-[90%] text-center bg-[#05654E] mx-auto block p-3 px-5 text-white rounded-lg ">Открыть карту</a>
  </div>


</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// GSAP ScrollTrigger plaginini ro'yxatdan o'tkazish
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // GSAP orqali img-anim sinfli rasmlarga animatsiyani qo'llash
  gsap.fromTo(
      ".img-anim",
      { scale: 0 },  // Boshlang'ich scale holati
      {
        scale: 1,          // Yakuniy scale holati
        duration: 1,       // Har bir rasm uchun animatsiya davomiyligi
        ease: "power1.out",// Silliq chiqish animatsiyasi
        stagger: 0.3,      // Har bir rasm 0.3 soniyadan keyin chiqadi
        scrollTrigger: {
          trigger: ".image-container", // Sahifani kuzatish qismi
          start: "top 90%",            // Scroll 80% ga kelganda boshlanadi
          end: "bottom 60%",           // Sahifaning scroll holati 60% ga kelganda tugaydi
          scrub: 2,                    // Scroll davomida animatsiya real vaqt rejimida va sekin ishlaydi
          markers: false               // Markerlar, ko'rinadigan qilib sinab ko'rish uchun true qilishingiz mumkin
        }
      }
  );
});
</script>

<style scoped>
/* Animatsiya boshlanganda elementlarning kichik holatida bo'lishini ta'minlash */
.img-anim {
  transform: scale(0);  /* Boshlang'ich o'lcham */
}
</style>
