import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { useGlobalContext } from "../../context";

const Edit = () => {
  const { closeModal, editBudget, resetBudget, getSelectedBudget } =
    useGlobalContext();

  const [textField, setTextField] = useState("");
  const [amountField, setAmountField] = useState("");
  const [error, setError] = useState(false);

  const budgetData = getSelectedBudget();

  const handleTitleChange = (evt) => {
    setTextField(evt.target.value);
  };

  const handleAmountChange = (evt) => {
    setAmountField(evt.target.value);
  };

  const handleSubmit = () => {
    if (textField.trim() && amountField.trim()) {
      editBudget(textField, amountField);
      setError(false);
      closeModal();
    } else {
      setError(true);
    }
  };

  const handleReset = () => {
    resetBudget();
    closeModal();
  };

  useEffect(() => {
    setTextField(budgetData.name);
    setAmountField(budgetData.amount);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogTitle
          sx={{ fontSize: "14px", color: "rgb(25, 118, 210)" }}
          onClick={handleReset}
        >
          Reset
        </DialogTitle>
      </Box>
      <DialogContent>
        <div>
          <TextField
            autoFocus
            margin="dense"
            id="newName"
            label="New Name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={budgetData?.name}
            inputProps={{ maxLength: 11 }}
            onChange={handleTitleChange}
          />

          <TextField
            margin="dense"
            id="newAmount"
            label="New Amount"
            type="number"
            fullWidth
            variant="standard"
            defaultValue={budgetData?.amount}
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

export default Edit;
