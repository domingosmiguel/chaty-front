import userPic from '@/public/images/userPic.png';
import { UsersSearch } from '@/services/userApi';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export default function UserCard({
  setRecipientId,
  user,
}: {
  setRecipientId: Dispatch<SetStateAction<number>>;
  user: UsersSearch;
}) {
  const userPicture = user.pictureUrl || userPic.src;

  return (
    <StyledUsernameAndPicture
      onClick={() => setRecipientId(user.entityId || 0)}
    >
      <Picture src={userPicture} alt={user.username} />
      <Username>{user.username}</Username>
    </StyledUsernameAndPicture>
  );
}

const StyledUsernameAndPicture = styled.section`
  cursor: pointer;
  position: relative;
  height: fit-content;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.space.generalPadding} 0`};
  margin-top: ${({ theme }) => `${theme.space.generalPadding}`};

  &:first-of-type {
    margin-top: 0;
  }
`;
const Username = styled.div`
  cursor: pointer;
  padding-left: ${({ theme }) => `${theme.space.generalPadding}`};
`;

const Picture = styled.img`
  cursor: pointer;
  width: 1.8rem;
  border-radius: 50%;
`;
