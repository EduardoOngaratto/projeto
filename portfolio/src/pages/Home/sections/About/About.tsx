import { Typography, styled, Box } from "@mui/material";
import {
  FaJava,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaDatabase,
  FaReact,
} from "react-icons/fa";

const Section = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(10, 4),
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

const Highlight = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
}));

const TechIconsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  display: "flex",
  gap: theme.spacing(4),
  justifyContent: "center",
  flexWrap: "wrap",
}));

const TechIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "2.5rem",
  color: theme.palette.text.primary,
  transition: "color 0.3s",
  cursor: "default",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const IconLabel = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontSize: "0.85rem",
  fontWeight: 600,
  color: theme.palette.text.secondary,
}));

const About = () => {
  return (
    <Section id="about">
      <Typography variant="h3" gutterBottom>
        About
      </Typography>

      <Box maxWidth="800px">
        <Typography variant="h6" paragraph>
          Sou um desenvolvedor <Highlight>Back-End</Highlight> com forte foco em
          soluções robustas, limpas e escaláveis.
        </Typography>

        <Typography variant="body1" paragraph>
          Atualmente trabalho com tecnologias como <Highlight>Java</Highlight>,{" "}
          <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>,{" "}
          <Highlight>JavaScript</Highlight>, <Highlight>JSF</Highlight>,{" "}
          <Highlight>JPA</Highlight> e <Highlight>Firebird</Highlight> como desenvolvedor WEB, atuando
          principalmente em sistemas empresariais e aplicações críticas para o
          negócio.
        </Typography>

        <Typography variant="body1" paragraph>
          Também já trabalhei com <Highlight>Node.js</Highlight> e
          <Highlight> MongoDB</Highlight>, o que me proporcionou uma visão mais
          ampla sobre desenvolvimento web moderno e arquiteturas baseadas em
          JavaScript fullstack.
        </Typography>

        <Typography variant="body1">
          Tenho paixão por aprender continuamente, entender a fundo as
          tecnologias com as quais trabalho e buscar sempre a melhor solução
          técnica possível.
        </Typography>
      </Box>

      <TechIconsContainer>
        <TechIcon title="Java">
          <FaJava />
          <IconLabel>Java</IconLabel>
        </TechIcon>

        <TechIcon title="HTML5">
          <FaHtml5 />
          <IconLabel>HTML5</IconLabel>
        </TechIcon>

        <TechIcon title="CSS3">
          <FaCss3Alt />
          <IconLabel>CSS3</IconLabel>
        </TechIcon>

        <TechIcon title="JavaScript">
          <FaJs />
          <IconLabel>JavaScript</IconLabel>
        </TechIcon>

        <TechIcon title="Node.js">
          <FaNodeJs />
          <IconLabel>Node.js</IconLabel>
        </TechIcon>

        <TechIcon title="MongoDB">
          <FaDatabase />
          <IconLabel>MongoDB</IconLabel>
        </TechIcon>

        <TechIcon title="React">
          <FaReact />
          <IconLabel>React</IconLabel>
        </TechIcon>
      </TechIconsContainer>
    </Section>
  );
};

export default About;
