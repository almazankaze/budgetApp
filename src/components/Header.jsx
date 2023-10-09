import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header({ title }) {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, fontWeight: "bold", padding: "10px" }}
            variant="h4"
            component="div"
            align="center"
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
