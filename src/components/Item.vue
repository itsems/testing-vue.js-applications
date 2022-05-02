<template>
  <div>
    <a :href="item.url">{{ item.title }}</a>
    <span class="host">
      {{ item.url | host }}
    </span>
    {{ item.score }}
    {{ item.author }}
    {{ item.time | timeAgo }} ago

  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>