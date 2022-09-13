import { useState, useContext } from "react";
import Router from "next/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getAllCars } from "../lib/cars";
import AppContext from "./contextApi/AppContext";

export default function Modal({ setSearchToggle }) {
  const cars = getAllCars();
  const [input, setInput] = useState("");
  const { pathname } = Router;
  const { setCarData, setSearchInput } = useContext(AppContext);

  const getSearchInput = (e) => {
    setInput(e.target.value);
  };
  const searchCarHandler = (e) => {
    e.preventDefault();
    setInput("");
    setSearchInput(input);
    closeSearchBar();
    const check = cars.filter((car) => {
      if (car.commonName.toLowerCase().includes(input)) {
        return car;
      }
    });
    setCarData(check);

    Router.push(`/inventory/${input}`);
  };

  const closeSearchBar = () => {
    setSearchToggle(false);
  };
  return (
    <ModalContainer>
      <div className="modal-backdrop" onClick={closeSearchBar}></div>
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <div className="content">
            <div className="modal-header">
              <h2>SEARCH INVENTORY</h2>
            </div>
            <form onSubmit={searchCarHandler}>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Type a keyword to search"
                  className="input-field"
                  onChange={getSearchInput}
                  value={input}
                />
                <span className="search-icon">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.6);
    overflow-y: hidden;
    z-index: 999;
  }
  .modal-content-wrapper {
    position: fixed;
    width: 100px;
    height: 100px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;

    z-index: 999;
    .modal-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      .modal-header {
        padding: 1rem 0;
        color: #ffffff;
      }
      .input-container {
        display: flex;
        width: 40vw;
        margin-bottom: 15px;
        margin-top: 5px;
        .search-icon {
          padding: 10px;
          background: #3367fc;
          color: #ffffff;
          border: none;
          min-width: 20px;
          text-align: center;
          border-radius: 0 0.4rem 0.4rem 0;
        }
        .input-field {
          width: 100%;
          padding: 10px;
          outline: none;
          border-radius: 0.4rem 0 0 0.4rem;
          border: none;
          font-family: "Nunito Sans", sans-serif;
        }
      }
    }
  }
`;
