import React from "react";
import PropTypes from "prop-types";
import InfoItem from "./InfoItem";

const Infos = ({ repos, user }) => {
  return repos.map(repo => <InfoItem repo={repo} key={repo.id} user={user} />);
};

Infos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Infos;
