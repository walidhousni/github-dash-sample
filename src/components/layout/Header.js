import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Header  = ({title}) => {
  return (
     <HeaderNav>
       <Link to="/" >
       <h1>{title}</h1>
       </Link>
     </HeaderNav>
  )
}

Header.defaultProps = {
   title: 'Github Dashboard'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1rem;
  background-color: #74b9ff;

  & > a {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
  }
`


export default Header;
