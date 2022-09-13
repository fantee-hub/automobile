import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMapMarker,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import logo from "../assests/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, useContext } from "react";
import Modal from "./Modal";
import AppContext from "./contextApi/AppContext";

const Nav = () => {
  const { pathname } = useRouter();
  const [searchToggle, setSearchToggle] = useState(false);
  const { searchInput } = useContext(AppContext);

  const linksContainer = useRef();
  const links = useRef();

  const navToggler = () => {
    const containerHeight =
      linksContainer.current.getBoundingClientRect().height;
    const linksHeight = links.current.getBoundingClientRect().height;
    if (containerHeight === 0) {
      linksContainer.current.style.height = `${linksHeight + 20}px`;
    } else {
      linksContainer.current.style.height = 0;
    }
  };
  const searchHandler = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <>
      {searchToggle ? (
        <Modal searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
      ) : (
        ""
      )}

      <NavBar>
        <div className="nav-content">
          <div className="logo">
            <img src={logo.src} />
          </div>
          <div className="nav-items">
            <div className="items first-item">
              <div className="icon">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapMarker} />
                </span>
              </div>
              <div className="item-content">
                <p>111 Eadyln st</p>
                <p>San Antonio, TX 78219</p>
              </div>
            </div>
            <div className="items">
              <div className="item-content">
                <p>Sales: (210) 447-3345</p>
                <p>Cell : 07045687965</p>
                <p>Sales: rakitin@gmail.com</p>
              </div>
            </div>
            <div className="items icon-item">
              <div>
                <FontAwesomeIcon icon={faFacebookF} className="brand-icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faTwitter} className="brand-icon" />
              </div>
            </div>
          </div>
        </div>
      </NavBar>
      <MainNav>
        <ul className="nav-contents">
          <div className="nav-lists">
            <div className={` ${pathname === "/" ? "active-link" : ""}`}>
              <Link href="/">
                <li>Home</li>
              </Link>
            </div>
            <div
              className={` ${
                pathname === "/inventory/[id]" ? "active-link" : ""
              }`}
            >
              <li>Inventory</li>
            </div>
            <div>
              <li>Apply Online</li>
            </div>
            <div className={` ${pathname === "/About" ? "active-link" : ""}`}>
              <Link href="/About">
                <li>About Us</li>
              </Link>
            </div>
            <div className={` ${pathname === "/Contact" ? "active-link" : ""}`}>
              <Link href="/Contact">
                <li>Contact Us</li>
              </Link>
            </div>
          </div>

          <div className="search-bar" onClick={searchHandler}>
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </ul>
      </MainNav>
      <MobileNav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo.src} className="logo" />
            <button className="nav-toggle" onClick={navToggler}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="links-container" ref={linksContainer}>
            <ul className="links" ref={links}>
              <div className={` ${pathname === "/" ? "active-link" : ""}`}>
                <Link href="/">
                  <li>Home</li>
                </Link>
              </div>
              <li>Inventory</li>
              <li>Apply Online</li>
              <div className={` ${pathname === "/About" ? "active-link" : ""}`}>
                <Link href="/About">
                  <li>About Us</li>
                </Link>
              </div>
              <div
                className={` ${pathname === "/Contact" ? "active-link" : ""}`}
              >
                <Link href="/Contact">
                  <li>Contact Us</li>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </MobileNav>
    </>
  );
};

const NavBar = styled.nav`
  padding: 0rem 2rem;
  @media screen and (max-width: 765px) {
    display: none;
  }
  .nav-content {
    padding: 0.7rem 0.4rem;
    .logo {
      img {
        width: 300px;
        height: 50px;
        object-fit: contain;
      }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items {
      display: flex;
      align-items: center;
      .items {
        padding-left: 2rem;
      }
      .items.first-item {
        display: flex;
        align-items: center;
        .icon {
          padding-right: 1rem;
        }
      }
      .items.icon-item {
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
          color: #ffffff;
        }
      }
    }
  }
`;

const MainNav = styled.div`
  color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 99;
  @media screen and (max-width: 765px) {
    display: none;
  }

  .nav-contents {
    background-color: #303030;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    .nav-lists {
      display: flex;
    }
    li {
      padding: 1rem;
      cursor: pointer;
    }
    .active-link {
      background-color: #3367fc;
    }
    .search-bar {
      padding-right: 1.5rem;
      cursor: pointer;
    }
  }
`;

const MobileNav = styled.nav`
  @media screen and (min-width: 765px) {
    display: none;
  }
  .nav-center {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #ffffff;
    z-index: 99;
    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      .nav-toggle {
        font-size: 1.5rem;
        background: transparent;
        border-color: transparent;
        cursor: pointer;
      }
      .logo {
        height: 50px;
        width: 200px;
        object-fit: contain;
      }
    }
    .links-container {
      height: 0px;
      overflow: hidden;
      transition: all 0.3s ease-out;

      .links {
        padding: 0;
        text-align: center;
        li {
          padding: 0.75rem 0;
          cursor: pointer;
        }
        .active-link {
          background-color: #3367fc;
          color: #ffffff;
        }
      }
    }
  }
`;
export default Nav;
