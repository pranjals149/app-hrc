import React from "react";
import logo from "../../assets/logo.svg";
import companyLogo from "../../assets/company-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="d-flex justify-content-center position-relative">
        <div className="position-absolute fixed-left company-logo desktopSection">
          <img src={companyLogo} alt="logo" className="img-fluid logo" />
        </div>
        <div className="d-flex flex-column align-items-center" style={{
          textAlign: "center"
        }}>
          <img src={logo} alt="logo" className="img-fluid logo" />
          <img
            src={companyLogo}
            alt="logo"
            className="w-100 mt-2 logo mobileSection"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
