import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FlagWrapper = styled.img`
	width: 100%;
	height: auto;
	display: flex;
	object-fit: cover;
	border-radius: 6px 6px 0 0;

	@media (min-width: 576px) {
		height: 160px;
	}
	@media (min-width: 768px) {
		height: 140px;
	}
	@media (min-width: 1280px) {
		height: 160px;
	}
`;

const CardFlag = ({ country }) => {
 
  return (
    <Card
      style={{
        width: "13rem",
        margin: "5px",
        paddingLeft: "0px",
        paddingRight: "0",
        backgroundPosition: "cover",
      }}
    >
      <NavLink to={`/${country.name}`}>
        <FlagWrapper
          src={country.flags.png}
          alt={country.name}
        />
      </NavLink>
      <Card.Body>
        <Card.Title style={{ fontSize: "14px", fontWeight: "900" }}>
          {country.name}
        </Card.Title>
        <Card.Text style={{ fontSize: "12px", marginBottom: "4px" }}>
          {" "}
          <span style={{ fontWeight: "600" }}>Population: </span>
          {country.population.toLocaleString()}
        </Card.Text>
        <Card.Text style={{ fontSize: "12px", marginBottom: "4px" }}>
          <span style={{ fontWeight: "600" }}>Region: </span> {country.region}
        </Card.Text>
        <Card.Text style={{ fontSize: "12px", marginBottom: "0px" }}>
          <span style={{ fontWeight: "600" }}>Capital: </span>
          {country.capital}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardFlag;
