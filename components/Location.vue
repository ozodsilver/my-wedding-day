<template>
  <img src="~/assets/images/splitter-heart.png" class="mx-auto" alt="">

  <i class="fas fa-location-dot text-red-600"></i>
  <p class="text-center text-[#05654E] text-xl py-6">Иштихон тумани: <span class="font-bold ">Богдод</span> базмгохи</p>

  <div class="layout-container flex justify-between rounded-lg bg-[#f2f4f3] max-w-4xl mx-auto my-5">
    <!-- O'ng tomondagi rasm qismi -->
    <div class="image-container flex items-center justify-center relative p-5">
      <img src="~/assets/images/bagdad.png" alt="Banquet Hall" class="location-image w-3/4 rounded-lg img-anim"/>

    </div>
  </div>

  <div class="mt-10">
    <a target="_blank" href="https://maps.app.goo.gl/Kd1RC6EzySmSigp77"
       class="w-[90%] rounded-full text-center bg-[#05654E] mx-auto block p-3 px-5 text-white ">Открыть карту</a>
  </div>

  <img src="~/assets/images/splitter-heart.png" class="mx-auto block py-10" alt="">

</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// GSAP ScrollTrigger plaginini ro'yxatdan o'tkazish
gsap.registerPlugin(ScrollTrigger);

// GSAP orqali img-anim sinfli rasmlarga animatsiyani qo'llash
onMounted(() => {
  gsap.fromTo(
      ".img-anim",
      {scale: 0},  // Boshlang'ich scale holati
      {
        scale: 1,          // Yakuniy scale holati
        duration: 1,       // Har bir rasm uchun animatsiya davomiyligi
        ease: "power1.out",// Silliq chiqish animatsiyasi
        stagger: 0.3,      // Har bir rasm 0.3 soniyadan keyin chiqadi
        scrollTrigger: {
          trigger: ".image-container", // Sahifani kuzatish qismi
          start: "top 90%",            // Scroll 90% ga kelganda boshlanadi
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
  transform: scale(0); /* Boshlang'ich o'lcham */
}
</style>
