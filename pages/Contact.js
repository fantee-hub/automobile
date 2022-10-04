import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Nav />
      <ContactContainer>
        <div className="header">
          <h1>CONTACT US</h1>
        </div>
        <div className="contact-contents">
          <div className="col-1">
            <div className="content-header">
              <h3>Buderock Auto</h3>
            </div>
            <div className="contents">
              <div className="mail">
                <span>Icon here</span>
                bancybuddy@yahoo.com
              </div>
              <div className="location">
                111 Eadlyn St <br />
                San Antonio,TX 78219
              </div>
              <div className="sales">
                <div className="col-1">Sales</div>
                <div className="col-2">
                  <a href="https://wa.me/08161248386?text=I'm%20interested%20in%20your%20car%20for%20sale">
                    +1 240 486 3233
                  </a>
                </div>
              </div>
              <div className="cell">
                <div className="col-1">CELL</div>
                <div className="col-2">
                  <a href="https://wa.me/08161248386?text=I'm%20interested%20in%20your%20car%20for%20sale">
                    +1 240 486 3233
                  </a>
                </div>
              </div>
            </div>
            <div className="content-header">
              <h3>Store Hours</h3>
            </div>
            <div className="weeks">
              <div className="week-1">Monday</div>
              <div className="time">10:00 AM - 6:00 PM</div>
            </div>
            <div className="weeks">
              <div className="week-2">Tuesday</div>
              <div className="time">10:00 AM - 6:00 PM</div>
            </div>
            <div className="weeks">
              <div className="week-3">Wednesday</div>
              <div className="time">10:00 AM - 6:00 PM</div>
            </div>
            <div className="weeks">
              <div className="week-4">Thursday</div>
              <div className="time">10:00 AM - 6:00 PM</div>
            </div>
            <div className="weeks">
              <div className="week-5">Friday</div>
              <div className="time">10:00 AM - 6:00 PM</div>
            </div>
            <div className="weeks">
              <div className="week-6">Saturday</div>
              <div className="time">10:00 AM - 6:00 PM</div>
            </div>
            <div className="weeks">
              <div className="week-7">Sunday</div>
              <div className="time">closed</div>
            </div>
          </div>
          <div className="col-2">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  className="responsive-iframe"
                  src="https://maps.google.com/maps?q=Buderock%20Auto&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </ContactContainer>
      <Footer />
    </>
  );
}

const ContactContainer = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  background: #eeeeee;
  padding: 0.7rem 1.5rem;
  @media screen and (max-width: 765px) {
    padding: 5rem 1rem 0.7rem 1rem;
  }
  .header {
    text-align: center;

    padding: 1.5rem 0;
  }
  .contact-contents {
    @media screen and (max-width: 765px) {
      flex-direction: column;
    }
    display: flex;
    justify-content: space-between;
    .content-header {
      padding: 1rem 0;
    }
    .contents {
      .sales,
      .cell {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 0;
        .col-1 {
          font-weight: 600;
        }
        a {
          color: #3367fc;
        }
      }

      .location {
        padding: 0.3rem 0;
      }
    }
    .weeks {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem 0;
    }
    .mapouter {
      .gmap_canvas {
        overflow: hidden;
        width: 100%;

        .responsive-iframe {
          width: 400px;
          height: 400px;
          border: none;
        }
      }
    }
  }
`;
