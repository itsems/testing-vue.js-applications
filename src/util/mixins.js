export const titleMixin = {
  mounted() {
    const title = this.$options.title;
    if (title) {
      document.title = `Vue HN | ${title}`
    }
  }
}