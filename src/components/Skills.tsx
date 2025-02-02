import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiStyledcomponents,
  SiArduino,
  SiVite,
} from "react-icons/si";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #282c34;
  color: white;
`;

const SkillsList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Skill = styled.div`
  margin: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  transition-duration: 0.3s;
`;

const HoveredSkillNihongo = styled.div`
  margin-top: 20px;
  font-size: 36px;
  color: yellow;
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;
`;
const HoveredSkillEigo = styled.div`
  margin-top: 20px;
  font-size: 36px;
  color: white;
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Tyottodekiru = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
`;

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleMouseEnter = (skill: string) => {
    setHoveredSkill(skill);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <SkillsContainer>
      <h1>Skills</h1>
      <SkillsList>
        <Skill
          onMouseEnter={() => handleMouseEnter("HTML")}
          onMouseLeave={handleMouseLeave}
        >
          <FaHtml5 size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("CSS")}
          onMouseLeave={handleMouseLeave}
        >
          <FaCss3 size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("JavaScript")}
          onMouseLeave={handleMouseLeave}
        >
          <FaJs size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("C")}
          onMouseLeave={handleMouseLeave}
        >
          <SiC size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("C++")}
          onMouseLeave={handleMouseLeave}
        >
          <SiCplusplus size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("Arduino")}
          onMouseLeave={handleMouseLeave}
        >
          <SiArduino size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("Styled Components")}
          onMouseLeave={handleMouseLeave}
        >
          <SiStyledcomponents size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("React")}
          onMouseLeave={handleMouseLeave}
        >
          <FaReact size={80} />
        </Skill>
      </SkillsList>
      <SkillsList>
        <Skill
          onMouseEnter={() => handleMouseEnter("Node.js")}
          onMouseLeave={handleMouseLeave}
        >
          <FaNodeJs size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("Vite")}
          onMouseLeave={handleMouseLeave}
        >
          <SiVite size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("Git")}
          onMouseLeave={handleMouseLeave}
        >
          <FaGitAlt size={80} />
        </Skill>
        <Skill
          onMouseEnter={() => handleMouseEnter("GitHub")}
          onMouseLeave={handleMouseLeave}
        >
          <FaGithub size={80} />
        </Skill>
      </SkillsList>
      <Tyottodekiru>
        {hoveredSkill && (
          <>
            <HoveredSkillNihongo>ワタシハ {hoveredSkill} チョットデキル</HoveredSkillNihongo>
            <HoveredSkillEigo>I can develop {hoveredSkill} a little</HoveredSkillEigo>
          </>
        )}
      </Tyottodekiru>
    </SkillsContainer>
  );
}
