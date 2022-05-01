<template>
  <div class="item-list-view">
    <div class="item-list-nav">
      <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">
        &lt; prev
      </router-link>
      <a v-else>&lt; prev</a>

      <span>{{ page || 1 }}/{{ maxPage }}</span>

      <router-link
        v-if="(page || 1) < maxPage"
        :to="'/' + type + '/' + ((Number(page) || 1) + 1)"
      >
        more &gt;
      </router-link>
      <a v-else>more &gt;</a>

    </div>
      <div class="item-list">
        <item
          v-for="item in $store.getters.displayItems"
          :key="item.id"
          :item="item"
        />
      </div>
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
  computed: {
    type() {
      return this.$route.params.type;
    },
    page() {
      return this.$route.params.page;
    },
    maxPage() {
      return this.$store.getters.maxPage;
    },
  },
  data() {
    return {};
  },
  methods: {
    loadItems() {
      this.$bar.start();
      this.$store
        .dispatch("fetchListData", {
          type: this.$route.params.type,
        })
        .then((items) => {
          if (this.$route.params.page > this.$store.getters.maxPage) {
            this.$router.replace(`/${this.$route.params.type}/1`);
            return;
          }
          // this.displayItems = items
          this.$bar.finish();
        })
        .catch(() => {
          this.$bar.fail();
        });
    },
  },
};
</script>
