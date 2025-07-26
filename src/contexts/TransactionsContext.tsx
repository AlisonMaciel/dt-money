import { 
  useState,
  useEffect,
  useCallback
} from "react";

import type { ReactNode } from "react";

import { api } from "../lib/axios";

import { TransactionContext } from "../hooks/useTransactions";

interface TransactionsProps {
  id: number,
  description: string,
  price: number,
  type: "income" | "outcome",
  category: string
  createdAt: string
}

interface TransactionsInputProps {
  description: string,
  price: number,
  type: "income" | "outcome",
  category: string
  createdAt: Date
}

export interface TransactionType {
  transactions: TransactionsProps[],
  loadTransactions: (query?: string) => Promise<void>
  createTransactions: (data: TransactionsInputProps) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])
  
    const loadTransactions = useCallback( async (query?: string) => {
      const response = await api.get("transactions",
        {params: {
          description: query
      }})

      setTransactions(response.data)
    }, [])

    const createTransactions = useCallback( async (data: TransactionsInputProps) => {
      const {description, price, type, category, createdAt} = data

      const response = await api.post("transactions", {
        description,
        price,
        type,
        category,
        createdAt
      })

      setTransactions((state) => [...state, response.data])
    }, [])

    useEffect(() => {
      loadTransactions()
    }, [loadTransactions])
    
    return (
      <TransactionContext.Provider value={{
        transactions,
        loadTransactions,
        createTransactions
      }}>
        {children}
      </TransactionContext.Provider>
    )
}
