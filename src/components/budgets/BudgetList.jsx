import Box from "@mui/material/Box";
import List from "@mui/material/List";
import BudgetItem from "./BudgetItem";
import { useGlobalContext } from "../../context";

function BudgetList() {
  const { budgets } = useGlobalContext();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List
        sx={{
          backgroundColor: "#e9ecef",
          pt: "80px",
          pb: "50px",
          width: "100%",
          maxWidth: "600px",
          height: "100vh",
        }}
      >
        {budgets.map((budget) => {
          return (
            <BudgetItem
              key={budget.id}
              id={budget.id}
              name={budget.name}
              progress={budget.progress}
              amount={budget.saved}
            />
          );
        })}
      </List>
    </Box>
  );
}

export default BudgetList;
