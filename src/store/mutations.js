export default {
  setRepos: (state, data) => {
    state.totalCount = data.total_count
    state.repos = data.items
  },
  setReposReset: state => {
    state.repos = []
    state.totalCount = ''
    state.formRepoName = ''
    state.formSort = 'stars'
    state.formOrder = 'desc'
    state.formPerPage = '10'
    state.formPage = 1
  },
  setSingleRepo: (state, data) => {
    state.singleRepo = data
  },
  setSingleRepoOwner: (state, data) => {
    state.singleRepoOwner = data
  },
  setSingleRepoContributors: (state, data) => {
    state.singleRepoContributors = data
  },
  setSingleRepoCommits: (state, data) => {
    state.singleRepoCommits = data
  },
  setSingleUser: (state, data) => {
    state.singleUser = data
  },
  setFormRepoName: (state, data) => {
    state.formRepoName = data
  },
  setFormPage: (state, data) => {
    state.formPage = data
  },
  setFormSort: (state, data) => {
    state.formSort = data
  },
  setFormOrder: (state, data) => {
    state.formOrder = data
  },
  setFormPerPage: (state, data) => {
    state.formPerPage = data
  }
}