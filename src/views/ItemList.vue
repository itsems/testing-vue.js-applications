<template>
  <div class="item-list">
    <item v-for="item in $store.getters.displayItems" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Item from "../components/Item.vue";

export default {
  components: {
    Item,
  },
  beforeMount() {
    this.loadItmes();
  },
  data() {
    return {
    };
  },
  methods: {
   loadItmes () {
     this.$bar.start();
     
   } 
  }
};
</script>
