<template>
  <div class="item-list">
    <item v-for="item in displayItems" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import { fetchListData } from "../api/api";

export default {
  components: {
    Item,
  },
  beforeMount() {
    this.loadItmes();
  },
  data() {
    return {
      displayItems: [],
    };
  },
  methods: {
   loadItmes () {
     this.$bar.start();
     fetchListData('top')
      .then(items => {
        this.displayItems = items
        this.$bar.finish();
      })
      .catch(() => this.$bar.fail())
   } 
  }
};
</script>
