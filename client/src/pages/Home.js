import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import illustration from "../assets/illustration.png";
import Logo from "../assets/logo.svg";

import { Button } from "antd";

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  img {
    width: 40%;
  }
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: 500;
`;

const GetStartedButton = styled(Button)`
  background: black;
  border-radius: 4px;
  color: white;
  border: none;

  margin-top: 20px;

  :hover {
    color: white;
    background: black;
  }
`;

const DescriptionWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  return (
    <PageContainer>
      <DescriptionWrapper>
        <img src={Logo} alt="Logo" />
        <Title>Open Dataset Visualizer</Title>
        <span>
          Able to provide useful visualizations for better understanding of your
          data.
        </span>
        <Link to="main">
          <GetStartedButton size="large">Get Started</GetStartedButton>
        </Link>
      </DescriptionWrapper>
      <img src={illustration} alt="React Logo" />
    </PageContainer>
  );
}

export default Home;
