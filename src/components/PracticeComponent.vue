<script >
export default {
  beforeMount() {
    this.injectedMethod(this.$route.path)
  }
}
</script>