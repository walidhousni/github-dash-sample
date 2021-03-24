import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../../components/layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../library/context/github/githubContext'


const DashboardUser = ({ match }) => {
  const githubCtx = useContext(GithubContext);

  const { getUser, loading, user, getUserRepos, repos } = githubCtx;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  },  []);

  const { avatar_url  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <img
        src={avatar_url}
        alt=''
        style={{ width: "60px" }}
      ></img>
      <Repos user={user} repos={repos} />
    </Fragment>
  )
}

export default DashboardUser
