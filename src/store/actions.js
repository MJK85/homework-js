export default {
  fetchRepos: (context, payload) => {
    fetch(`https://api.github.com/search/repositories?q=${payload.name}+in:name&sort=${payload.sort}&order=${payload.order}&per_page=${payload.perPage}&page=${payload.page}`)
      .then(res => res.json())
      .then(data => {
        context.commit('setRepos', data)
      })
      .catch(err => console.log(err))
  },
  resetRepos: (context) => {
    context.commit('setReposReset')
  },
  saveSingleRepoAction: (context, payload) => {
    fetch(`https://api.github.com/repositories/${payload}`)
      .then(res => res.json())
      .then(data => {
        context.commit('setSingleRepo', data)
      })
      .catch(err => console.log(err))
  },
  saveSingleRepoOwner: (context, payload) => {
    fetch(`https://api.github.com/users/${payload}`)
      .then(res => res.json())
      .then(data => context.commit('setSingleRepoOwner', data))
      .catch(err => console.log(err))
  },
  saveSingleRepoContributors: (context, payload) => {
    fetch(`https://api.github.com/repos/${payload.owner}/${payload.name}/contributors`)
      .then(res => res.json())
      .then(data => {
        context.commit('setSingleRepoContributors', data)
      })
      .catch(err => console.log(err))
  },
  saveSingleRepoCommits: (context, payload) => {
    fetch(`https://api.github.com/repositories/${payload}/commits`)
      .then(res => res.json())
      .then(data => context.commit('setSingleRepoCommits', data))
      .catch(err => console.log(err))
  },
  saveSingleUser: (context, payload) => {
    fetch(`https://api.github.com/users/${payload}`)
      .then(res => res.json())
      .then(data => context.commit('setSingleUser', data))
      .catch(err => console.log(err))
  }
}