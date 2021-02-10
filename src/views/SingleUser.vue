<template>
  <h2>{{ user.login }}</h2>
</template>

<script>
export default {
  name: "SingleUser",
  props: ['login'],
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    fetch(`https://api.github.com/users/${this.login}`)
        .then(res => res.json())
        .then(data => this.user = data)
        .catch(err => console.log(err))
  }
}
</script>

<style lang="scss">

</style>