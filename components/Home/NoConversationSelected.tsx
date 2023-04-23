import styled from 'styled-components';

export default function NoConversationSelected({
  display,
}: {
  display: boolean;
}) {
  return (
    <StyledEmptyConversation display={display}>
      Select a conversation on the sidebar to start
    </StyledEmptyConversation>
  );
}

const StyledEmptyConversation = styled.div<{ display: boolean }>`
  flex-grow: 1;
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: ${({ display }) => (display ? 'block' : 'none')};
  }
`;
