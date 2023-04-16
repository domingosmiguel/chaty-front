import { ChatIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

export default function NoConversation() {
  return (
    <StyledEmptyConversation>
      Inicie uma conversa em `{<ChatIcon />}`
    </StyledEmptyConversation>
  );
}

const StyledEmptyConversation = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30vh;
`;
