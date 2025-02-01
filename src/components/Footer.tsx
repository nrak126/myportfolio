import styled from "styled-components";
import { Flex, Text } from "@radix-ui/themes";

const FooterContainer = styled(Flex)`
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: #506650;
  color: white;
`;

export function Footer() {
  return (
    <FooterContainer as="footer">
      <Text>© 2025 My Portfolio</Text>
    </FooterContainer>
  );
}