import userContext from '@/context/userContext';
import userPic from '@/public/userPic.png';
import { AddIcon, SettingsIcon } from '@chakra-ui/icons';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import styled from 'styled-components';
import SearchUserBox from './SearchUserBox';

export default function UsernameAndPicture({
  setEntityId,
}: {
  setEntityId: Dispatch<SetStateAction<number>>;
}) {
  const [boxDisplay, setBoxDisplay] = useState(false);
  const { userData } = useContext(userContext);

  const userPicture = userData?.user.pictureUrl || userPic.src;

  const username = userData?.user.username || 'user';

  const handleIconClick = () => {
    setBoxDisplay(!boxDisplay);
  };
  return (
    <StyledUsernameAndPicture>
      <Picture src={userPicture} alt={username} />
      <Username>{username}</Username>
      <StyledSettingsIcon />
      <StyledAddIcon onClick={handleIconClick} />
      <SearchUserBox
        setEntityId={setEntityId}
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
  margin-left: auto;
`;

const StyledAddIcon = styled(AddIcon)`
  margin-left: ${({ theme }) => `${theme.space.generalPadding}`};
`;
