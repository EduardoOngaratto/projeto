import usuarioEeventosImg from "../../../../assets/images/usuarioEeventos.png";
import processamentoDeimagens from "../../../../assets/images/processamentoDeImagens.png";
import cinemaAPI from "../../../../assets/images/cinemaAPI.jpg";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
  Grid,
  Button,
} from "@mui/material";

const Section = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(10, 4),
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  fontWeight: 600,
  textAlign: "center",
  color: theme.palette.primary.contrastText,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
}));

const TechStack = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
}));

const Projects = () => {
  return (
    <Section id="projects">
      <Title variant="h3">Projects</Title>
      <Grid container spacing={4} justifyContent="center">
        {/* Projeto CRUD de Usuários e Eventos */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardMedia
              component="img"
              height="160"
              image={usuarioEeventosImg}
              alt="Projeto CRUD de Usuários e Eventos"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Projeto CRUD de Usuários e Eventos
              </Typography>
              <Typography variant="body2">
                Este projeto é uma aplicação backend desenvolvida com Express.js
                e TypeScript que implementa um CRUD para Usuários e Eventos,
                incluindo autenticação JWT para segurança. Os dados são
                armazenados em um banco de dados MongoDB. O projeto é implantado
                em uma instância EC2 da AWS.
              </Typography>
              <TechStack>Tecnologias: TypeScript, Node.js, AWS</TechStack>
              <Box mt={2}>
                <Button
                  variant="outlined"
                  href="https://github.com/EduardoOngaratto/PbMaioDes3_EduardoOngaratto"
                  target="_blank"
                  fullWidth
                >
                  Ver Código
                </Button>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Projeto Processamento de Imagens */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardMedia
              component="img"
              height="160"
              image={processamentoDeimagens}
              alt="Projeto de Processamento de Imagens"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Projeto de Processamento de Imagens
              </Typography>
              <Typography variant="body2">
                Este projeto é uma aplicação desenvolvida em C# com Windows
                Forms, que realiza diversas operações de processamento digital
                de imagens, incluindo operações aritméticas, lógicas,
                geométricas, de intensidade e histogramas. Além disso, permite a
                visualização comparativa entre imagens originais e processadas.
              </Typography>
              <TechStack>Tecnologias: C#</TechStack>
              <Box mt={2}>
                <Button
                  variant="outlined"
                  href="https://github.com/EduardoOngaratto/ImageLoader"
                  target="_blank"
                  fullWidth
                >
                  Ver Código
                </Button>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Async-Masters / Cinema Ticketing API */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardMedia
              component="img"
              height="160"
              image={cinemaAPI}
              alt="Async-Masters / Cinema Ticketing API"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Async-Masters / Cinema Ticketing API
              </Typography>
              <Typography variant="body2">
                Este projeto consiste no desenvolvimento de uma API REST para a
                gestão da bilheteria de um cinema. A API oferece funcionalidades
                para cadastro, consulta, atualização e remoção de filmes,
                sessões e ingressos, utilizando tecnologias modernas e boas
                práticas de desenvolvimento.
              </Typography>
              <TechStack>
                Tecnologias: Node.js, TypeScript, Express.js, SQLite, TypeORM,
                Swagger
              </TechStack>
              <Box mt={2}>
                <Button
                  variant="outlined"
                  href="https://github.com/AsyncMasters/Async-Masters"
                  target="_blank"
                  fullWidth
                >
                  Ver Código
                </Button>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Projects;
