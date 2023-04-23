import { Spinner } from '@chakra-ui/react';
import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

export default function MainButton({
  children,
  isLoading,
  onClick,
}: {
  children: ReactNode;
  isLoading: boolean;
  onClick?: MouseEventHandler;
}) {
  return (
    <StyledButton onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='secondary'
          color='main'
          size='lg'
        />
      ) : (
        children
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  margin: 0.25rem 0;
  height: 100%;
  max-height: 2.875rem;
  font-family: ${({ theme }) => theme.fonts.logo};
  background-color: ${({ theme }) => theme.colors.light.main};
  color: ${({ theme }) => theme.colors.light.secondary};
  border-radius: 0.5rem;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :disabled {
    pointer-events: none;
    opacity: 0.85;
  }
`;
