import React, { useContext, Fragment } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../library/context/github/githubContext';

const Users = () => {
  const githubCtx = useContext(GithubContext);

  const { loading, users } = githubCtx;

  if (loading) {
    return  <Spinner />
  } else {
    return (
      <div>
        {users.map(user => (
          <Fragment>
            <UserItem key={user.id} user={user} />
          </Fragment>

        ))}
      </div>
    )
  }
}

export default Users;
