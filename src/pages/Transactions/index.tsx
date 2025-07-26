import { TransactionContext } from "../../hooks/useTransactions";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";

import { 
  TransactionsTable,
  TransactionsTableMoney,
  TrasactionsTableContainer 
} from "./styles";

import { DateFormatter, PriceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";


export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (transaction) => {
    return transaction.transactions
  })

  return (
    <div>
      <Header/>
      <Summary/>
      <SearchForm/>
      <TransactionsTable>
        <TrasactionsTableContainer>
          <tbody>
            {
              transactions.map(transaction => (
              <tr key={transaction.id}>
                <td width={"50%"}>{transaction.description}</td>
                <td>
                  <TransactionsTableMoney variant={transaction.type}>
                    {transaction.type == 'outcome' && '- '}
                    {PriceFormatter.format(transaction.price)}
                  </TransactionsTableMoney>
                </td>
                <td>{transaction.category}</td>
                <td>{DateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
              ))
            }
          </tbody>
        </TrasactionsTableContainer>
      </TransactionsTable>
    </div>
  )
}