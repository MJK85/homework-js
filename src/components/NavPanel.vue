<template>
  <div class="navPanel">
    <button @click="this.$router.push('/')">
      <span class="material-icons">menu_open</span>Go back to Home Page
    </button>
    <div>
      <button @click="handleClick('prev')">
        <span class="material-icons">arrow_back</span>Previous page
      </button>
      <button @click="handleClick('next')">
        Next page <span class="material-icons">arrow_forward</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavPanel",
  methods: {
    handleClick(button) {
      this.$emit('load', button)
    }
  }
}
</script>

<style lang="scss">
.navPanel {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 24px auto;

  > div {
    display: flex;

    button {
      margin-left: 24px;
    }
  }
}
</style>