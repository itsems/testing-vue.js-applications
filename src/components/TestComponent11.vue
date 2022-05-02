<template>
  <div>{{ name | uppercase }}</div>
</template>
<script>
export default {
  props: ['name']
}
</script>