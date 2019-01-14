import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="footer pt-4">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4">
          <h5>About Us</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <h5>Social</h5>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4">
          <h5>Last Reviews</h5>
          <ul className="list-unstyled">
            <li className="media">
              <img src="http://madagascar.dreamworks.com/images/uploads/properties/mad_3_gallery_07.jpg" width="60" className="mr-3" alt="Title" />
              <div className="media-body">
                <h6 className="mt-0 mb-1">List-based media object</h6>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...
              </div>
            </li>
            <li className="media my-4">
              <img src="http://madagascar.dreamworks.com/images/uploads/properties/mad_3_gallery_07.jpg" width="60" className="mr-3" alt="Title" />
              <div className="media-body">
                <h6 className="mt-0 mb-1">List-based media object</h6>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...
              </div>
            </li>
            <li className="media">
              <img src="http://madagascar.dreamworks.com/images/uploads/properties/mad_3_gallery_07.jpg" width="60" className="mr-3" alt="Title" />
              <div className="media-body">
                <h6 className="mt-0 mb-1">List-based media object</h6>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...
              </div>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4">
          <h5>Contact</h5>
          <h6>Phone:</h6>
          <span>+255 000 00 00 00</span>
          <h6>Email:</h6>
          <span>info@vissne.com</span>
          <h5>Last Updates</h5>
          <ul>
            <li>Add common filter for movies</li>
            <li>Google auth options is completed</li>
            <li>Fixed Facebook auth issues</li>
            <li>Profile page was added</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
