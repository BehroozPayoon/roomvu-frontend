<template>
  <div class="w-screen h-screen">
    <div class="w-full md:max-w-3xl mx-auto">
      <AppHeader />
      <main class="container mx-auto px-4 py-8">
        <slot />
      </main>
    </div>
  </div>
</template>
