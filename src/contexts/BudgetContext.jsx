import { createContext, useContext, useState } from "react";

//creo il contesto
const BudgetContext = createContext();

//definisco il provider
const BudgetProvider = ({ children }) => {

  //variabile di stato
  const [budgetMode, setBudgetMode] = useState(false);

  //funzione che effettua il toggle
  const toggleBudgetMode = () => {
    setBudgetMode(!budgetMode);
  }

  const value = {
    budgetMode,
    setBudgetMode
  }

  return (
    <BudgetContext.Provider value={{ value }}>
      {children}
    </BudgetContext.Provider>
  )

};

//creo un hook per utilizzare il contesto
const useBudgetMode = () => {
  const context = useContext(BudgetContext);
  return context;
};

export { BudgetProvider, useBudgetMode };