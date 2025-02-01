import styled from "styled-components";
import { Flex, Text } from "@radix-ui/themes";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeaderContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #282c34;
  color: white;
`;

const LinkContainer = styled(Flex)`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-direction: row;
  background-color: #282c34;
  color: white;
`;

const Title = styled(Text)`
  font-size: 48px;
  margin-bottom: 16px;
`;

const IconLink = styled.a`
  color: white;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export function Header() {
  return (
    <HeaderContainer as="header" role="banner">
      <LinkContainer>
        <IconLink
          href="https://github.com/nrak126"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </IconLink>
        <IconLink
          href="https://x.com/yabe_ait"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={20} />
        </IconLink>
      </LinkContainer>
      <Title>portfolio</Title>
    </HeaderContainer>
  );
}
