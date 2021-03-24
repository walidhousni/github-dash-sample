import React, {Fragment} from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const InfoItem = ({ repo, user }) => {
  return (
    <Fragment>
    <Card>
      <div>
       <img
        src={user.avatar_url}
        alt=''
        style={{ width: "60px", borderRadius: '60px' }}
      />
      <span>
      <a href={repo.html_url}>{repo.html_url}</a>
      </span>
      <br />
        <h3>{repo.name}</h3>
        <p>{repo.language}</p>
        <span>{repo.stargazers_count}</span>
        <br />
        <span>{repo.description}</span>
        <h3>
        <a href={repo.html_url}>{repo.name}</a>
        <p>{repo.created_at}</p>
      </h3>
       </div>
       </Card>
    </Fragment>
  );
};
const Card = styled.div`
padding: 1rem;
border: #ccc 1px dotted;
margin: 0.7rem 0;

& > img {
  border-radius: 50%;
}

& > h3 {
  color: #fff;
}
`

InfoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default InfoItem;
