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
import carSix from "../assests/car1.jpg";
import carSeven from "../assests/car2.jpg";
import carEight from "../assests/car3.jpg";
import carNine from "../assests/car4.jpg";
import carTen from "../assests/car5.jpg";
import carEleven from "../assests/car6.jpg";
import carTwelve from "../assests/car7.jpg";
import carThirteen from "../assests/car8.jpg";

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

export default function Home() {
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
            <div className="price-content">
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
              <Link href="/cars/2004 lexus es">
                <div className="images">
                  <Image src={carSix} />
                  <div className="img-contents">
                    <h4>2004 LEXUS ES</h4>
                    <p>180,690 miles</p>
                    <div className="btn">
                      <button>$3,999</button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/cars/2011 toyota camry">
                <div className="images">
                  <Image src={carSeven} />
                  <div className="img-contents">
                    <h4>2011 Toyota Camry</h4>
                    <p>180,690 miles</p>
                    <div className="btn">
                      <button>$7,000</button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/cars/2003 chevrolet suburban">
                <div className="images">
                  <Image src={carEight} />
                  <div className="img-contents">
                    <h4>2003 Chevrolet Suburban</h4>
                    <p>180,690 miles</p>
                    <div className="btn">
                      <button>$4,000</button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/cars/2011 chevrolet malibu">
                <div className="images">
                  <Image src={carNine} />
                  <div className="img-contents">
                    <h4>2011 Chevrolet Malibu</h4>
                    <p>180,690 miles</p>
                    <div className="btn">
                      <button>$5,000</button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/cars/2008 saturn aura">
                <div className="images">
                  <Image src={carTen} />
                  <div className="img-contents">
                    <h4>2008 Saturn Aura</h4>
                    <p>180,690 miles</p>
                    <div className="btn">
                      <button>$2,999</button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/cars/2014 chrysler 200">
                <div className="images">
                  <Image src={carEleven} />
                  <div className="img-contents">
                    <h4>2014 CHRYSLER 200</h4>
                    <p>180,690 miles</p>
                    <div className="btn">
                      <button>$5,200</button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/cars/2007 acura mdx">
                <div className="images">
                  <Image src={carTwelve} />
                  <div className="img-contents">
                    <h4>2007 ACURA MDX</h4>
                    <p>180,690 miles</p>
                    <div className="btn">
                      <button>$6,499</button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/cars/2004 ford f150 super cab">
                <div className="images">
                  <Image src={carThirteen} />
                  <div className="img-contents">
                    <h4>2004 FORD F150 SUPER CAB</h4>
                    <p>180,690 miles</p>
                    <div className="btn">
                      <button>$7,000</button>
                    </div>
                  </div>
                </div>
              </Link>
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
          <div className="price-content">
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
            <Link href="/cars/2004 lexus es">
              <div className="images">
                <Image src={carSix} />
                <div className="img-contents">
                  <h4>2004 LEXUS ES</h4>
                  <p>180,690 miles</p>
                  <div className="btn">
                    <button>$3,999</button>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/cars/2011 toyota camry">
              <div className="images">
                <Image src={carSeven} />
                <div className="img-contents">
                  <h4>2011 Toyota Camry</h4>
                  <p>180,690 miles</p>
                  <div className="btn">
                    <button>$7,000</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cars/2003 chevrolet suburban">
              <div className="images">
                <Image src={carEight} />
                <div className="img-contents">
                  <h4>2003 Chevrolet Suburban</h4>
                  <p>180,690 miles</p>
                  <div className="btn">
                    <button>$4,000</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cars/2011 chevrolet malibu">
              <div className="images">
                <Image src={carNine} />
                <div className="img-contents">
                  <h4>2011 Chevrolet Malibu</h4>
                  <p>180,690 miles</p>
                  <div className="btn">
                    <button>$5,000</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cars/2008 saturn aura">
              <div className="images">
                <Image src={carTen} />
                <div className="img-contents">
                  <h4>2008 Saturn Aura</h4>
                  <p>180,690 miles</p>
                  <div className="btn">
                    <button>$2,999</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cars/2014 chrysler 200">
              <div className="images">
                <Image src={carEleven} />
                <div className="img-contents">
                  <h4>2014 CHRYSLER 200</h4>
                  <p>180,690 miles</p>
                  <div className="btn">
                    <button>$5,200</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cars/2007 acura mdx">
              <div className="images">
                <Image src={carTwelve} />
                <div className="img-contents">
                  <h4>2007 ACURA MDX</h4>
                  <p>180,690 miles</p>
                  <div className="btn">
                    <button>$6,499</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cars/2004 ford f150 super cab">
              <div className="images">
                <Image src={carThirteen} />
                <div className="img-contents">
                  <h4>2004 FORD F150 SUPER CAB</h4>
                  <p>180,690 miles</p>
                  <div className="btn">
                    <button>$7,000</button>
                  </div>
                </div>
              </div>
            </Link>
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
