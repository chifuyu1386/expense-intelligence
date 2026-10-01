import { createContext, useContext, useReducer } from "react";
import { initialTransactions } from "../data/initialTransactions";
import { transactionReducer } from "../reducers/transactionReducer";

export const TransactionContext = createContext(null);

export function TransactionProvider ({children}) {
  const [transactions, dispatch] = useReducer(
    transactionReducer,
    initialTransactions
  );

  return (
    <TransactionContext.Provider value={{transactions, dispatch}}>
      {children}
    </TransactionContext.Provider>
  )
}