// function that takes an array of users and and object which has a key named 'text', then filters the array and returns every yser that has in their name the value of 'text'
export default (users, { text }) => {
  return users
    .filter(user => {
      return user.name
        .toLowerCase()
        .includes(text.toLowerCase())
    }
  )
}