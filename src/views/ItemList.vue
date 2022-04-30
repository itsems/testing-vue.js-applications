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
    this.loadItems();
  },
  data() {
    return {
    };
  },
  methods: {
   loadItems() {
      this.$bar.start()
      this.$store.dispatch('fetchListData', {
        type: 'top'
      })
        .then(items => {
          this.displayItems = items
          this.$bar.finish()
        })
        .catch(() => {
          this.$bar.fail()
        })
    }
  }
};
</script>
