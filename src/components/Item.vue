<template>
  <div>
    <a :href="item.url">{{ item.title }}</a>
    {{ item.url }}
    {{ item.score }}
    {{ item.author }}

  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>