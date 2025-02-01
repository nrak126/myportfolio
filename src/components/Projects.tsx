import styled from "styled-components";
import { Flex, Text } from "@radix-ui/themes";

const ProjectsContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #282c34;
  color: white;
`;

export function Projects() {
  return (
    <ProjectsContainer>
      <Text>プロジェクト</Text>
      <Text>ここにプロジェクトの内容を記載します。</Text>
    </ProjectsContainer>
  );
}