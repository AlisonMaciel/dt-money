import { HeaderContainer, HeaderContent, InputNoArrow, NewButtonContainer } from "./styles";

import DtMoney from '../../assets/DT-Money.svg'

import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../../hooks/useTransactions";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import * as Dialog from "@radix-ui/react-dialog";

import { 
  ButtonExit, 
  ButtonProhibited, 
  CloseButton, 
  Content, 
  EntryAndExitButton, 
  Overlay 
} from "./styles";

import { 
  X,
  ArrowCircleUp,
  ArrowCircleDown
} from "@phosphor-icons/react";
import { useState } from "react";

const newTransactionModalSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"])
})

type NewTransactionsModalInputs = z.infer<typeof newTransactionModalSchema>


export function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const createTransactions = useContextSelector(TransactionContext, (transaction) => {
    return transaction.createTransactions
  })
    
  const {
    control,
    register, 
    handleSubmit, 
    formState:{isSubmitting},
    reset
  } = useForm<NewTransactionsModalInputs>(
    {
      resolver: zodResolver(newTransactionModalSchema),
      defaultValues: {
        category: "",
        description: "",
        price: undefined,
        type: "income"
      }
    }
  )
  
  async function handleCreateNewTransaction(data: NewTransactionsModalInputs) {
    const {category, description, price, type} = data
  
    await createTransactions({
      category,
      description,
      price,
      type,
      createdAt: new Date()
    })
    reset()
    setIsOpenModal(!isOpenModal)
  }

  function handleModalIsClose() {
    setIsOpenModal(!isOpenModal) 
    reset()
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={DtMoney} alt="" />
        <Dialog.Root open={isOpenModal}>
          <Dialog.Trigger asChild>
            <NewButtonContainer onClick={handleModalIsClose}>
              Nova transação
            </NewButtonContainer>
          </Dialog.Trigger>
          <Dialog.Portal >
            <Overlay/>
            <Content>
              <CloseButton onClick={() => setIsOpenModal(!isOpenModal)}>
                <X size={24} />
              </CloseButton>
          
              <Dialog.Title>
                Nova Transação
              </Dialog.Title>
          
              <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                <input 
                  {...register("description")} 
                  type="text" 
                  placeholder="Descrição" 
                  required
                />
                <InputNoArrow 
                  {...register("price", {valueAsNumber:true})} 
                  type="number"
                  placeholder="Preço" 
                  required
                />
                <input 
                  {...register("category")} 
                  type="text" 
                  placeholder="Categoria" 
                  required
                />
          
                <Controller
                  name="type"
                  control={control} 
                  render={({field}) => {
                    return (
                      <EntryAndExitButton onValueChange={field.onChange}>
                        <ButtonProhibited variant="green" value="income">
                          <ArrowCircleUp size={24}/>
                            Entrada
                        </ButtonProhibited>
                        <ButtonExit variant="red" value="outcome">
                          <ArrowCircleDown size={24}/>
                            Saída
                        </ButtonExit>
                      </EntryAndExitButton>
                    )
                  }}
                />  
                <button type="submit" disabled={isSubmitting}>
                  Cadastrar
                </button>
              </form>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}