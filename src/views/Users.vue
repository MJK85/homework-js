<template>
  <NavPanel v-if="users.length" @load="load"/>
  <div v-if="users.length" class="users">
    <ul>
      <li v-for="user in users" :key="user.id">
        <User :userInfo="user"/>
      </li>
    </ul>
    <div>Loading</div>
  </div>
  <LoadingData v-else/>
</template>

<script>
import LoadingData from "@/components/LoadingData";
import User from "@/components/User";
import NavPanel from "@/components/NavPanel";

export default {
  name: "Users",
  components: {NavPanel, User, LoadingData},
  data() {
    return {
      users: []
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    fetch('https://api.github.com/users?per_page=100')
        .then(res => res.json())
        .then(data => this.users = data)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    load(button) {
      if (button === 'next') {
        const id = this.users[this.users.length - 1].id
        fetch(`https://api.github.com/users?per_page=100&since=${id}`)
            .then(res => res.json())
            .then(data => this.users = [...this.users, ...data])
      }
    },
    handleScroll(e) {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

      if (bottomOfWindow) {
        this.load('next')
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
  }
  div {
    text-align: center;
    margin: 24px auto 0;
    font-size: 24px;
  }
}
</style>