<template>
  <img src="~/assets/images/splitter-heart.png" class="mx-auto" alt="">
  <h1 class="text-[40px] alegreya text-[#05654E] text-center">Bazmgoh manzili</h1>
  <i class="fas fa-location-dot text-red-600"></i>
  <p class="text-center text-[#05654E]">Иштихон тумани: <span class="font-bold ">Богдод</span> базмгохи</p>

  <p class="text-[#05654E] w-[80%]  mx-auto text-center">Cизнинг жойлашувингиздан, Базмгоҳгача бўлган масофа: <span
      class="italic font-bold" v-if="distance">{{ distance.toFixed(2) }} km(live)</span></p>
  <p v-if="error" class="text-red-600">{{ error }}</p>


  <div class="layout-container flex justify-between rounded-lg bg-[#f2f4f3] max-w-4xl mx-auto my-5">
    <!-- O'ng tomondagi rasm qismi -->
    <div class="image-container flex items-center justify-center relative p-5">
      <img src="~/assets/images/bagdad.png" alt="Banquet Hall" class="location-image w-3/4 rounded-lg img-anim"/>
      <img src="~/assets/images/bagdad-two.png" alt="Banquet Hall"
           class="location-image w-2/4 bottom-[-40px] right-6 absolute rounded-lg img-anim"/>
      <img src="~/assets/images/bagdad3.png" alt="Banquet Hall"
           class="location-image w-2/4 bottom-[-60px] left-6 absolute rounded-lg img-anim"/>
    </div>
  </div>

  <div class="mt-20">
    <a target="_blank" href="https://maps.app.goo.gl/Kd1RC6EzySmSigp77"
       class="w-[90%] text-center bg-[#05654E] mx-auto block p-3 px-5 text-white rounded-lg ">Открыть карту</a>
  </div>

  <img src="~/assets/images/splitter-heart.png" class="mx-auto block py-10" alt="">
  <h1 class="text-center py-2 text-sky-600 pb-10 text-lg">Сизни мамнуният билан кутамиз!</h1>
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

// Masofani saqlash uchun o'zgaruvchi
const distance = ref<number | null>(null);
const error = ref<string | null>(null);

// Maqsadli joylashuv (Ishtixon Bog'dod bazmgohi)
const targetLocation = {
  lat: 39.97014726071552, // Bog'dod bazmgohi kengligi
  lng: 66.4638628380789  // Bog'dod bazmgohi uzunligi
};

// Haversine formulasi yordamida masofani hisoblash funktsiyasi
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (value: number) => (value * Math.PI) / 180;

  const R = 6371; // Yer radiusi, km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Masofa, km
}

// Foydalanuvchining hozirgi joylashuvini olish
onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          // Masofani hisoblash
          distance.value = calculateDistance(
              latitude,
              longitude,
              targetLocation.lat,
              targetLocation.lng
          );
        },
        (err) => {
          error.value = "Жойлашувни аниклаб булмади: " + err.message;
        }
    );
  } else {
    error.value = "Geolocation API qo'llab-quvvatlanmaydi.";
  }
});
</script>

<style scoped>
/* Animatsiya boshlanganda elementlarning kichik holatida bo'lishini ta'minlash */
.img-anim {
  transform: scale(0); /* Boshlang'ich o'lcham */
}
</style>
