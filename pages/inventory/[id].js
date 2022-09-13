import styled from "styled-components";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AppContext from "../../components/contextApi/AppContext";
import { useContext } from "react";
import Link from "next/link";

export default function Inventory() {
  const { carData } = useContext(AppContext);

  return (
    <>
      <Nav />
      {carData.length > 0 ? (
        <InventorySection>
          <div className="inventory-contents">
            <div className="image-section">
              {carData.map((data, index) => (
                <div className="car-details">
                  <Link href={"/cars/" + data.commonName.toLowerCase()}>
                    <div className="img-cont">
                      <img src={data.images[0]} alt={data.name} key={index} />
                    </div>
                  </Link>

                  <div className="data-content">
                    <div className="header">
                      <h4>{data.commonName}</h4>
                    </div>
                    <div className="components">
                      <div className="items">
                        <h6>Drivetrain</h6>
                        <p>{data.driveTrain}</p>
                      </div>
                      <div className="items">
                        <h6>Transmission</h6>
                        <p>{data.tranmission}</p>
                      </div>
                      <div className="items">
                        <h6>Engine</h6>
                        <p>{data.engine}</p>
                      </div>
                      <div className="items">
                        <h6>Mileage</h6>
                        <p>{data.mileage}</p>
                      </div>
                      <div className="items">
                        <h6>Doors</h6>
                        <p>{data.doors}</p>
                      </div>
                      <div className="items">
                        <h6>VIN</h6>
                        <p>{data.vin}</p>
                      </div>
                      <div className="items">
                        <h6>Stock Number</h6>
                        <p>{data.stockNo}</p>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>${data.price}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InventorySection>
      ) : (
        <NotFound>
          <h1>No Items found</h1>
        </NotFound>
      )}
      <Footer />
    </>
  );
}

const InventorySection = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  background: #eeeeee;
  padding: 0.7rem 1.5rem;
  @media screen and (max-width: 765px) {
    padding: 5rem 1rem 0.7rem 1rem;
  }
  .inventory-contents {
    .image-section {
      .car-details {
        display: flex;
        justify-content: space-between;
        .img-cont {
          cursor: pointer;
          img {
            width: 200px;
            height: 200px;
            object-fit: contain;
          }
        }
        .data-content {
          .components {
            display: flex;
            flex-wrap: wrap;
            .items {
              padding: 0rem 1rem 1rem 0;
              flex: 25%;
              h6 {
                color: #4868fc;
              }
            }
          }
        }

        .price {
          padding: 1rem 0;
          color: #4868fc;
        }
      }
    }
  }
`;
const NotFound = styled.div`
  h1 {
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
