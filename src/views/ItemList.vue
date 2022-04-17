<template>
  <div class="item-list">
    <item v-for="item in displayItems" :key="item.id" />
  </div>
</template>

<script>
import Item from '../components/Item.vue'
// import api from '../api/api'

export default {
  components: {
    Item
  },
  data () {
    return {
      displayItems: window.items
    }
  }
}
</script>
