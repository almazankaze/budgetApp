import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import { useGlobalContext } from "../../context";

const Spend = () => {
  const { closeModal, spendBudget } = useGlobalContext();
  const [amountField, setAmountField] = useState("");
  const [error, setError] = useState(false);

  const handleAmountChange = (evt) => {
    setAmountField(evt.target.value);
  };

  const handleSubmit = () => {
    if (amountField.trim()) {
      spendBudget(amountField);
      setError(false);
      closeModal();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <DialogTitle>Spend</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter total amount you spent?
        </DialogContentText>
        <div>
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
              Please enter amount
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

export default Spend;
