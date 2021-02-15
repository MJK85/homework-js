export default {
  setRepos: (state, data) => {
    state.totalCount = data.total_count
    state.repos = data.items
  },
  setReposReset: state => {
    state.repos = []
    state.totalCount = ''
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
  }
}