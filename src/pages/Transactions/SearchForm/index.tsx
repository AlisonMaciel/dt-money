import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";


import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../../../hooks/useTransactions";
import { useEffect } from "react";

const searchFormSchema = z.object({
  query: z.string()
})

interface SearchFormInputs {
  query: string
}

export function SearchForm() {
  const loadTransactions = useContextSelector(TransactionContext, (transaction) => {
    return transaction.loadTransactions
  })
  const {register, handleSubmit, watch} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    values: {
      query: ""
    }
  })

  const queryValue = watch("query")
  
  async function handleSearchForm(data: SearchFormInputs) {
    await loadTransactions(data.query)
  }

  useEffect(() => {
    const clearQuery = setTimeout(() => {
      if (queryValue.trim() === "") {
        loadTransactions("")
      }
    }, 300)

    return () => clearTimeout(clearQuery)
  }, [loadTransactions, queryValue])

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchForm)}>
      <input 
        {...register("query")}
        type="text" 
        placeholder="Busque por transações"
      />
      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}