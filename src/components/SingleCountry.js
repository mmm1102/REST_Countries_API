import axios from "axios";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryBorders from "./CountryBorders";
import styled from "styled-components";

const ContainerRow = styled.div`
  width: auto;
  height: 100%;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 576px) {
    width: 540px;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 1024px) {
    width: 960px;
    margin: 30px auto;
  }
  @media (min-width: 1280px) {
    width: 1140px;
  }
  @media (min-width: 1366px) {
    width: 1280px;
    margin: 60px auto;
  }
`;

const Button = styled.div`
  width: 6.5rem;
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: #333;
  &:hover {
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  @media (min-width: 1024px) {
    margin-top: 60px;
    justify-content: space-between;
  }
`;

const CountryFlag = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 44%;
  }
`;

const CountryInfo = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 47%;
  }
`;

const CountryListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const CountryList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 30px;
  list-style: none;
  @media (min-width: 576px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const SingleCountry = () => {
  const { name } = useParams();
  const { country, setCountry } = useState({});
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);



  return (
    <ContainerRow>
      <NavLink to={"../"} title={"Back home"}>
        <Button>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "10px" }} />
          Back
        </Button>
      </NavLink>
      {countries
        .filter((elem) => String(elem.name).startsWith(name))
        .map((country) => (
          <Wrapper key={country.alpha2Code}>
            <CountryFlag src={country.flag} alt={country.name} />
					{/* {	console.log(country)} */}
            <CountryInfo>
              <h1>{country.name}</h1>
              <CountryListWrapper>
                <CountryList>
                  <li className="card-details">
                    {" "}
                    <span className="card-details-span">
                      Native Name:{" "}
                    </span>{" "}
                    {country.nativeName}
                  </li>

                  <li className="card-details">
                    <span className="card-details-span">Population: </span>
                    {country.population.toLocaleString()}
                  </li>

                  <li className="card-details">
                    <span className="card-details-span">Region: </span>
                    {country.region}
                  </li>

                  <li className="card-details">
                    <span className="card-details-span">Subregion: </span>{" "}
                    {country.subregion}
                  </li>

                  <li className="card-details">
                    <span className="card-details-span">Capital: </span>{" "}
                    {country.capital}
                  </li>
                </CountryList>
                <CountryList>
                  <li className="card-details">
                    <span className="card-details-span">
                      Top Level Domain:{" "}
                    </span>{" "}
                    {country.topLevelDomain}
                  </li>
                  <li className="card-details">
                    <span className="card-details-span">Currencies: </span>{" "}
                    {country.currencies
                      .map((currency) => currency.name)
                      .join(",")}
                  </li>
                  <li className="card-details">
                    <span className="card-details-span">Languages: </span>{" "}
                    {country.languages
                      .map((language) => language.name)
                      .join(",")}
                  </li>
                </CountryList>
              </CountryListWrapper>

              {country.borders.length > 0 ? (
                <CountryBorders borderName={country.borders} />
              ) : (
                <p>This country has no border countries.</p>
              )}
            </CountryInfo>
          </Wrapper>
        ))}
    </ContainerRow>
  );
};

export default SingleCountry;
