export default (users, { text }) => {
  return users
    .filter(user => {
      return user.name
        .toLowerCase()
        .includes(text.toLowerCase())
    }
  )
}