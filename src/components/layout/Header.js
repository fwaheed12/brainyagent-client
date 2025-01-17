import React from 'react';
import fullLogo from '../../assets/fullLogo.png';

const Header = () => {


  return (
    <header className="header py-lg-4 py-md-4 py-sm-3 py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-start">
            <div className="d-flex align-items-center justify-content-between w-100">
              <img src={fullLogo} height="32px" alt="Logo" />
              <div className="d-flex align-items-center gap-lg-5 gap-md-4 gap-3">
                <md-filled-button>Log in</md-filled-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
