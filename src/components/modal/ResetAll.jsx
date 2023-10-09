import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import { useGlobalContext } from "../../context";

const ResetAll = () => {
  const { closeModal, resetAll } = useGlobalContext();

  const handleSubmit = () => {
    resetAll();
    closeModal();
  };

  return (
    <>
      <DialogTitle>Reset All</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Would you like to reset all budgets to original amounts?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
    </>
  );
};

export default ResetAll;
