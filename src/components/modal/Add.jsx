import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useGlobalContext } from "../../context";

const Add = () => {
  const { addBudget, closeModal } = useGlobalContext();
  const [textField, setTextField] = useState("");
  const [amountField, setAmountField] = useState("");
  const [error, setError] = useState(false);

  const handleTitleChange = (evt) => {
    setTextField(evt.target.value);
  };

  const handleAmountChange = (evt) => {
    setAmountField(evt.target.value);
  };

  const handleSubmit = () => {
    if (textField.trim() && amountField.trim()) {
      addBudget(textField, amountField);
      setError(false);
      closeModal();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <DialogTitle>Add</DialogTitle>
      <DialogContent>
        <div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            inputProps={{ maxLength: 11 }}
            onChange={handleTitleChange}
          />

          <TextField
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleAmountChange}
          />

          {error && (
            <span style={{ fontSize: "12px", color: "red" }}>
              Please enter both a name and amount
            </span>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
    </>
  );
};

export default Add;
