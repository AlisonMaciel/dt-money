import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 2rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0 1.25rem;

  input {
    flex: 1;
    border-radius: 6px;
    background-color: ${props => props.theme['gray-900']};
    border: none;    
    padding: 1rem;
    color: ${props => props.theme['gray-100']};
    &::placeholder {
      color:  ${props => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 2rem;

    border: none;
    background-color: transparent;
    color: ${props => props.theme['green-300']};
    border: 1px solid ${props => props.theme['green-300']};
    border-radius: 6px;

    transition: background-color 0.2s, color 0.2s, border 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme['green-500']};
      border: 1px solid ${props => props.theme['green-500']};
      color: ${props => props.theme['white']};
    }
  }
`