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

  return (
    <BudgetContext.Provider value={{
      budgetMode,
      toggleBudgetMode
    }}>
      {children}
    </BudgetContext.Provider>
  )

};

//creo un hook per utilizzare il contesto
const useBudget = () => {
  const context = useContext(BudgetContext);
  return context;
};

export { BudgetProvider, useBudget };