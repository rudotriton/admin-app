import React from 'react';
import styled from 'styled-components';

const UserDetailWrapper = styled.div`
  border: 1px solid #000000;
  padding: 1rem;
  margin-bottom: 1rem;
`

const UserDetail = ({ user, showUserID }) => (
  <UserDetailWrapper>
    {
      showUserID &&
      <p>ID: {user.id}</p>
    }
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    
  </UserDetailWrapper>
)

export default UserDetail;