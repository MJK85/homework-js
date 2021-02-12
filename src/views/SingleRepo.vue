<template>
  <NavPanel/>
  <main class="singleRepoCard">
    <section class="name">
      <h2>{{ singleRepo.name }}</h2>
      <p>{{ singleRepo.full_name }}</p>
      <p><span>{{ singleRepo.id }}</span></p>
    </section>
    <h4>Owner</h4>
    <section class="owner">
      <img :src="singleRepo.owner.avatar_url" alt="Owner picture">
      <h3>Profile Name: {{ singleRepo.owner.login }}</h3>
      <p>ID: {{ singleRepo.owner.id }}</p>
      <p>GitHub url: {{ singleRepo.owner.html_url }}</p>
    </section>
    <h4>Details</h4>
    <section class="additionalInfo">
      <h4>HTML URL:</h4>
      <p>{{ singleRepo.html_url }}</p>
      <h4>Language:</h4>
      <p>{{ singleRepo.language }}</p>
      <h4>Default Branch:</h4>
      <p>{{ singleRepo.default_branch }}</p>
    </section>
    <h4>Commits</h4>
    <section class="commits">
      <div v-for="commit in commits" :key="commit.sha" class="singleCommitCard">
        <h4>sha:</h4>
        <p>{{commit.sha}}</p>
        <h4>Author:</h4>
        <p>{{commit.commit.author.name}}</p>
        <h4>Commiter:</h4>
        <p>{{commit.commit.committer.name}}</p>
        <h4>Message:</h4>
        <p>{{commit.commit.message}}</p>
        <h4>Url:</h4>
        <p>{{commit.html_url}}</p>
      </div>
    </section>
    <h4>Contributors</h4>
    <section class="contributors">
      <div v-for="contributor in contributors" :key="contributor.login">
        <img :src="contributor.avatar_url" alt="Contributor avatar">
        {{ contributor.login }}
      </div>
    </section>
  </main>
</template>

<script>
import NavPanel from "@/components/NavPanel";

export default {
  name: "SingleRepo",
  components: {NavPanel},
  props: ['id'],
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
  width: 100%;
  background: #e0e0e0;

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
  }
}
</style>