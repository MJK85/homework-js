<template>
  <NavPanel v-if="users.length"/>
  <div v-if="users.length" class="users">
    <ul>
      <li v-for="user in users" :key="user.id">
        <UserOnList :userInfo="user"/>
      </li>
    </ul>
    <div>Loading</div>
  </div>
  <LoadingData v-else/>
</template>

<script>
import LoadingData from "@/components/LoadingData";
import UserOnList from "@/components/UserOnList";
import NavPanel from "@/components/NavPanel";

export default {
  name: "Users",
  components: {NavPanel, UserOnList, LoadingData},
  created() {
    window.addEventListener('scroll', this.handleScroll)
    this.$store.dispatch('fetchUsers')
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

      if (bottomOfWindow) {
        this.$store.dispatch('addMoreUsers')
      }
    }
  }
}
</script>

<style lang="scss">
.users {
  ul {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    transition: .2s;
    @media screen and (max-width: 1366px) {
      max-width: 900px;
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1024px) {
      max-width: 600px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  div {
    text-align: center;
    margin: 24px auto 0;
    font-size: 24px;
  }
}
</style>