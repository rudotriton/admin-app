import React from 'react';
import styled from 'styled-components';

const OptionsWrapper = styled.div`
  margin: 1rem auto;
  width: min-content;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  width: max-content;
  margin: 0 auto;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 1rem;
  cursor: pointer;
  user-select: none;

  &:hover input + span {
    background-color: #ccc;
  }
  & input:checked + span {
    background-color: #2196F3;
  }
  & input:checked + span:after {
    display: block;
  }
  & span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const FilterField = styled.input`
  font-size: 22px;
  outline: none;
  margin: 1rem;
  border: none;
  border-bottom: 2px solid #000;

  &:focus {
    border-bottom: 2px solid crimson;
  }
`;

const Options = (props) => (
  <OptionsWrapper>
    <StyledLabel htmlFor="showUserID">Show user ID
      <StyledInput
        type="checkbox"
        id="showUserID" 
        onClick={props.showUserIDHandler}
        />
      <Checkmark />
    </StyledLabel>
      <FilterField
        id="filterField"
        type="text"
        onChange={props.onTextChange}
        value={props.filter.text}
        placeholder="Search"
      />
  </OptionsWrapper>
)

export default Options;