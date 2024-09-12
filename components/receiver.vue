<script setup lang="ts">
const route = useNuxtApp()
</script>

<template>
{{route._route.query.inviter_name}}
</template>

<style scoped>

</style>