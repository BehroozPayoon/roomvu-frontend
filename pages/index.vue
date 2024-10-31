<script lang="ts" setup>
import { onMounted, nextTick, ref } from 'vue'
import { Post } from '~/data/post'

const { $api } = useNuxtApp()

const posts = ref<Post[]>([])

onMounted(async () => {
  await nextTick()
  const response = await $api.post.list()
  posts.value = response
})
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div v-for="post in posts" :key="post.id" class="mb-8">
      <PostItem v-for="post in posts" :key="post.id" class="mb-8" :post="post" />
    </div>
  </div>
</template>
