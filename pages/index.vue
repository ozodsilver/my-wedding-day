<script setup lang="ts">
import WeddingLoader from "~/components/wedding-loader.vue";
import brideAndGroom from '~/components/bridge-and-groom/bride-and-groom.vue'

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 5500)
})
</script>

<template>

  <section v-if='loading' class="overflow-hidden">
    <wedding-loader/>
  </section>

  <section v-else>
    <bride-and-groom/>
  </section>

</template>

<style scoped lang="scss">

</style>