<script setup lang="ts">
import { encryptMessage, decryptMessage } from '~/utils/crypto';
const route = useNuxtApp()
import  gsap from "gsap";
onMounted(()=>{
  gsap.from('.pigeon', { opacity: 0, duration: 1.9, ease : 'elastic.inOut' });
})

/// Maxfiy kalit
const secretKey = 'your-secret-key'; // Bu kalit shifrlash va deshifrlash uchun ishlatiladi

// Ref-larni yaratamiz
const encryptedMessage = ref('');  // Shifrlangan xabar
const decryptedMessage = ref('');  // Deshifrlangan xabar

// URL'dan xabarni olish va avtomatik ravishda shifrlash
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get('message');

  if (message && !message.startsWith('U2FsdGVkX1')) {  // Xabar hali shifrlanmagan bo'lsa
    // Xabarni shifrlash
    encryptedMessage.value = encryptMessage(message, secretKey);

    // URL'ni yangilash
    const newUrl = `${window.location.origin}${window.location.pathname}?message=${encodeURIComponent(encryptedMessage.value)}`;
    window.history.replaceState(null, '', newUrl);  // URL'ni almashtirish, sahifani qayta yuklamaydi

    // Deshifrlash
    decryptedMessage.value = message;  // Bu oddiy xabar, chunki hali shifrlanmagan edi
  } else if (message) {  // Agar xabar allaqachon shifrlangan bo'lsa
    // Xabarni deshifrlash
    decryptedMessage.value = decryptMessage(message, secretKey);
    encryptedMessage.value = message;  // Shifrlangan xabarni UI da ko'rsatamiz
  }
});
</script>

<template>

  <p v-if="encryptedMessage">Shifrlangan URL xabari: {{ encryptedMessage }}</p>
  <p v-if="decryptedMessage">Deshifrlangan xabar: {{ decryptedMessage }}</p>
<section>
<!--  <video class="h-[500px] pigeon object-cover" src="~/assets/videos/wedding.mp4" muted autoplay loop  />-->
<div class="w-full h-[450px] relative z-40 top-[-450px]  gradient-block">
<div class="text-center capitalize text-[40px]">
  <h1>Salom</h1>

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