import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import { useGlobalContext } from "../../context";

const DeleteAll = () => {
  const { closeModal, clearAll } = useGlobalContext();

  const handleSubmit = () => {
    clearAll();
    closeModal();
  };

  return (
    <>
      <DialogTitle>Clear All</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Would you like to remove all your budgets? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
    </>
  );
};

export default DeleteAll;
