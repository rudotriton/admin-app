import React from 'react';
import UserDetail from './UserDetail';
import filterUsers from '../selectors/users';

class UserList extends React.Component {
  state = {
    isLoading: true,
    error: false,
    users: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then(data => {
        this.setState({
          users: data,
          isLoading: false
        })
      })
      .catch(() => this.setState({ error: true }));
  }
  render() {
    const { isLoading, error } = this.state;
    const { showUserID } = this.props;

    if (isLoading) {
      return (
        <div>...Loading...</div>
      )
    }
    if (error) {
      return (
        <div>An error has occurred.</div>
      )

    }
    return (
      <div>
        {
          filterUsers(this.state.users, this.props.filter).map(user => 
            <UserDetail 
              key={user.id}
              user={user}
              showUserID={showUserID}
            />
          )
        }
      </div>
    )
  }
}

export default UserList;