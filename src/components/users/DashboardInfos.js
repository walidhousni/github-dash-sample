import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../../components/layout/Spinner';
import Infos from '../repos/Infos';
import GithubContext from '../../library/context/github/githubContext'


const DashboardInfos = ({ match }) => {
  const githubCtx = useContext(GithubContext);

  const { getUser, loading, user, getUserRepos, repos } = githubCtx;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  },  []);


  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Infos repos={repos} user={user} />
    </Fragment>
  )
}

export default DashboardInfos
