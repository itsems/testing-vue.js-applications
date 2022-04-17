<template>
  <div>
    <a href="">{{ item.title }}</a>
    {{ item.url }}
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>