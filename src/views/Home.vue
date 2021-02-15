<template>
  <div class="home">
    <form @submit.prevent="searchRepos" class="searchForm">
      <label for="repositoryName">
        Repository name:
        <input v-model="repositoryName" type="text" id="repositoryName" required>
      </label>
      <label for="sortRepositories">
        Sort by:
        <select v-model="repositorySort" name="sort" id="sortRepositories">
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="help-wanted-issues">Help Wanted Issues</option>
          <option value="updated">Updated</option>
        </select>
      </label>
      <label for="orderRepos">
        Order:
        <select v-model="repositoryOrder" name="order" id="orderRepos">
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
      <label for="perPage">
        Per page:
        <select v-model="repositoriesPerPage" name="perPage" id="perPage">
          <option value="10">10</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <button @click="resetCriteria" class="resetButton">Reset</button>
      <input type="submit" value="SEARCH"/>
    </form>
    <div v-if="reposLength" class="repos">
      <ul>
        <li v-for="repo in repos" :key="repo.id">
          <ReposOnList :repoInfo="repo"/>
        </li>
      </ul>
    </div>
    <div v-else class="noResults">
      <h2>Nothing to show...</h2>
    </div>
    <div v-if="repos.length" class="pageNav">
      <button @click="handlePage('prev')" :disabled="page <= 1">Prev page</button>
      <span>Page: {{ page }} of {{ numberOfPages }}</span>
      <button @click="handlePage('next')" :disabled="page === numberOfPages">Next page</button>
    </div>
  </div>
</template>

<script>
import ReposOnList from "@/components/ReposOnList";

export default {
  name: "Home",
  components: {ReposOnList},
  data() {
    return {
      repositoryName: '',
      repositorySort: 'stars',
      repositoryOrder: 'desc',
      repositoriesPerPage: '10',
      page: 1
    }
  },
  computed: {
    repos() {
      return this.$store.state.repos
    },
    reposLength() {
      return this.$store.state.repos.length
    },
    numberOfPages() {
      return Math.ceil(this.$store.state.totalCount / this.repositoriesPerPage)
    }
  },
  methods: {
    searchRepos() {
      let payload = {
        name: this.repositoryName,
        sort: this.repositorySort,
        order: this.repositoryOrder,
        perPage: this.repositoriesPerPage,
        page: this.page
      }
      this.$store.dispatch('fetchRepos', payload)
    },
    handlePage(whereTo) {
      if (whereTo === 'next') {
        this.page += 1
        this.searchRepos()
      } else if (whereTo === 'prev') {
        this.page -= 1
        this.searchRepos()
      }
      window.scrollTo(0, 0)
    },
    resetCriteria() {
      this.repositoryName = ''
      this.repositorySort = 'stars'
      this.repositoryOrder = 'desc'
      this.repositoriesPerPage = '10'
      this.page = 1
      this.$store.dispatch('resetRepos')
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  background: none;
  border: 1px solid #03a8f4;
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
    background: #0330f4;
    border: 1px solid #0330f4;
    color: #fff;
  }
}

.home {
  a {
    box-shadow: 0 0 0 rgba(0, 0, 0, .5);
    transition: .2s;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 2px 12px rgba(0, 0, 0, .5);
    }
  }

  .repos {
    ul {
      max-width: 1200px;
      margin: 160px auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
      transition: .2s;
      @media screen and (max-width: 1024px) {
        max-width: 600px;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

  .searchForm, .pageNav, .noResults {
    max-width: 1200px;
    margin: 24px auto;
    display: flex;
    justify-content: space-between;

    label {
      font-size: 20px;
      display: flex;
      color: #555;
      flex-direction: column;
    }

    input, select {
      padding: 12px;
      margin-top: 12px;
      border-radius: 8px;
      border: 1px solid #000;
      font-size: 18px;
      color: #555;
    }

    button {
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      color: #555;

      &:hover {
        color: #fff;
      }
    }

    button[disabled] {
      color: rgba(16, 16, 16, .3);

      &:hover {
        background: #fff;
        color: rgba(16, 16, 16, .3);
      }
    }

    input[type='submit'], .resetButton {
      justify-content: center;
      text-align: center;
      width: 140px;
      font-size: 18px;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      border-radius: 8px;
      margin-top: 0;
      background: #42b983;
      border: 1px solid #42b983;
      color: #fff;
      cursor: pointer;
      padding: 12px 24px;
      box-shadow: 1px 1px 6px rgba(0, 0, 0, .5);
      transition: .2s;

      &:hover {
        background: #fff;
        border: 1px solid #555;
        color: #555;
      }
    }

    .resetButton {
      background: crimson;
      border: 1px solid crimson;
    }
  }

  .noResults {
    margin-top: 160px;

    h2 {
      color: #555;
    }
  }
}
</style>