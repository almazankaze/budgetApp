import React, { useState, useEffect, useContext } from "react";
import currency from "currency.js";

const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("budgets");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("budgets")));
  } else {
    return [];
  }
};

const initialState = {
  budgets: getLocalStorage(),
  selectedBudget: null,
};

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState(initialState);
  const [modalType, setModalType] = useState("");

  const selectBudget = (id) => {
    setState({ ...state, selectedBudget: id });
  };

  const openModal = (type, id = null) => {
    setIsModalOpen(true);
    setModalType(type);
    selectBudget(id);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addBudget = (name, amount) => {
    const saved = currency(amount).format();
    const newBudget = {
      id: new Date().getTime().toString(),
      name,
      amount,
      spent: 0.0,
      saved,
      progress: 0,
    };

    setState({ ...state, budgets: [...state.budgets, newBudget] });
  };

  const removeBudget = () => {
    const newBudgets = state.budgets.filter(
      (item) => item.id !== state.selectedBudget
    );
    setState({ ...state, budgets: newBudgets, selectedBudget: null });
  };

  const spendBudget = (spent) => {
    const newBudgets = state.budgets.map((item) => {
      if (item.id === state.selectedBudget) {
        const totalSpent = currency(item.spent).add(spent).value;
        const saved = currency(item.amount).subtract(totalSpent).format();
        let progress = Math.floor((totalSpent / item.amount) * 100);

        if (progress >= 100) progress = 100;

        return {
          ...item,
          spent: totalSpent,
          saved,
          progress,
        };
      }
      return item;
    });

    setState({ ...state, budgets: newBudgets, selectedBudget: null });
  };

  const editBudget = (name, amount) => {
    const updatedBudgets = state.budgets.map((item) => {
      if (item.id === state.selectedBudget) {
        const saved = currency(amount).subtract(item.spent).format();
        let progress = Math.floor((item.spent / amount) * 100);

        if (progress >= 100) progress = 100;
        return {
          ...item,
          name,
          amount,
          saved,
          progress,
        };
      }
      return item;
    });

    setState({ ...state, budgets: updatedBudgets, selectedBudget: null });
  };

  const resetBudget = () => {
    const updatedBudgets = state.budgets.map((item) => {
      if (item.id === state.selectedBudget) {
        const saved = currency(item.amount).format();
        return {
          ...item,
          spent: 0.0,
          saved,
          progress: 0,
        };
      }
      return item;
    });

    setState({ ...state, budgets: updatedBudgets, selectedBudget: null });
  };

  const clearAll = () => {
    setState({ ...state, budgets: [], selectedBudget: null });
  };

  const resetAll = () => {
    const updatedBudgets = state.budgets.map((item) => {
      const saved = currency(item.amount).format();
      return {
        ...item,
        spent: 0.0,
        saved,
        progress: 0,
      };
    });

    setState({ ...state, budgets: updatedBudgets, selectedBudget: null });
  };

  const getSelectedBudget = () => {
    const budget = state.budgets.find(
      (item) => item.id === state.selectedBudget
    );
    return budget;
  };

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(state.budgets));
  }, [state.budgets]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        isModalOpen,
        modalType,
        openModal,
        closeModal,
        addBudget,
        removeBudget,
        spendBudget,
        editBudget,
        resetBudget,
        clearAll,
        resetAll,
        getSelectedBudget,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
