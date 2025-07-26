import { createContext } from "use-context-selector";

import type { TransactionType } from "../contexts/TransactionsContext";

export const TransactionContext = createContext({} as TransactionType)