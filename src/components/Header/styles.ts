import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group"

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['gray-900']};
  padding: 2.5rem 0 7.6rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;

  margin: 0 auto;
  padding: 0 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InputNoArrow = styled.input`
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`

export const NewButtonContainer = styled.button`
  padding: 12px 1.25rem;

  color: ${props => props.theme['gray-100']};
  background: ${props => props.theme['green-500']};
  border-radius: 6px;

  font-weight: bold;
  line-height: 160%;

  border: none;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme['green-700']};
  }

`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${props => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${props => props.theme['gray-900']};
      color: ${props => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${props => props.theme['gray-500']};
      }
    }

  }

  button:disabled {
    opacity: 0.6;
  }

  button[type="submit"] {
    height: 58px;
    border: 0;
    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;

    &:not(:disabled):hover {
      background-color: ${props => props.theme['green-700']};
      transition: background-color 0.2s;
    }
  }

`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  line-height: 0;
  top: 1.25rem;
  right: 1.25rem;
  color: ${props => props.theme['gray-500']};
  cursor: pointer;
`

interface EntryAndExitButtonProps {
  variant: 'green' | 'red'
}

export const EntryAndExitButton = styled(RadioGroup.Root)`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-top: 0.5rem;

`

export const ButtonProhibited = styled(RadioGroup.Item)<EntryAndExitButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  gap: 8px;
  width: 100%;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-700"]};
  color: ${props => props.theme["gray-300"]};
  border: none;
  cursor: pointer; 

  transition: background-color 0.3s, color 0.2s;

  &:hover {
    background-color: ${props => props.theme["gray-600"]};
  }
  svg {
    color:
      ${props => props.variant == 'green' ? 
        props.theme["green-300"] : props.theme["red-300"]};
 }

  &[data-state="checked"] {
    background-color: ${props => props.theme["green-700"]};
    color: ${props => props.theme.white};
    svg {
      color: ${props => props.theme.white};
    }
  }
`
export const ButtonExit = styled(RadioGroup.Item)<EntryAndExitButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  gap: 8px;
  width: 100%;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-700"]};
  color: ${props => props.theme["gray-300"]};
  border: none;
  cursor: pointer; 

  transition: background-color 0.3s, color 0.2s;

  &:hover {
    background-color: ${props => props.theme["gray-600"]};
  }
  svg {
    color:
      ${props => props.variant == 'green' ? 
        props.theme["green-300"] : props.theme["red-300"]};
 }
  &[data-state="checked"] {
    background-color: ${props => props.theme["red-800"]};
    color: ${props => props.theme.white};
    svg {
      color: ${props => props.theme.white};
    }
  }
`


