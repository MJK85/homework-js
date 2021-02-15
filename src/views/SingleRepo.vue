<template>
  <main class="singleRepoCard">
    <NavPanel/>
    <section class="name">
      <h2>{{ singleRepo.name }}</h2>
      <p>Full name: {{ singleRepo.full_name }}</p>
      <p>Repository ID: {{ singleRepo.id }}</p>
    </section>
    <h4>Owner</h4>
    <section class="owner">
      <img :src="singleRepoOwner.avatar_url" alt="Owner picture">
      <div>
        <h3>{{ singleRepoOwner.login }}</h3>
        <h4>Profile ID:</h4>
        <p>{{ singleRepoOwner.id }}</p>
        <h4>GitHub url:</h4>
        <a :href="singleRepoOwner.html_url" target="_blank">{{ singleRepoOwner.html_url }}</a>
      </div>
    </section>
    <h4>Details</h4>
    <section class="additionalInfo">
      <div>
        <h4>HTML URL:</h4>
        <a :href="singleRepo.html_url" target="_blank">{{ singleRepo.html_url }}</a>
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
        <div>
          <div>
            <h4>sha:</h4>
            <p>{{ commit.sha }}</p>
          </div>
          <div>
            <h4>Author:</h4>
            <p>{{ commit.commit.author.name }}</p>
          </div>
          <div>
            <h4>Commiter:</h4>
            <p>{{ commit.commit.committer.name }}</p>
          </div>
        </div>
        <div>
          <h4>Message:</h4>
          <p>{{ commit.commit.message }}</p>
        </div>
        <div>
          <h4>Url:</h4>
          <a :href="commit.html_url" target="_blank">{{ commit.html_url }}</a>
        </div>
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
    if (this.owner) {
      let payload = {
        id: this.id,
        name: this.name,
        owner: this.owner
      }

      this.$store.dispatch('saveSingleRepoAction', payload.id)
      this.$store.dispatch('saveSingleRepoOwner', payload.owner)
      this.$store.dispatch('saveSingleRepoContributors', payload)
      this.$store.dispatch('saveSingleRepoCommits', payload.id)
    }
  },
  computed: {
    singleRepo() {
      return this.$store.state.singleRepo
    },
    singleRepoOwner() {
      return this.$store.state.singleRepoOwner
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
  padding: 24px;
  width: 100%;
  background: #03a9f4;

  > h4 {
    max-width: 1200px;
    margin: 60px auto 0;
    color: #fff;
  }

  a {
    font-size: 14px;
    color: #000;
    display: block;
    overflow: hidden;

    &:hover {
      box-shadow: none;
      color: #555;
      transform: none;
    }
  }

  section {
    background: #fff;
    max-width: 1200px;
    margin: 24px auto;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 1px 1px 12px rgba(0, 0, 0, .5);

    h4 {
      font-size: 16px;
      color: #555;
    }

    p {
      font-size: 14px;
    }

    &.owner {
      display: flex;
      @media screen and (max-width: 540px) {
        flex-direction: column;
        h3 {
          font-size: 24px;
        }
        h3, p {
          margin-bottom: 8px;
        }
      }

      img {
        width: 156px;
        height: 156px;
        margin-right: 28px;
      }
    }

    &.additionalInfo {
      display: flex;
      @media screen and (max-width: 540px) {
        flex-direction: column;
      }

      div {
        margin-right: 48px;
        @media screen and (max-width: 540px) {
          margin-right: 0;
          margin-bottom: 12px;
          h4 {
            margin-bottom: 8px;
          }
        }
      }
    }

    &.commits {
      .singleCommitCard {
        border-bottom: 1px solid #d7d7d7;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;

        > div {
          margin: 12px 0;

          &:first-of-type {
            display: flex;

            > div {
              width: 30%;
              margin-right: 20px;
              @media screen and(max-width: 1024px) {
                margin-right: 0;
                margin-bottom: 12px;
                &:first-of-type {
                  p {
                    font-size: 12px;
                  }
                }
              }
            }

            @media screen and (max-width: 1024px) {
              flex-direction: column;
            }
          }
        }

        h4 {
          margin-bottom: 8px;
        }

        &:last-of-type {
          border: none;
        }
      }
    }

    &.contributors {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;

      .pill {
        padding: 2px;
        border: 1px solid #555;
        width: 20%;
        border-radius: 30px;
        margin: 24px;
        transition: .2s;

        &:hover {
          transform: translateY(-6px);
          box-shadow: 0 2px 12px rgba(0, 0, 0, .5);
        }

        @media screen and (max-width: 768px) {
          width: 25%;
          margin: 12px;
        }
        @media screen and (max-width: 540px) {
          width: 100%;
          margin: 12px;
        }


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