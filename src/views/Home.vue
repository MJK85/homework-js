<template>
  <div class="home">
    <nav class="navButtons">
      <router-link :to="{name: 'Repos'}">Repos</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  box-shadow: 0 0 0 rgba(0, 0, 0, .5);
  transition: .2s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 2px 12px rgba(0, 0, 0, .5);
  }
}

button {
  background: none;
  border: 1px solid #42b983;
  border-radius: 4px;
  padding: 12px 24px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, .5);
  transition: .2s;

  &:hover {
    background: #42b983;
    color: #fff;
  }
}

.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: inline-block;
    height: 15vw;
    width: 25vw;
    margin: 0 40px;
    text-align: center;
    line-height: 15vw;
    border: 1px solid #42b983;
    border-radius: 8px;
    text-transform: uppercase;
    color: #555;
  }
}
</style>