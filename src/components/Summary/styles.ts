import styled, { css, keyframes } from "styled-components";

const SummaryCardAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.25rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  >header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme['gray-300']};
  }

  padding: 1.5rem 1.5rem 1.5rem 2rem;
  background: ${props => props.theme['gray-600']};
  border-radius: 6px;

  strong {
    font-weight: 700;
    font-size: 2rem;
    line-height: 140%;
  }

  ${props => props.variant == 'green' && css`
    background-color: ${props.theme['green-700']};
  `}
  
  animation: ${SummaryCardAnimation} ease-in 850ms ;
`

