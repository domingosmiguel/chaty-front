import userContext from '@/context/userContext';
import userPic from '@/public/images/userPic.png';
import { UsersSearch } from '@/services/userApi';
import { ChatIcon, SettingsIcon } from '@chakra-ui/icons';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import styled from 'styled-components';
import SearchUserBox from './SearchUserBox';

export default function UsernameAndPicture({
  setRecipient,
}: {
  setRecipient: Dispatch<SetStateAction<UsersSearch | undefined>>;
}) {
  const [boxDisplay, setBoxDisplay] = useState(false);
  const { userData, setUserData } = useContext(userContext);

  const userPicture = userData?.user.pictureUrl || userPic.src;

  const username = userData?.user.username || 'user';

  const handleIconClick = () => {
    setBoxDisplay(!boxDisplay);
  };
  return (
    <StyledUsernameAndPicture>
      <Picture src={userPicture} alt={username} />
      <Username>{username}</Username>
      <StyledSettingsIcon onClick={() => setUserData(null)} />
      <StyledChatIcon onClick={handleIconClick} />
      <SearchUserBox
        setRecipient={setRecipient}
        display={boxDisplay}
        setDisplay={setBoxDisplay}
      />
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
  width: 2.5rem;
  border-radius: 50%;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  cursor: pointer;
  width: 2.1rem;
  height: 2.1rem;
  margin-left: auto;
  padding: ${({ theme }) => `${theme.space.generalPadding}`};
  border: 0.05rem solid transparent;
  border-radius: 0.5rem;

  &:hover {
    border: 0.05rem solid black;
  }

  & :nth-child(n) {
    cursor: pointer;
  }
`;

const StyledChatIcon = styled(ChatIcon)`
  cursor: pointer;
  width: 2.1rem;
  height: 2.1rem;
  margin-left: ${({ theme }) => `${theme.space.generalPadding}`};
  padding: ${({ theme }) => `${theme.space.generalPadding}`};
  border: 0.05rem solid transparent;
  border-radius: 0.5rem;

  &:hover {
    border: 0.05rem solid black;
  }

  & :nth-child(n) {
    cursor: pointer;
  }
`;
