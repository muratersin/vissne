import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row py-5">
        <div className="col-12 col-sm-12 col-md-4">
          <h5>About Us</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <h5>Social</h5>
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-outline-success btn-block">
                facebook
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-outline-success btn-block">
                twitter
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-outline-success btn-block">
                instagram
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <h5>Last Reviews</h5>
          <ul className="list-unstyled">
            <li className="media">
              <div className="media-body">
                <h6 className="mt-0 mb-1">List-based media object</h6>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...
              </div>
            </li>
            <li className="media my-4">
              <div className="media-body">
                <h6 className="mt-0 mb-1">List-based media object</h6>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...
              </div>
            </li>
            <li className="media">
              <div className="media-body">
                <h6 className="mt-0 mb-1">List-based media object</h6>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...
              </div>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <h5>Contact</h5>
          <p>+255 000 00 00 00</p>
          <p>info@vissne.com</p>
          <h5 className="mt-2">Last Updates</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Add common filter for movies</li>
            <li className="list-group-item">Google auth options is completed</li>
            <li className="list-group-item">Fixed Facebook auth issues</li>
          </ul>
        </div>
      </div>
      <div className="row d-flex justify-content-center mb-1">
        <span>Copyright © 2019 Vissne</span>
      </div>
    </div>
  </footer>
);

export default Footer;
