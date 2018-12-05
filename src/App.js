import React, { Component } from 'react';
import Page from './components/Page';
import styled from 'styled-components';

const AppWrapper = styled.div`
  padding: 2rem;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Page>
        </Page>
      </AppWrapper>
    );
  }
}

export default App;
