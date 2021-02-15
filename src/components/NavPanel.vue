<template>
  <div class="navPanel">
    <button @click="this.$router.push('/')">
      <span class="material-icons">menu_open</span>Go back to Home Page
    </button>
  </div>
</template>

<script>
export default {
  name: "NavPanel",
}
</script>

<style lang="scss">
.navPanel {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 24px auto;

  button {
    background: #fff;
    &:hover {
      background: #0330f4;
      color: #fff;
    }
  }
}
</style>