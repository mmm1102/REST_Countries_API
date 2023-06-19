import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {countries} from 'country-data';


const Button = styled.span`
  width: 2rem;
 
  align-self: flex-start;
  align-items: center;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const CountryBorders = ({ borderName }) => {
  // const search = countries[`${elem}`].name;
  return (
    <span style={{ fontWeight: "900", marginTop: "2rem" }}>
      <span>Border Countries:</span>
      {borderName.map((elem, index) => {
        return (
          <NavLink key={index} to={`/${countries[`${elem}`].name}`}>
            <Button>{elem}</Button>
            {console.log(countries[`${elem}`].name)}
          </NavLink>
        );
      })}
    </span>
  );
};

export default CountryBorders;
