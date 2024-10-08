<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();

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
      delay: 1,
      stagger: 0.1, // Har bir harfni 50ms interval bilan tushirish
      ease: 'bounce.in',
    });
  }

  const leftFinger = document.querySelector('.left-fingers') as HTMLElement
  const rightFinger = document.querySelector('.right-fingers') as HTMLElement

  if(leftFinger && rightFinger){
    // ScrollTrigger bilan finger rasmlarini harakatlantirish
    gsap.fromTo('.left-fingerss', {
      x: '-150%',  // Begin far off-screen to the left
    }, {
      x: '40%',     // Animate to its normal position
      scrollTrigger: {
        trigger: '.border',    // ScrollTrigger boshlanish nuqtasi
        start: 'top bottom',   // When the top of .border hits the bottom of the viewport
        end: 'top 180px',      // End when it's 100px from the top
        scrub: true,           // Smoothly animate in sync with scroll
      }
    });

    gsap.fromTo('.right-fingerss', {
      x: '150%',   // Begin far off-screen to the right
    }, {
      x: '-40%',     // Animate to its normal position
      scrollTrigger: {
        trigger: '.border',    // ScrollTrigger boshlanish nuqtasi
        start: 'top bottom',   // When the top of .border hits the bottom of the viewport
        end: 'top 100px',      // End when it's 100px from the top
        scrub: true,           // Smoothly animate in sync with scroll
      }
    });
  }

});
</script>

<template>
  <div class="yekatirina pt-20 relative text-[#05654E]">
    <div class="px-5">
      <h1 class="text-[70px] ozodxon">Озодхон</h1>
      <h2 class="text-[60px] font-normal text-center relative top-[-25px]">&</h2>
      <h1 class="text-[70px] text-center relative fazoda">Фазода</h1>
    </div>

    <div class="border flex relative items-center mt-[100px] h-[200px]">
      <img src="~/assets/images/left-fingers.png" class="w-[150px] absolute left-0 left-fingerss" alt="">
      <img src="~/assets/images/right-fingers.png" class="w-[150px] absolute right-0 top-[50px] right-fingerss" alt="">
    </div>

    <div class="flex justify-center my-[20px]">
      <img src="~/assets/images/list.svg" alt="">
    </div>
  </div>

  <div class="title text-center text-[#05654E] mt-2 font-[500] px-3">
    <p>Азиз {{route.query.message}} қариндошлар ва дўстлар! Биз сизга тўйимиз ҳақида хабар беришдан мамнунмиз, биз учун бу муҳим кунни сиз билан баҳам кўришдан хурсанд бўламиз</p>
  </div>
</template>

<style scoped lang="scss">
.left-fingers,
.right-fingers {
  position: absolute;
}

.left-fingers {
  left: 0;
}

.right-fingers {
  right: 0;
}

.letter {
  display: inline-block;
}
</style>
