<template>
  <div class="singleUserPage">
    <div class="singleUserCard">
      <div class="pictureWrapper">
        <img :src="singleUser.avatar_url" :alt="singleUser.login + ' user avatar picture'">
      </div>
      <h2>{{ singleUser.login }}</h2>
      <h4>User ID:</h4>
      <p>{{ singleUser.id }}</p>
      <h4>User GitHub HTML page:</h4>
      <p><a :href="singleUser.html_url" target="_blank">{{ singleUser.html_url }}</a></p>
      <h4>Company:</h4>
      <p>{{ singleUser.company ? singleUser.company : 'Not available' }}</p>
      <h4>Blog:</h4>
      <p>{{ singleUser.blog ? singleUser.blog : 'Not available' }}</p>
      <h4>Location:</h4>
      <p>{{ singleUser.location ? singleUser.location : 'Not available' }}</p>
      <h4>Email:</h4>
      <p>{{ singleUser.email ? singleUser.email : 'Not available' }}</p>
      <h4>Hireable:</h4>
      <p>{{ singleUser.hireable ? 'Yes' : 'No' }}</p>
      <h4>Bio:</h4>
      <p>{{ singleUser.bio ? singleUser.bio : 'Not available' }}</p>
      <h4>Twitter:</h4>
      <p>{{ singleUser.twitter_username ? singleUser.twitter_username : 'Not available' }}</p>
      <h4>Created at:</h4>
      <p>{{ singleUser.created_at }}</p>
      <h4>Updated at:</h4>
      <p>{{ singleUser.updated_at }}</p>
      <button @click="$router.go(-1)"><span class="material-icons">arrow_back_ios</span>Go back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleUser",
  props: ['login'],
  mounted() {
    this.$store.dispatch('saveSingleUser', this.login)
  },
  computed: {
    singleUser() {
      return this.$store.state.singleUser
    }
  }
}
</script>

<style lang="scss">
.singleUserPage {
  width: 100%;
  height: 100vh;
  background: var(--SingleUserAndRepoBackgroundColor);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 540px) {
    height: auto;
    padding: 100px 20px 50px;
  }

  .singleUserCard {
    min-width: 450px;
    max-width: 800px;
    padding: 78px 24px 24px;
    display: block;
    border-radius: 20px;
    margin: 0 auto;
    background: #fff;
    position: relative;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, .5);
    @media screen and (max-width: 540px) {
      min-width: 300px;
      max-width: 350px;
    }

    h2 {
      text-align: center;
      font-size: 48px;
      margin: 18px 0;
    }

    h4 {
      font-size: 14px;
      color: var(--TextGreyColor);
      margin: 8px 0;
    }

    .pictureWrapper {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(33, 150, 243, 1);
      @media screen and (max-width: 540px) {
        width: 120px;
        height: 120px;
        top: -60px;
      }

      img {
        height: 178px;
        width: 178px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 6px 6px 10px rgba(0, 0, 0, .5);
        @media screen and (max-width: 540px) {
          width: 105px;
          height: 105px;
        }
      }
    }


    p, a {
      font-size: 16px;
      color: #000;
    }

    a {
      &:hover {
        box-shadow: none;
        color: var(--TextGreyColor);
        transform: none;
      }
    }

    button {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 24px auto 0;
      font-size: 18px;
      line-height: 18px;
      @media screen and (max-width: 540px) {
        width: 80%;
      }
    }
  }
}
</style>