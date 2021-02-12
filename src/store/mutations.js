export default {
  setUsers: (state, data) => {
    state.users = data
  },
  setMoreUsers: (state, data) => {
    state.users = [...state.users, ...data]
  },
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
  }
}