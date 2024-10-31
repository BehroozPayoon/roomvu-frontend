<script lang="ts" setup>
import { onMounted, nextTick, ref } from 'vue'
import { Post } from '~/data/post'
import { format } from 'date-fns'

const route = useRoute()
const { $api } = useNuxtApp()

const post = ref<Post | null>(null)

onMounted(async () => {
  await nextTick()
  const response = await $api.post.detail(route.params.id)
  post.value = response
})

const formatDate = (date) => {
  return format(date, 'MMMM d, yyyy')
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <article v-if="post" class="flex flex-col prose lg:prose-xl">
      <h2 class="text-2xl font-bold text-pink-500 mb-2">
        {{ post.title }}
      </h2>
      <p class="text-white mb-2">
        {{ formatDate(post.date) }}
      </p>
      <p class="text-white">{{ post.body }}</p>
    </article>
  </div>
</template>
