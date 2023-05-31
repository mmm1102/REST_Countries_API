import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardFlag from "./CardFlag";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await axios.get("https://restcountries.com/v2/all");
      setCountries(res.data);
    };
    fetchCountries();
  }, []);

  const regioni = countries.forEach((elem)=>{
    let reg = elem.region;
    // console.log(reg)
  })

  const handleAfrica = () => {
    countries.filter(elem => String(elem.region).startsWith("Africa"))
  }

//   const oceania = countries.filter(elem => String(elem.region).startsWith("O"))
//   console.log(oceania)

  return (
    <div
      style={{
        backgroundColor: "hsl(0, 0%, 98%)",
        width: "90%",
        margin: "0 auto",
        marginTop: "2.5rem",
      }}
    >
      <div className="row">
        <div className="mb-4 d-flex justify-content-between">
          <div className="card">
            <div className="card-body p-1 d-flex justify-content-left">
              <i className="fas fa-search fa-sm d-flex align-self-center ms-4 me-2"></i>
              <div id="basic" className="form-outline flex-fill">
                <input
                  type="text"
                  id="form1"
                  className="form-control form-control-l"
                  placeholder="Search for a country..."
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <MDBDropdown className="pe-3">
            <MDBDropdownToggle
              className="lowerCase p-3"
              style={{
                backgroundColor: "white",
                color: "#333",
                boxShadow: "none",
                width: "10rem",
              }}
            >
              Filter by Region
            </MDBDropdownToggle>
            <MDBDropdownMenu style={{ marginBottom: "5px" }}>
              <button
                style={{
                  fontSize: "12px",
                  marginBottom: "0px",
                  marginTop: "2px",
                  padding: "0px",
                }}
                
             onClick={handleAfrica}
              >
                Africa
              </button>

              <MDBDropdownItem
                style={{
                  fontSize: "12px",
                  marginBottom: "0px",
                  marginTop: "0px",
                  paddingBottom: "0px",
                  paddingTop: "0px",
                }}
                link
              >
                America
              </MDBDropdownItem>
              <MDBDropdownItem
                style={{ fontSize: "12px", marginBottom: "0px" }}
                link
              >
                Asia
              </MDBDropdownItem>
              <MDBDropdownItem
                style={{ fontSize: "12px", marginBottom: "0px" }}
                link
              >
                Europe
              </MDBDropdownItem>
              <MDBDropdownItem
                style={{ fontSize: "12px", marginBottom: "0px" }}
                link
              >
                Oceania
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
      </div>

      <Row style={{ gap: "3.3rem" }}>
        {" "}
        {countries
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((country) => (
            <CardFlag key={country.name} country={country}>
              {country}
            </CardFlag>
          ))}
      </Row>
    </div>
  );
};

export default Main;
