<template>
  <div>
    <a :href="item.url">{{ item.title }}</a>
    <span class="host">
      {{ item.url | host }}
    </span>
    <span class="score">{{ item.score }}</span>
    {{ item.author }}
    {{ item.time | timeAgo }} ago
    <span v-if="item.type !== 'job'" class="by">
      type is not 'job'
    </span>
      
      
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>