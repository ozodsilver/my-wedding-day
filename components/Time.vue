<template>
  <div class="countdown-container alegreya">
    <div class="countdown-box">
      <div class="countdown-element">
        <span class="time days">{{ days }}</span>
        <span class="label">кун</span>
      </div>
      <div class="countdown-element">
        <span class="time hours">{{ hours }}</span>
        <span class="label">соат</span>
      </div>
      <div class="countdown-element">
        <span class="time minutes">{{ minutes }}</span>
        <span class="label">дақиқа</span>
      </div>
      <div class="countdown-element">
        <span class="time seconds">{{ seconds }}</span>
        <span class="label">сония</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// ScrollTrigger plaginini ro'yxatdan o'tkazish
gsap.registerPlugin(ScrollTrigger);

// Countdown vaqtini hisoblash uchun to'g'ri formatda deadline kiritish
const deadline = new Date('2024-10-23T00:00:00').getTime();

// Har bir countdown elementi uchun reaktiv o'zgaruvchilar
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = deadline - now;

  days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
};

onMounted(() => {
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000); // 1 sekundda bir marta yangilash

  // GSAP ScrollTrigger orqali animatsiyani sozlash
  gsap.from(".time", {
    x: -100,              // Chapdan kelish
    opacity: 0,           // Dastlab shaffof bo'ladi
    rotation: -360,       // 360 daraja aylanadi
    duration: 1.5,        // Animatsiya davomiyligi
    rotateZ: 50,
    y: -120,
    ease: "bounce.in",   // Silliq chiqish harakati
    stagger: 0.9,         // Har bir elementning ketma-ket kelishi
    scrollTrigger: {
      trigger: ".countdown-container", // Sahifani qaysi qismida kuzatilishi kerak
      start: "top 80%",      // Sahifa scroll qilinib, bu element yuqori qismining 80% ga yetganda animatsiya boshlanadi
      end: "bottom 60%",     // Sahifaning qaysi qismi scroll qilinganda animatsiya tugaydi
      scrub: true,           // Scroll harakati davomida animatsiya real vaqt rejimida ishlaydi
      markers: false         // Animatsiya qachon boshlanayotganini ko'rsatuvchi markerlar
    }
  });

  onUnmounted(() => {
    clearInterval(interval); // Komponent o'chirilganda intervalni tozalash
  });
});
</script>

<style scoped>
.countdown-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.countdown-box {
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: #f2f4f3;
  border-radius: 8px;
}

.countdown-element {
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 80px;
}

.time {
  font-size: 72px;
  color: #05654e;
}

.label {
  display: block;
  font-size: 16px;
  margin-top: 5px;
  color: #05654e;
}
</style>
