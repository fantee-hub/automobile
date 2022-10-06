import { Audio } from "react-loader-spinner";
import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  position: fixed;
  z-index: 1700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: flex;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default Loader;
