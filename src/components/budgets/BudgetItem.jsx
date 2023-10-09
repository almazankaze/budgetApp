import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ProgressBar from "../ProgressBar";
import { useGlobalContext } from "../../context";

const BudgetItem = ({ id, name, progress, amount }) => {
  const { openModal } = useGlobalContext();

  return (
    <ListItem component="div" sx={{ backgroundColor: "white", mb: 2 }}>
      <Box flexGrow={1}>
        <Box sx={{ display: "flex" }}>
          <ListItemText
            primary={name}
            primaryTypographyProps={{ fontSize: "18px", fontWeight: "bold" }}
            sx={{ flex: "6" }}
          />
          <ListItemText
            primary={amount}
            primaryTypographyProps={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "green",
            }}
            sx={{ cursor: "pointer" }}
            onClick={() => openModal("Spend", id)}
          />
        </Box>
        <ProgressBar progress={progress} />
      </Box>

      <IconButton
        edge="end"
        aria-label="edit"
        sx={{ mr: 0.5, ml: 1 }}
        onClick={() => openModal("Edit", id)}
      >
        <EditOutlinedIcon sx={{ color: "orange" }} />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => openModal("Remove", id)}
      >
        <DeleteOutlinedIcon sx={{ color: "red" }} />
      </IconButton>
    </ListItem>
  );
};

export default BudgetItem;
