import userPic from '@/public/userPic.png';
import { ChatSample } from '@/services/messagesApi';
import Image from 'next/image';
import styled from 'styled-components';

export default function ConversationCard({
  chat,
  handleClick,
}: {
  chat: ChatSample;
  handleClick: () => void;
}) {
  return (
    <StyledCard onClick={handleClick}>
      <Image
        src={chat.entityImg || userPic.src}
        alt={chat.entityUsername || 'user'}
      />
      <TextContainer>
        <StyledUsername>{chat.entityUsername}</StyledUsername>
        <StyledMessage>{chat.message.text}</StyledMessage>
      </TextContainer>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  height: 3rem;
  display: flex;
`;

const TextContainer = styled.div``;

const StyledUsername = styled.div``;

const StyledMessage = styled.div``;
