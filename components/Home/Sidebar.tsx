import { UsersSearch } from '@/services/userApi';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Conversations from './Conversations';
import UsernameAndPicture from './UsernameAndPicture';

export default function Sidebar({
  setRecipient,
}: {
  setRecipient: Dispatch<SetStateAction<UsersSearch | undefined>>;
}) {
  return (
    <StyledSidebar>
      <UsernameAndPicture setRecipient={setRecipient} />
      <Conversations setRecipient={setRecipient} />
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  width: ${({ theme }) => `calc(${theme.sizes.max} - 5rem)`};
  height: 100%;
  padding: ${({ theme }) => `${theme.space.generalPadding}`};
  border-right: ${({ theme }) =>
    `0.1rem solid ${theme.colors.light.secondary}`};
`;
