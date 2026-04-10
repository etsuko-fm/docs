<template>
  <a :href="href" @click.prevent="navigate"><slot /></a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>()
const navigate = (e: MouseEvent) => {
  window.location.href = (e.currentTarget as HTMLAnchorElement).href
}
</script>
