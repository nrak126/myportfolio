import styled from "styled-components";
import fuIcon from "../assets/images/fu_icon.jpg";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background-color: #282c34;
  color: white;
`;

const Img = styled.img`
  margin: 0 auto;
  width: 30%;
  border-radius: 20%;
`;

const Text = styled.p`
  text-align: left;
`;

const Texts = styled.div`
  margin: 0 auto;
  width: 40%;
`;

export function About() {
  return (
    <AboutContainer>
      <Img src={fuIcon} alt="fu" />
      <h1>はじめまして！</h1>
      <Texts>
        <Text>愛知工業大学コンピュータシステム専攻一年の矢部大智です。</Text>
        <Text>2006/01/26生まれ、福井県出身です。</Text>
        <Text>今年の目標はハッカソンにいっぱい出ることです。</Text>
        <Text>よろしくお願いします！！！</Text>
      </Texts>
    </AboutContainer>
  );
}
