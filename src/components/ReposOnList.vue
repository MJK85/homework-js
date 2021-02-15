<template>
  <RouterLink :to="{name: 'SingleRepo', params: { id: repoInfo.id, owner: repoInfo.owner.login, name: repoInfo.name  }}" class="repo">
    <div class="clickWrapper">
      <img :src="repoInfo.owner.avatar_url" :alt="repoInfo.owner.login">
      <div>
        <h2><span>ID: {{ repoInfo.id }}</span><span>Owner: {{ repoInfo.owner.login }}</span></h2>
        <p>{{ repoInfo.name.length < 20 ? repoInfo.name : `${repoInfo.name.slice(0, 20)}...` }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: "RepoOnList",
  props: ['repoInfo']
}
</script>

<style lang="scss">
.repo {
  display: block;
  border-radius: 8px;
  .clickWrapper {
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, .5);
    border-radius: 8px;
    padding-right: 18px;
    overflow: hidden;

    img {
      height: 120px;
      width: 120px;
      margin-right: 18px;
    }

    h2 {
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      color: #555;
    }

    p {
      font-size: 32px;
      color: #000;
    }

    div {
      width: 100%;
    }
  }
}
</style>