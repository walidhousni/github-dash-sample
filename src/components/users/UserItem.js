import React from 'react';
import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';
import styled from 'styled-components';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <Card>
      <img
        src={avatar_url}
        alt=''
        style={{ width: "60px" }}
      ></img>
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`}>
          More
        </Link>
      </div>
    </Card>
  );
}


UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

const Card = styled.div`
padding: 1rem;
border: #ccc 1px dotted;
margin: 0.7rem 0;

& > img {
  border-radius: 50%;
}
`

export default UserItem;
