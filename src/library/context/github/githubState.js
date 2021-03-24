import React, { useReducer } from 'react';
import githubContext from './githubContext';
import githubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPO_LIST,
  SET_LOADING
} from '../actions/types';
import axiosInstance from '../../../main/axios'


let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
       users: [],
       user: [],
       repos: [],
       loading: false
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(githubReducer, initialState);


   const searchUsers = async text => {
     setLoading();
     const res = await axiosInstance.get(
       `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}
       `);

       dispatch({
         type: SEARCH_USERS,
         payload: res.data.items
       });
   };

   const getUser = async username => {
     setLoading();
     const res = await axiosInstance.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
     );

     dispatch({
       type: GET_USER,
       payload: res.data
     })
   };

   const getUserRepos = async username => {
    setLoading();
    const res = await axiosInstance.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPO_LIST,
      payload: res.data
    });
  };

   const clearUsers = () => dispatch({type: CLEAR_USERS});

   const setLoading = () => dispatch({type: SET_LOADING});

   return (
      <githubContext.Provider
        value={{
          users: state.users,
          user: state.user,
          repos: state.repos,
          loading: state.loading,
          searchUsers,
          clearUsers,
          getUser,
          getUserRepos
        }}
      >
        {props.children}
      </githubContext.Provider>
   )
}

export default GithubState;
