import styled from 'styled-components';

export default function NoConversationSelected() {
  return (
    <StyledEmptyConversation>
      Selecione uma conversa ao lado para iniciar
    </StyledEmptyConversation>
  );
}

const StyledEmptyConversation = styled.div`
  width: ${({ theme }) => `calc( 100vw - ${theme.sizes.max} + 5rem)`};
  text-align: center;
`;
