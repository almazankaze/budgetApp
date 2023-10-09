import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Header from "./components/Header";
import BudgetList from "./components/budgets/BudgetList";
import Modal from "./components/modal/Modal";
import { useGlobalContext } from "./context";
import "./App.css";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

function App() {
  const { openModal } = useGlobalContext();

  return (
    <React.Fragment>
      <CssBaseline />
      <Modal />
      <Header title={"Budget App"} />
      <BudgetList />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab
            color="secondary"
            aria-label="add"
            onClick={() => openModal("Add")}
          >
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            aria-label="reset all"
            onClick={() => openModal("Reset")}
          >
            <RestartAltIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="delete all"
            onClick={() => openModal("ClearAll")}
          >
            <ClearAllIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default App;
