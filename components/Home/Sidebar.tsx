import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Conversations from './Conversations';
import UsernameAndPicture from './UsernameAndPicture';

export default function Sidebar({
  setEntityId,
}: {
  setEntityId: Dispatch<SetStateAction<number>>;
}) {
  return (
    <StyledSidebar>
      <UsernameAndPicture setEntityId={setEntityId} />
      <Conversations setEntityId={setEntityId} />
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
