import styled from "styled-components";

import { getAllCarsId, getAllCarsData } from "../../lib/cars";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/router";

export default function Cars({ carData }) {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const router = useRouter();

  return (
    <>
      <Nav />
      <CarSection>
        <div className="back-button">
          <span onClick={() => router.back()}>Back</span>
        </div>
        <div className="car-header">
          <div className="car-title">
            <h1>{carData.cars[0].commonName}</h1>
          </div>
          <div className="car-price">
            <h1>${carData.cars[0].price}</h1>
          </div>
        </div>
        <MainContent>
          <div className="slider">
            <Slider {...settings}>
              {carData.cars[0].images.map((img, index) => (
                <div className="images" key={index}>
                  <img src={img} key={index} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="car-details">
            <div className="col-1">
              <div className="contents">
                <div>
                  <span>Year:</span>
                  {carData.cars[0].year}
                </div>
                <div>
                  <span>Make:</span>
                  {carData.cars[0].name.make}
                </div>
                <div>
                  <span>Model:</span>
                  {carData.cars[0].name.model}
                </div>
                <div>
                  <span>Trim:</span>
                  {carData.cars[0].trim}
                </div>
                <div>
                  <span>Drivetrain:</span>
                  {carData.cars[0].driveTrain}
                </div>
                <div>
                  <span>Transmission:</span>
                  {carData.cars[0].tranmission}
                </div>
                <div>
                  <span>Engine:</span>
                  {carData.cars[0].engine}
                </div>
                <div>
                  <span>Mileage:</span>
                  {carData.cars[0].mileage}
                </div>
                <div>
                  <span>Doors:</span>
                  {carData.cars[0].doors}
                </div>
                <div>
                  <span>Exterior Color:</span>
                  {carData.cars[0].exteriorColor}
                </div>
                <div>
                  <span>Interior Color:</span>
                  {carData.cars[0].interiorColor}
                </div>
                <div>
                  <span>VIN:</span>
                  {carData.cars[0].vin}
                </div>
                <div>
                  <span>Stock No:</span>
                  {carData.cars[0].stockNo}
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="calculator">
                <div className="header">
                  <h1>Payment Calculator</h1>
                </div>
                <form>
                  <label htmlFor="vehiclePrice">Vehicle Price</label>
                  <div className="input-container">
                    <span className="dollar">$</span>
                    <input
                      type="text"
                      className="input-field price"
                      placeholder={carData.cars[0].price}
                    />
                  </div>
                  <label htmlFor="downPayment">Down Payment</label>
                  <div className="input-container">
                    <span className="dollar">$</span>
                    <input type="text" className="input-field" />
                  </div>
                  <label htmlFor="term">Term</label>
                  <div className="input-container">
                    <span className="dollar">$</span>
                    <input type="text" className="input-field" />
                  </div>
                  <label htmlFor="apr">APR</label>
                  <div className="input-container">
                    <input type="text" className="input-field" />
                    <span className="dollar">%</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </MainContent>
      </CarSection>
      <Footer />
    </>
  );
}

const CarSection = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  background: #eeeeee;
  padding: 0.7rem 1.5rem;
  @media screen and (max-width: 765px) {
    padding: 5rem 1rem 0.7rem 1rem;
  }
  .back-button {
    span {
      font-weight: 600;
      color: #3367fc;
      cursor: pointer;
    }
  }
  .car-header {
    margin: 1rem 0;
    background: #333333;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    color: #ffffff;
    @media screen and (max-width: 765px) {
      font-size: 0.65rem;
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  .slider {
    width: 35%;
    text-align: center;
    .images {
      img {
        width: 400px;
        height: 400px;
        object-fit: contain;
      }
    }
  }
  .car-details {
    display: flex;
    .col-1 {
      padding: 0 1rem;
      .contents {
        div {
          padding: 0.5rem;
          border-bottom: 1px solid #ccc;
          span {
            padding-right: 0.5rem;
            color: #3367fc;
            font-weight: 600;
          }
        }
      }
      @media screen and (max-width: 765px) {
        padding: 1.5rem 0;
      }
    }
    .col-2 {
      form {
        .input-container {
          display: flex;
          width: 100%;
          margin-bottom: 15px;
          margin-top: 5px;
          .dollar {
            padding: 10px;
            background: #eeeeee;
            border: 1px solid #ccc;
            min-width: 20px;
            text-align: center;
          }
          .input-field {
            width: 100%;
            padding: 10px;
            outline: none;
            border: 1px solid #ccc;
          }
          .input-field.price {
            text-align: right;
          }
        }
      }
    }
    @media screen and (max-width: 765px) {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 765px) {
    flex-direction: column;
    .slider {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      .images {
        img {
          width: 400px;
          height: 400px;
          object-fit: cover;
        }
      }
    }
  }
`;

export async function getStaticPaths() {
  const paths = getAllCarsId();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const carData = getAllCarsData(params.id);
  console.log(carData);
  return {
    props: {
      carData,
    },
  };
}
