<template>
  <div class="errorPage">
    <h2>404</h2>
    <p>Ale wiesz, tylko że takiej strony nie ma. Może w papirusach dla dzieci, ale tak naprawdę to wiesz...</p>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style lang="scss">
.errorPage {
  display: inline-block;
  margin-top: 20vh;
  margin-left: 15vw;
  max-width: 50vw;
  p {
    font-size: 24px;
    margin-top: 12px;
  }
}
</style>