import userPic from '@/public/images/userPic.png';
import styled from 'styled-components';

export default function ChatUserCard({
  user,
}: {
  user: {
    username: string | undefined;
    pictureUrl: string | undefined;
  };
}) {
  const userPicture = user.pictureUrl || userPic.src;

  return (
    <StyledUsernameAndPicture onClick={() => alert('click')}>
      <Picture src={userPicture} alt={user.username} />
      <Username>{user.username}</Username>
    </StyledUsernameAndPicture>
  );
}

const StyledUsernameAndPicture = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => ` 0 0 ${theme.space.generalPadding}`};
  border-bottom: 0.05rem solid black;
`;
const Username = styled.div`
  padding-left: ${({ theme }) => `${theme.space.generalPadding}`};
`;

const Picture = styled.img`
  width: 2.5rem;
  border-radius: 50%;
`;
