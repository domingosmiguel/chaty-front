import userPic from '@/public/images/userPic.png';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export default function ChatUserCard({
  user,
  setRecipientId,
}: {
  user: {
    username: string | undefined;
    pictureUrl: string | undefined;
  };
  setRecipientId: Dispatch<SetStateAction<number>>;
}) {
  const userPicture = user.pictureUrl || userPic.src;

  const handleClickBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setRecipientId(0);
  };
  return (
    <StyledUsernameAndPicture onClick={() => alert('click')}>
      <StyledArrowBackIcon
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleClickBack(event)
        }
      />
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

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  padding: ${({ theme }) => `${theme.space.generalPadding}`};
  width: 2.5rem;
  height: 2.5rem;

  @media screen and (min-width: 801px) {
    display: none;
  }
`;

const Username = styled.div`
  padding-left: ${({ theme }) => `${theme.space.generalPadding}`};
`;

const Picture = styled.img`
  width: 2.5rem;
  border-radius: 50%;
`;
