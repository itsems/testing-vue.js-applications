<template>
  <div>
     <slot />
    <button
      @click="$emit('close-modal')"
    >close modal</button>
  </div>
</template>
<script>

</script>
