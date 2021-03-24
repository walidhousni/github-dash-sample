import React from "react";
import PropTypes from "prop-types";
import {  Link } from 'react-router-dom';
import styled from 'styled-components'


const RepoItem = ({ repo, user: { login} }) => {
  return (
    <Card>
      <h3>
        <Link to={`/infos/${login}`}>{repo.name}</Link>
      </h3>
    </Card>
  );
};

const Card  = styled.div`
padding: 1rem;
border: #ccc 1px dotted;
margin: 0.7rem 0;

& > h3 {
  background: none;
  padding: 0;
  margin: 0;
  color: #fff;
}
`

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem;
