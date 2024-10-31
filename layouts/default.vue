<template>
  <div class="w-screen h-screen bg-gray-100 dark:bg-gray-800">
    <div class="max-w-3xl mx-auto min-h-screen">
      <AppHeader />
      <main class="container mx-auto px-4 py-8">
        <slot />
      </main>
    </div>
  </div>
</template>
