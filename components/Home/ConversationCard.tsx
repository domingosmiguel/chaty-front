import userPic from '@/public/images/userPic.png';
import { ChatSample } from '@/services/messagesApi';
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
      <ProfilePic
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
  cursor: pointer;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.space.generalPadding}`};
  border: 0.1rem solid transparent;

  &:hover {
    border: 0.05rem solid black;
    border-radius: 1rem;
  }
`;

const ProfilePic = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  cursor: pointer;
  margin-left: ${({ theme }) => `${theme.space.generalPadding}`};
  flex: 1;
  overflow: hidden;
`;

const StyledUsername = styled.div`
  cursor: pointer;
  margin-bottom: ${({ theme }) => `${theme.space.generalPadding}`};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledMessage = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 1rem;
  white-space: nowrap;
`;
