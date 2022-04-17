<template>
  <div>
    <child testProp="asdf" />
    <a href="https://google.com">Link</a>
    <p style="color: tomato">Hey</p>
  </div>
</template>
<script>
import Child from './Child.vue'

export default {
  components: { Child }
}
</script>
