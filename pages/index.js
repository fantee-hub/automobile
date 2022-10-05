import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Link from "next/link";
import Footer from "../components/Footer";
import styled from "styled-components";
import carOne from "../assests/apply-img.jpg";
import carTwo from "../assests/inventory-img.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carThree from "../assests/download.jpeg";
import carFour from "../assests/slide2.jpg";
import carFive from "../assests/slide3.jpg";
import { getAllCars } from "../lib/cars";
import { client, urlFor } from "../lib/client";
import AppContext from "../components/contextApi/AppContext";
import Router from "next/router";
import { useContext } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 2 }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        left: "10px",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

export default function Home({ allCars }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const settingsThree = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cars = getAllCars();
  console.log(allCars);
  const { setCarData } = useContext(AppContext);

  const getCarsHandler = (e) => {
    const textValue = e.target.textContent.split(" ")[1].replace("$", "");
    const mainValue = textValue.replace(",", "");
    const carPrice = parseInt(mainValue);
    console.log(carPrice);
    const check = cars.filter((car) => {
      if (isNaN(carPrice)) {
        return car;
      }
      return car.price <= carPrice;
    });

    Router.push(`/inventory/${e.target.textContent}`);
    if (typeof window !== "undefined") {
      localStorage.setItem("cars", JSON.stringify(check));
    }
  };

  return (
    <>
      <Nav />
      <HomeContainer>
        <Head>
          <title>Automobiles</title>
        </Head>

        <div className="col-1">
          <div className="image-section">
            <div className="images">
              <Image src={carOne} />
            </div>
            <div className="images">
              <Image src={carTwo} />
            </div>
          </div>
          <div className="price-section">
            <div className="price-header">
              <h3> SEARCH BY PRICE</h3>
            </div>
            <div className="price-content" onClick={getCarsHandler}>
              <div className="price">
                <p>Under $5,000</p>
                <p>Under $15,000</p>
                <p>Under $25,000</p>
                <p>Under $35,000</p>
              </div>
              <div className="price">
                <p>Under $10,000</p>
                <p>Under $20,000</p>
                <p>Under $30,000</p>
                <p>All cars</p>
              </div>
            </div>
          </div>
          <div className="shop-section">
            <div className="header">
              <h3>SHOP BY MAKE</h3>
            </div>
            <div className="shop-content">
              <div className="shop-items">
                <p>CHEVROLET (7)</p>
                <p>CHRYSLER (5)</p>
                <p>FORD (6)</p>
                <p>HYUNDAI (2)</p>
                <p>LEXUS (3)</p>
              </div>
              <div className="shop-items">
                <p>MERCEDES-BENZ (3)</p>
                <p>NISSAN (4)</p>
                <p>RAM (1)</p>
                <p>TOYOTA (5)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="first-slider">
            <Slider {...settings}>
              <div>
                <Image src={carThree} />
              </div>
              <div>
                <Image src={carFour} />
              </div>
              <div>
                <Image src={carFive} />
              </div>
            </Slider>
          </div>
          <div className="second-slider">
            <Slider {...settingsTwo}>
              {allCars.map((cars) => (
                <Link href={`/cars/${cars.slug.current}`} key={cars._id}>
                  <div className="images">
                    <img
                      src={urlFor(cars.image && cars.image[0])}
                      alt={cars.name}
                    />
                    <div className="img-contents">
                      <h4>{cars.name}</h4>
                      <p>{cars.mileage}</p>
                      <div className="btn">
                        <button>${cars.price}</button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
          <div className="welcome-section">
            <div className="header">
              <h3>WELCOME TO BUDEROCK AUTO</h3>
            </div>
            <div className="contents">
              <p>
                Buderock Auto is dedicated to providing you with the ultimate
                automobile buying experience. Buderock Auto is your #1 source
                for buying a quality pre-owned vehicle. We have extensive
                relationships in the dealer community allowing us to purchase a
                wide variety of lease returns and new car trades at exceptional
                values. This enables Buderock Auto to pass along huge savings on
                the highest quality vehicles of your choice. In addition, we
                offer a full array of financing options to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </HomeContainer>
      <MobileView>
        <div className="first-slider">
          <Slider {...settings}>
            <div>
              <Image src={carThree} />
            </div>
            <div>
              <Image src={carFour} />
            </div>
            <div>
              <Image src={carFive} />
            </div>
          </Slider>
        </div>
        <div className="price-section">
          <div className="price-header">
            <h3> SEARCH BY PRICE</h3>
          </div>
          <div className="price-content" onClick={getCarsHandler}>
            <div className="price">
              <p>Under $5,000</p>
              <p>Under $15,000</p>
              <p>Under $25,000</p>
              <p>Under $35,000</p>
            </div>
            <div className="price">
              <p>Under $10,000</p>
              <p>Under $20,000</p>
              <p>Under $30,000</p>
              <p>All cars</p>
            </div>
          </div>
        </div>
        <div className="second-slider">
          <Slider {...settingsThree}>
            {allCars.map((cars) => (
              <Link href={`/cars/${cars.slug.current}`} key={cars._id}>
                <div className="images">
                  <img
                    src={urlFor(cars.image && cars.image[0])}
                    alt={cars.name}
                  />
                  <div className="img-contents">
                    <h4>{cars.name}</h4>
                    <p>{cars.mileage}</p>
                    <div className="btn">
                      <button>${cars.price}</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
        <div className="shop-section">
          <div className="header">
            <h3>SHOP BY MAKE</h3>
          </div>
          <div className="shop-content">
            <div className="shop-items">
              <p>CHEVROLET (7)</p>
              <p>CHRYSLER (5)</p>
              <p>FORD (6)</p>
              <p>HYUNDAI (2)</p>
              <p>LEXUS (3)</p>
            </div>
            <div className="shop-items">
              <p>MERCEDES-BENZ (3)</p>
              <p>NISSAN (4)</p>
              <p>RAM (1)</p>
              <p>TOYOTA (5)</p>
            </div>
          </div>
        </div>
        <div className="welcome-section">
          <div className="header">
            <h3>WELCOME TO BUDEROCK AUTO</h3>
          </div>
          <div className="contents">
            <p>
              Buderock Auto is dedicated to providing you with the ultimate
              automobile buying experience. Buderock Auto is your #1 source for
              buying a quality pre-owned vehicle. We have extensive
              relationships in the dealer community allowing us to purchase a
              wide variety of lease returns and new car trades at exceptional
              values. This enables Buderock Auto to pass along huge savings on
              the highest quality vehicles of your choice. In addition, we offer
              a full array of financing options to meet your needs.
            </p>
          </div>
        </div>
      </MobileView>
      <Footer />
    </>
  );
}

const HomeContainer = styled.div`
  @media screen and (max-width: 765px) {
    display: none;
  }

  background: #eeeeee;
  display: flex;
  max-width: 80rem;
  margin: 0 auto;
  .col-1 {
    width: 30%;
    padding: 0 1rem;
    .price-section {
      .price-header {
        text-align: center;
        background: #303030;
        color: #ffffff;
        h3 {
          padding: 0.4rem 0;
        }
      }
      .price-content {
        display: flex;
        justify-content: space-between;
        .price p {
          background-color: #3367fc;
          color: #ffffff;
          margin: 0.5rem 0;
          padding: 0.6rem 2rem;
          text-align: center;
          cursor: pointer;
          @media screen and (max-width: 1024px) and (min-width: 766px) {
            padding: 0.4rem;
            margin: 1rem 0.3rem 1rem 0rem;
            width: 100px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            cursor: pointer;
          }
        }
      }
    }
    .shop-section {
      .header {
        text-align: center;
        background: #303030;
        color: #ffffff;
        h3 {
          padding: 0.4rem 0;
        }
      }
      .shop-content {
        display: flex;
        justify-content: space-between;
        .shop-items {
          p {
            padding: 0.4rem 0;
          }
        }
      }
    }
  }
  .col-2 {
    @media screen and (max-width: 1024px) {
      width: 65%;
    }
    width: 70%;
    .first-slider {
      .slick-dots {
        top: 15px;
        li button:before {
          font-family: "slick";
          font-size: 20px;
          line-height: 20px;
        }
      }
    }
    .second-slider {
      background-color: #3d3d3d;
      padding: 1rem 2rem;
      text-align: center;

      .images {
        cursor: pointer;
        img {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          object-fit: contain;
        }
        .img-contents {
          p {
            padding: 0.1rem 0;
            color: #ffffff;
            @media screen and (max-width: 1024px) {
              font-size: 0.7rem;
            }
          }
          h4 {
            color: #ffffff;
            padding-top: 0.2rem;
            @media screen and (max-width: 1024px) {
              font-size: 0.8rem;
            }
          }
          .btn {
            padding-top: 0.5rem;
            button {
              color: #ffffff;
              background: #3367fc;
              border: none;
              padding: 0.6rem 1rem;
              cursor: pointer;
            }
          }
        }
      }
    }
    .welcome-section {
      .header {
        text-align: center;
        background: #3367fc;
        color: #ffffff;
        padding: 0.6rem 0;
        margin: 1rem 0;
      }
      .contents {
        padding: 0.6rem;
      }
    }
  }
`;
const MobileView = styled.div`
  @media screen and (min-width: 765px) {
    display: none;
  }
  padding-top: 3rem;
  .price-section {
    .price-header {
      text-align: center;
      background: #303030;
      color: #ffffff;
      h3 {
        padding: 0.4rem 0;
      }
    }
    .price-content {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      .price p {
        background-color: #3367fc;
        color: #ffffff;
        margin: 0.5rem 0;
        padding: 0.6rem 1rem;

        text-align: center;
      }
    }
  }
  .second-slider {
    background-color: #3d3d3d;
    padding: 1rem 2rem;
    text-align: center;

    .images {
      text-align: center;
      img {
        width: 50%;
        margin: 0 auto;
      }
      .img-contents {
        p {
          padding: 0.1rem 0;
          color: #ffffff;
        }
        h4 {
          color: #ffffff;
          padding-top: 0.2rem;
        }
        .btn {
          padding-top: 0.5rem;
          button {
            color: #ffffff;
            background: #3367fc;
            border: none;
            padding: 0.6rem 1rem;
            cursor: pointer;
          }
        }
      }
    }
  }
  .shop-section {
    padding: 0.5rem 0;
    text-align: center;
    .header {
      text-align: center;
      background: #303030;
      color: #ffffff;
      h3 {
        padding: 0.4rem 0;
      }
    }
    .shop-content {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      .shop-items {
        p {
          padding: 0.4rem 0;
          color: #3367fc;
          font-weight: 600;
        }
      }
    }
  }
  .welcome-section {
    padding: 0.5rem 0;
    .header {
      text-align: center;
      background: #3367fc;
      color: #ffffff;
      padding: 0.6rem 0;
      margin: 1rem 0;
    }
    .contents {
      padding: 0 0.6rem 0.5rem 0.6rem;
    }
  }
`;

export const getServerSideProps = async () => {
  const query = '*[_type == "car"]';
  const allCars = await client.fetch(query);

  return {
    props: { allCars },
  };
};
