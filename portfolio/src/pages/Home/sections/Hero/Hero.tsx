import { Box, Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/Eduardo.png";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Grid from "@mui/material/Grid";
import StyledButton from "../../../../components/styledButton/styledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up('xs')]: { // <= mobile
    paddingTop: "100px"
  },
  [theme.breakpoints.up('md')]: { // >= mobile
    paddingTop: "0px"
  }
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/curriculo.pdf"; 
    link.download = "curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const handleContact = () => {
  window.location.href = "mailto:eduardoongaratt@gmail.com";
};

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
              paddingBottom={2}
              style={{ fontSize: "4.2rem" }}
            >
              Eduardo Ongaratto
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
            >
              I'm a Back-End Developer
            </Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} paddingTop={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={handleDownload}>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>

              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={handleContact}>
                  <MailOutlineIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
