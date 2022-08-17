import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";
import car from "../assests/about-car.jpg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Nav />
      <AboutSection>
        <div className="header">
          <h1>About Us</h1>
        </div>
        <div className="about-content">
          <div className="text-content">
            <p>
              With years of experience serving the San Antonio, TX, Buderock
              Auto is dedicated to offering high-quality, pre-owned vehicles to
              our customers.
            </p>
            <p>
              From the moment you walk through our door, we’re committed to
              providing you with a great car-buying experience. With our skilled
              sales staff and our wide variety of financing options, we’ll help
              you get the vehicle you want, at the great price you deserve. With
              many vehicle shopping options available, we differentiate
              ourselves by understanding our local car-buying community and
              satisfying its needs; helping valued local customers like you,
              find the vehicle that’s the “right fit”.
            </p>
            <p>
              Feel free to browse our inventory online and check out the
              Featured Vehicles section on our homepage. If you see a vehicle
              you like, submit an online quote request, or contact us to
              schedule a test drive. To learn more about our dealership and how
              we can help with your next vehicle purchase, please call or stop
              by in person. We look forward to meeting you.
            </p>
          </div>
          <div className="image-section">
            <img src={car.src} />
          </div>
        </div>
      </AboutSection>
      <Footer />
    </>
  );
}

const AboutSection = styled.div`
  max-width: 70rem;
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
  .about-content {
    padding-bottom: 1.5rem;
    display: flex;
    @media screen and (max-width: 765px) {
      flex-direction: column;
    }
    .text-content {
      p {
        padding: 0.4rem 0;
      }
      max-width: 45rem;
      padding-right: 0.6rem;
    }
  }
`;
