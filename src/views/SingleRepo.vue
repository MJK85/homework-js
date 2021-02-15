<template>
  <main class="singleRepoCard">
    <NavPanel/>
    <section class="name">
      <h2>{{ singleRepo.name }}</h2>
      <p>Full name: {{ singleRepo.full_name }}</p>
      <p>Repository ID: {{ singleRepo.id }}</p>
    </section>
    <h4>Owner</h4>
<!--    <section class="owner">-->
<!--      <img :src="singleRepo.owner.avatar_url" alt="Owner picture">-->
<!--      <div>-->
<!--        <h3> {{ singleRepo.owner.login }}</h3>-->
<!--        <p>Profile ID: {{ singleRepo.owner.id }}</p>-->
<!--        <p>GitHub url: {{ singleRepo.owner.html_url }}</p>-->
<!--      </div>-->
<!--    </section>-->
    <h4>Details</h4>
    <section class="additionalInfo">
      <div>
        <h4>HTML URL:</h4>
        <p>{{ singleRepo.html_url }}</p>
      </div>
      <div>
        <h4>Language:</h4>
        <p>{{ singleRepo.language }}</p>
      </div>
      <div>
        <h4>Default Branch:</h4>
        <p>{{ singleRepo.default_branch }}</p>
      </div>
    </section>
    <h4>Commits</h4>
    <section class="commits">
      <div v-for="commit in commits" :key="commit.sha" class="singleCommitCard">
        <h4>sha:</h4>
        <p>{{ commit.sha }}</p>
        <h4>Author:</h4>
        <p>{{ commit.commit.author.name }}</p>
        <h4>Commiter:</h4>
        <p>{{ commit.commit.committer.name }}</p>
        <h4>Message:</h4>
        <p>{{ commit.commit.message }}</p>
        <h4>Url:</h4>
        <p>{{ commit.html_url }}</p>
      </div>
    </section>
    <h4>Contributors</h4>
    <section class="contributors">
      <RouterLink v-for="contributor in contributors" :key="contributor.login"
                  :to="{name: 'SingleUser', params: {login: contributor.login}}" class="pill">
        <div>
          <img :src="contributor.avatar_url" alt="Contributor avatar">
          <p>{{ contributor.login }}</p>
        </div>
      </RouterLink>
    </section>
  </main>
</template>

<script>
import NavPanel from "@/components/NavPanel";

export default {
  name: "SingleRepo",
  components: {NavPanel},
  props: ['id', 'owner', 'name'],
  created() {

    let payload = {
      id: this.id,
      name: this.name,
      owner: this.owner
    }

    this.$store.dispatch('saveSingleRepoAction', payload)
    this.$store.dispatch('saveSingleRepoContributors', payload)
    this.$store.dispatch('saveSingleRepoCommits', payload)
  },
  computed: {
    singleRepo() {
      return this.$store.state.singleRepo
    },
    contributors() {
      return this.$store.state.singleRepoContributors
    },
    commits() {
      return this.$store.state.singleRepoCommits
    }
  }
}
</script>

<style lang="scss">
.singleRepoCard {
  padding: 24px 0;
  width: 100%;
  background: #d7d7d7;

  > h4 {
    max-width: 1200px;
    margin: 60px auto 0;
  }

  section {
    background: #fff;
    max-width: 1200px;
    margin: 24px auto;
    border-radius: 8px;
    padding: 24px;

    h4 {
      font-size: 16px;
      color: #555;
    }

    p {
      font-size: 14px;
    }

    &.owner {
      display: flex;

      img {
        width: 156px;
        height: 156px;
        margin-right: 28px;
      }
    }

    &.additionalInfo {
      display: flex;

      div {
        width: 30%;
      }
    }

    &.contributors {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .pill {
        padding: 2px;
        border: 1px solid #555;
        width: 20%;
        border-radius: 30px;
        margin: 24px;


        > div {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          margin-right: 12px;
        }

        img {
          width: 54px;
          height: 54px;
          border-radius: 50%;
        }

        p {
          font-size: 14px;
          margin: 0 12px;
        }
      }
    }
  }
}
</style>