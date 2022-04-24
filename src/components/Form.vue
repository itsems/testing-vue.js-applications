<template>
  <form name="email-form" @submit.prevent="onSubmit">
    <input type="email" v-model="email">
    <button type="submit">Submit</button>

    <p>Enter the competition?</p>
    <input
      v-model="enterCompetition"
      value="yes"
      type="radio"
      name="enterCompetition"  
      id="yes"
    >
    <label for="yes">yes</label>
    <input
      v-model="enterCompetition"
      value="no"
      type="radio"
      name="enterCompetition"
      id="no"
    >
    <label for="no">no</label>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      enterCompetition: 'yes'
    }
  },
  methods: {
    onSubmit(event) {
      this.axios.post('http://demo7437963.mockable.io/validate', {
        email: this.email,
        enterCompetition: this.enterCompetition === 'yes'
      })
      this.$emit('form-submitted')
    }
  }
}
</script>