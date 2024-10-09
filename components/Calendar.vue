<template>

  <div class=" relative">
    <img src="~/assets/images/splitter-heart.png" alt="" class="mx-auto mt-6">
    <img src="~/assets/images/calendar-flower-left.svg" alt="" class="absolute z-50 left-0 top-[90px]">
    <img src="~/assets/images/calendar-flower-right.svg" alt="" class="absolute z-[50] right-0 top-0">


  </div>
  <div class="calendar-container">

    <div class="header">
      <h1 class="text-[#05654E] text-[32px]">Октябрь</h1>
    </div>
    <div class="calendar-grid">

      <div v-for="(day, index) in days" :key="index" class="day day-anim">
        <span
            :class="{

            'special-day': day === specialDay
          }"
        >
          {{ day }}
        </span>
        <img v-if="day === specialDay" class="heart-icon" src="~/assets/images/heart.png" alt="heart" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

// Oyning kunlari
const days = Array.from({ length: 31 }, (_, i) => i + 1);

// Bugungi sana
const currentDay = new Date().getDate();

// Maxsus sana
const specialDay = 23;

onMounted(() => {
  // Har bir ".day-anim" sinfli element uchun animatsiya
  gsap.from(".day-anim", {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    stagger: 0.1,
    scaleY : 2,// Har bir element ketma-ket chiqadi
    ease: "bounce",  // Elastik chiqish effekti
  });
});
</script>

<style scoped>
.calendar-container {
  max-width: 300px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;

  border-radius: 10px;
  background-color: #f2f4f3;
  position: relative;
}

.header {
  text-align: center;
  margin-bottom: 10px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  justify-items: center;
}

.day {
  position: relative;
  font-size: 16px;
  color: #05654e;
}

.current-day {
  border-bottom: 1px dashed #05654e;
  padding-bottom: 2px;
}

.special-day {
  color: #05654e;
  font-weight: bold;
}

.heart-icon {
  position: absolute;
  right: 0;
  top: 0px;
  width: 20px;
  object-fit: contain;
  height: 20px;
}
</style>
