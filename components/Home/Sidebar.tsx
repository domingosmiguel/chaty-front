import { UsersSearch } from '@/services/userApi';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Conversations from './Conversations';
import UsernameAndPicture from './UsernameAndPicture';

export default function Sidebar({
  display,
  setRecipient,
}: {
  display: boolean;
  setRecipient: Dispatch<SetStateAction<UsersSearch | undefined>>;
}) {
  return (
    <StyledSidebar display={display}>
      <UsernameAndPicture setRecipient={setRecipient} />
      <Conversations setRecipient={setRecipient} />
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div<{ display?: boolean }>`
  width: ${({ theme }) => `calc(${theme.sizes.max} - 5rem)`};
  height: 100%;
  padding: ${({ theme }) => `${theme.space.generalPadding}`};
  border-right: ${({ theme }) =>
    `0.1rem solid ${theme.colors.light.secondary}`};

  @media screen and (max-width: 800px) {
    width: 100%;
    border-right: none;
    display: ${({ display }) => (display ? 'block' : 'none')};
  }
`;
