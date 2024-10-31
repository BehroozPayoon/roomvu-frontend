<script lang="ts" setup>
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})

const toggleTheme = () => {
  themeStore.toggleTheme()
}
</script>

<template>
  <header class="py-6">
    <div class="flex container px-4 items-center text-black dark:text-white">
      <div class="flex flex-grow">
        <button @click="toggleTheme" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <span v-if="themeStore.isDark" class="text-yellow-500">☀️</span>
          <span v-else class="text-gray-900">🌙</span>
        </button>
        <NuxtLink to="/" class="text-2xl font-bold ms-2"> RoomVue Test </NuxtLink>
      </div>

      <div class="flex items-center">
        <span>by</span>
        <img src="/images/avatar.jpeg" class="w-10 h-10 rounded-full ms-2" />
      </div>
    </div>
  </header>
</template>
