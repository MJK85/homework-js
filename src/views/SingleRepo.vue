<template>

</template>

<script>
export default {
  name: "SingleRepo",
  props: ['id'],
  data() {
    return {
      contributors: []
    }
  },
  computed: {
    singleRepo() {
      return this.$store.state.singleRepo
    }
  },
  mounted() {
    // fetch(`https://api.github.com/repos/${this.owner}/${this.name}/contributors`)
    //     .then(res => res.json())
    //     .then(data => this.contributors = data)
  }
}
</script>

<style lang="scss">

</style>