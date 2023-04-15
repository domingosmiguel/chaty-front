import userPic from '@/public/userPic.png';
import { UsersSearch } from '@/services/userApi';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export default function UserCard({
  setEntityId,
  user,
}: {
  setEntityId: Dispatch<SetStateAction<number>>;
  user: UsersSearch;
}) {
  const userPicture = user.pictureUrl || userPic.src;

  return (
    <StyledUsernameAndPicture onClick={() => setEntityId(user.entityId)}>
      <Picture src={userPicture} alt={user.username} />
      <Username>{user.username}</Username>
    </StyledUsernameAndPicture>
  );
}

const StyledUsernameAndPicture = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.space.generalPadding} 0`};
`;
const Username = styled.div`
  padding-left: ${({ theme }) => `${theme.space.generalPadding}`};
`;

const Picture = styled.img`
  width: 3rem;
  border-radius: 50%;
`;
