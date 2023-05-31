import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

const Header = () => {
  return (
    <div className="">
      <div >
        <MDBNavbar light bgColor="light">
          <MDBContainer fluid className="header-content">
            <MDBNavbarBrand href="/" style={{fontWeight:"800"}}>Where in the world?</MDBNavbarBrand>
            <MDBNavbarBrand href="#" style={{fontWeight:"600", fontSize:"14px"}}><i className="far fa-moon"></i>&nbsp; Dark Mode</MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </div>
  );
};

export default Header;
