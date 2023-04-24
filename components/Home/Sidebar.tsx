import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Conversations from './Conversations';
import UsernameAndPicture from './UsernameAndPicture';

export default function Sidebar({
  display,
  setRecipientId,
}: {
  display: boolean;
  setRecipientId: Dispatch<SetStateAction<number>>;
}) {
  return (
    <StyledSidebar display={display}>
      <UsernameAndPicture setRecipientId={setRecipientId} />
      <Conversations setRecipientId={setRecipientId} />
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div<{ display?: boolean }>`
  min-width: ${({ theme }) => `calc(${theme.sizes.max} - 5rem)`};
  height: 100%;
  padding: ${({ theme }) => `${theme.space.generalPadding}`};
  border-right: ${({ theme }) =>
    `0.1rem solid ${theme.colors.light.secondary}`};

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    border-right: none;
    display: ${({ display }) => (display ? 'flex' : 'none')};
  }
`;
