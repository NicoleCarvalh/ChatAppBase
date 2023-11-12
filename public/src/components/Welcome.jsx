import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatIcon from "../assets/chat-icon.svg"; // alterar
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={ChatIcon} alt="" /> 
      <h1>
        Olá, <span>{userName}!</span>
      </h1>
      <h3>Selecione um chat para iniciar.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #029AA4;
  flex-direction: column;
  img {
    height: 20rem;
    margin-bottom: 2rem;
  }
  span {
    color: #045257;
  }
`;
