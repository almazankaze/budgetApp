import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import { useGlobalContext } from "../../context";

const Delete = () => {
  const { closeModal, removeBudget } = useGlobalContext();

  const handleSubmit = () => {
    removeBudget();
    closeModal();
  };

  return (
    <>
      <DialogTitle>Remove</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this budget?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
    </>
  );
};

export default Delete;
