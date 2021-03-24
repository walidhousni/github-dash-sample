import React, { useState, useContext } from "react";
import GithubContext from '../../library/context/github/githubContext';
import styled from 'styled-components';

const Search = () => {
  const githubCtx = useContext(GithubContext);

  const [text, setText] = useState("");
  const onChange = event => setText(event.target.value);

  const onSubmit = event => {
     event.preventDefault();
     if (text === "") {
       console.log('please enter a username');
     } else {
       githubCtx.searchUsers(text);
       setText("");
     }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
      <InputStyle
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        ></InputStyle>
        <InputButton
          type='submit'
          value='Search'
        />
      </form>
      {githubCtx.users.length > 0 && (
        <button
          onClick={githubCtx.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  )
}

const InputStyle = styled.input`
margin: 1.2rem 0;
`

const InputButton = styled.input`
  display: inline-block;
  background: #e17055;
  color: #333;
  padding: 0.2rem 1.3rem;
  margin: 0.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
`

export default Search;
