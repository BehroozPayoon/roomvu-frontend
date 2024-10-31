<script lang="ts" setup>
import { ref } from "vue";
import { format } from "date-fns";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const formatDate = (date) => {
  return format(date, "MMMM d, yyyy");
};
</script>

<template>
  <NuxtLink :to="`/posts/${post.id}`" class="flex flex-col">
    <h2 class="text-2xl font-bold text-pink-500 mb-2">
      {{ post.title }}
    </h2>
    <p class="text-white mb-2">
      {{ formatDate(post.date) }}
    </p>
    <p class="text-white">{{ post.body.substring(0, 150) }}...</p>
  </NuxtLink>
</template>
