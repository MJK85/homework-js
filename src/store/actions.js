export default {
  fetchUsers: (context) => {
    return fetch('https://api.github.com/users?per_page=100')
      .then(res => res.json())
      .then(data => {
        context.commit('setUsers', data)
        return context.state.users
      })
  },
  addMoreUsers: (context) => {
    let id = context.state.users[context.state.users.length - 1].id
    fetch(`https://api.github.com/users?per_page=100&since=${id}`)
      .then(res => res.json())
      .then(data => context.commit('setMoreUsers', data)
      )
  },
  fetchRepos: (context, payload) => {
    fetch(`https://api.github.com/search/repositories?q=${payload.name}+in:name&sort=${payload.sort}&order=${payload.order}&per_page=${payload.perPage}&page=${payload.page}`)
      .then(res => res.json())
      .then(data => {
        context.commit('setRepos', data)
      })
  },
  resetRepos: (context) => {
    context.commit('setReposReset')
  },
  saveSingleRepoAction: (context, payload) => {
    context.commit('setSingleRepo', payload)
  }
}