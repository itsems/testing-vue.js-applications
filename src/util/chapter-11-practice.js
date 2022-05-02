export const testMixin = {
  beforeMount() {
    this.myMethod()
  }
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}