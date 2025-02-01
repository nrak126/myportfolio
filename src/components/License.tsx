import styled from "styled-components";

const LicenseContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
  padding: 16px;
  padding-bottom: 100px;
  background-color: #282c34;
  color: white;
`;



export function License() {
  return (
    <LicenseContainer>
		<h1>License</h1>
		<h2>ITパスポート</h2>
		<h2>基本情報技術者</h2>
    </LicenseContainer>
  );
}