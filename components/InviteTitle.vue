<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
const route = useRoute()

// Harflarni ajratish funksiyasi
const splitText = (textElement: HTMLElement) => {
  const text = textElement.innerHTML;
  textElement.innerHTML = text.split('').map((char) => `<span class="letter">${char}</span>`).join('');
};

onMounted(() => {
  const ozodxon = document.querySelector('.ozodxon') as HTMLElement;
  const fazoda = document.querySelector('.fazoda') as HTMLElement;

  if (ozodxon && fazoda) {
    // Matnni harflarga ajratish
    splitText(ozodxon);
    splitText(fazoda);

    // Har bir harf uchun GSAP animatsiyasi
    gsap.from('.letter', {
      y: -100,
      opacity: 0,
      duration: 1,
      delay : 1,
      stagger: 0.1, // Har bir harfni 50ms interval bilan tushirish
      ease: 'bounce.in',
    });
  }
});
</script>

<template>
  <div class="yekatirina pt-20 relative px-5 text-[#05654E] ">
    <h1 class="text-[70px] ozodxon">Озодхон</h1>
    <h2 class="text-[60px] font-normal text-center relative top-[-25px]">&</h2>
    <h1 class="text-[70px] text-center relative  fazoda">Фазода</h1>

    <div class="flex justify-center my-[20px]">
      <img src="~/assets/images/list.svg" alt="">
    </div>
  </div>

  <div class="title text-center text-[#05654E] mt-2 font-[500] px-3">
    <p>Азиз {{route.query.message}} қариндошлар ва дўстлар! Биз сизга тўйимиз ҳақида хабар беришдан мамнунмиз, биз учун бу муҳим кунни сиз
      билан баҳам кўришдан хурсанд бўламиз</p>
  </div>
</template>

<style scoped lang="scss">
.letter {
  display: inline-block;
}
</style>
