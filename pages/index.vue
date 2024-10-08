<script setup lang="ts">
import WeddingLoader from "~/components/wedding-loader.vue";
import home from '~/components/Home.vue'
import Calendar from "~/components/Calendar.vue";

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 6500)
})
</script>

<template>

  <section v-if='loading' class="overflow-hidden">
    <wedding-loader/>
  </section>

  <Transition name="fade" mode="in-out">
    <section v-if='!loading'>
      <home/>
      <invite-title/>
      <Calendar/>
      <Sunnah/>
      <Time/>
      <Location/>
    </section>
  </Transition>

</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.videos {
  background: #D2D2D2;
}
</style>