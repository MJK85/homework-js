export default {
  setUsers: (state, data) => {
    state.users = data
  },
  setMoreUsers: (state, data) => {
    state.users = [...state.users, ...data]
  }
}