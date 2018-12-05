import React from 'react';
import Header from './Header';
import Options from './Options';
import UserList from  './UserList';

class Page extends React.Component {
  state = {
    showUserID: false,
    filter: {
      text: ''
    }
  }
  showUserIDHandler = () => {
    this.setState(prevState => ({
      showUserID: !prevState.showUserID
    }))
  }
  onTextChange = e => {
    const textFilter = e.target.value;
    this.setState({
      filter: {
        text: textFilter
      }
    })
  }
  render() {
    return (
      <>
        <Header />
        <Options 
          showUserIDHandler={this.showUserIDHandler}
          onTextChange={this.onTextChange}
          filter={this.state.filter}
        />
        <UserList
          showUserID={this.state.showUserID}
          filter={this.state.filter}  
        />
      </>
    );
  };
}

export default Page;