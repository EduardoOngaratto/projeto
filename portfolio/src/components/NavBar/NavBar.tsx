import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly"
}));

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const NavBar = () => {
  return (
    <>
      <AppBar position="absolute">
        <StyledToolBar>
          <MenuItem onClick={() => scrollToSection("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollToSection("projects")}>Projects</MenuItem>
          <MenuItem onClick={() => scrollToSection("experience")}>Experience</MenuItem>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default NavBar;
