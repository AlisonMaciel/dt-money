import styled from "styled-components";

export const TransactionsTable = styled.main`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto 4rem;
  padding: 0 1.25rem;
`

export const TrasactionsTableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: #29292E;
  }
  
  td:first-child {
    border-radius: 5px 0px 0px 5px;
  }

  td:last-child {
    border-radius: 0px 5px 5px 0px ;
  }
`

interface TransactionsTableMoneyProps {
  variant: 'income' | 'outcome'
}

export const TransactionsTableMoney = styled.span<TransactionsTableMoneyProps>`
  color: ${props => props.variant == 'income' ? 
  props.theme['green-300'] : props.theme['red-300']};

`
