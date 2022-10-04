import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <div className="footer-contents">
          <div className="footer-item">
            <div className="sub-header">
              <h4>STORE HOURS</h4>
            </div>
            <div className="text">
              <span>Mon - Sat:</span> 10:00 AM - 6:00 PM
            </div>
            <div className="text">
              <span>Sun:</span> Closed
            </div>
          </div>
          <div className="footer-item">
            <div className="sub-header">
              <h4>HOW TO REACH US?</h4>
            </div>
            <div className="location">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarker} />
              </div>
              <div className="address">
                <p>1721 Pleasanton Road,</p>
                <p>San Antonio, Texas</p>
              </div>
            </div>
            <div className="email">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              <div className="mail">
                <a href="mailto:funfem2013@yahoo.com">Funfem2013@yahoo.com</a>
              </div>
            </div>
          </div>
          <div className="footer-item">
            <div className="sub-header">
              <h4>FOLLOW US</h4>
            </div>
            <div className="icons">
              <div>
                <FontAwesomeIcon icon={faFacebookF} className="brand-icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faTwitter} className="brand-icon" />
              </div>
            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  background: #010101;
  color: #ffffff;
  padding: 1rem 2rem;
  @media screen and (max-width: 765px) {
    padding: 1rem 0.8rem;
  }
  .footer-contents {
    display: flex;

    justify-content: space-between;
    @media screen and (max-width: 765px) {
      flex-direction: column;
    }
  }

  .footer-item {
    .sub-header {
      padding: 1rem 0;
    }
    .text span {
      font-weight: 600;
    }
    .location,
    .email {
      display: flex;
      .icon {
        padding-right: 0.3rem;
      }
      a {
        color: #ffffff;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      .brand-icon {
        background: #3367fc;
        width: 20px;
        height: 20px;
        text-align: center;
        padding: 0.6rem;
        margin-right: 0.3rem;
        border-radius: 50%;
      }
    }
  }
`;
