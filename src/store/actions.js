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
  }
}