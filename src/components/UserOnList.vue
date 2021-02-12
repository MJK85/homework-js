<template>
<RouterLink :to="{name: 'SingleUser', params: {login: userInfo.login}}" class="user">
  <img :src="userInfo.avatar_url" alt="User picture">
  <h2>{{ userInfo.login }}</h2>
</RouterLink>
</template>

<script>
export default {
  name: "UserOnList",
  props: ['userInfo']
}
</script>

<style lang="scss">
.user {
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 6px rgba(0,0,0,.5);
  img {
    height: 120px;
    width: 120px;
    margin-right: 24px;
  }
  h2 {
    font-size: 16px;
  }
}
</style>