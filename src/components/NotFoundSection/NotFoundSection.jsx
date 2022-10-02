import React from "react";
import notfound from "../../assets/notfound.gif";
import styled from "@emotion/styled";

const ErrorContainer = styled.div`
  padding-top: 10%;
  margin: 0 auto;
  width: 50%;
`;

const ErrorImage = styled.img`
  width: 100%;
  height: auto;
`;

const NotFoundSection = () => {
  return (
    <>
      <ErrorContainer>
        <ErrorImage src={notfound} />
      </ErrorContainer>
    </>
  );
};

export default NotFoundSection;
