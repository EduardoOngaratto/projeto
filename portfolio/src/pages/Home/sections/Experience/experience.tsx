import { Box, Typography, styled, Grid, Avatar } from "@mui/material";

const Section = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(10, 4),
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  textAlign: "center",
  fontWeight: 600,
  color: theme.palette.primary.contrastText,
}));

const ExperienceItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  boxShadow: theme.shadows[5],
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "flex-start",
  transition: "transform 0.3s",
  height: "100%",
  color: theme.palette.text.primary,

  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const CompanyInfo = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

const Competencies = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  marginTop: theme.spacing(1),
  color: theme.palette.text.primary, 
}));

const Experience = () => {
  return (
    <Section id="experience">
      <Title variant="h3">Experience</Title>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <ExperienceItem>
            <Avatar
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQHvZ6G6c5uCww/company-logo_100_100/0/1644419037213?e=2147483647&v=beta&t=FihNODGfK9fn7PSI-7fRaMt1V3spD8YkW0-srPvXqLY"
              alt="System Sistemas de Gestão"
              sx={{ width: 64, height: 64, borderRadius: 1 }}
            />
            <CompanyInfo>
              <Typography variant="h5">Desenvolvedor Web Java</Typography>
              <Typography variant="subtitle2" gutterBottom>
                System Sistemas de Gestão · Tempo integral
              </Typography>
              <Typography variant="body2" mb={1}>
                Fev de 2025 - o momento · 5 meses<br />
                Erechim, Rio Grande do Sul, Brasil · Presencial
              </Typography>
              <Competencies>
                Java, HTML, CSS, JavaScript, JSF, JPA, Firebird, 
                SQL.
              </Competencies>
            </CompanyInfo>
          </ExperienceItem>
        </Grid>

        <Grid item xs={12} md={6}>
          <ExperienceItem>
            <Avatar
              src="https://media-exp1.licdn.com/dms/image/C560BAQHEtwQhwaf9zA/company-logo_100_100/0/1658305249652?e=2147483647&v=beta&t=Ak8qHeY7uLkNJKMk03ld5-tdU2QvUKh1uXjpqTR7rn8"
              alt="Compass UOL"
              sx={{ width: 64, height: 64, borderRadius: 1 }}
            />
            <CompanyInfo>
              <Typography variant="h5">Estagiário de desenvolvimento Back-End</Typography>
              <Typography variant="subtitle2" gutterBottom>
                Compass UOL · Estágio
              </Typography>
              <Typography variant="body2" mb={1}>
                Mai de 2024 - Out de 2024 · 6 meses<br />
                Erechim, Rio Grande do Sul, Brasil · Remota
              </Typography>
              <Competencies>
                Back-End, Node.js, AWS, MongoDB, SQLite,
                Docker, TypeScript.
              </Competencies>
            </CompanyInfo>
          </ExperienceItem>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Experience;
