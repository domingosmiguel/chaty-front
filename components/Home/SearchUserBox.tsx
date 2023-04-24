import { AllInputs, Form, InputWrap } from '@/components/styledComponent';
import userContext from '@/context/userContext';
import useUsers from '@/hooks/api/useUsers';
import useForm from '@/hooks/useForm';
import { UsersSearch } from '@/services/userApi';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputLeftElement } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

export default function SearchUserBox({
  setRecipientId,
  display,
  setDisplay,
}: {
  setRecipientId: Dispatch<SetStateAction<number>>;
  display: boolean;
  setDisplay: Dispatch<SetStateAction<boolean>>;
}) {
  const { userData } = useContext(userContext);
  const [searchResults, setSearchResults] = useState<UsersSearch[] | null>(
    null
  );
  const { usersLoading, usersError, getUsers } = useUsers();
  const [form, setForm] = useForm({
    searchUser: '',
  });

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    setForm(event.target);
    if (event.target.value.length === 0 || event.target.value.length >= 3) {
      setSearchResults(await getUsers(event.target.value, userData?.token));
    }
  };

  function handleEvent(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      event.currentTarget.value = '';
      setDisplay(false);
    }
  }
  return (
    <StyledSearchUserBox display={display}>
      <StyledForm>
        <AllInputs spacing={0}>
          <InputWrap size='sm'>
            <InputLeftElement
              pointerEvents='none'
              // eslint-disable-next-line react/no-children-prop
              children={<SearchIcon color='gray.300' />}
            />
            <Input
              name='searchUser'
              onChange={handleInputChange}
              value={form.searchUser}
              pr='1rem'
              focusBorderColor='black'
              variant='flushed'
              onKeyUp={handleEvent}
              type='text'
              placeholder='search friends'
              isRequired
            />
          </InputWrap>
        </AllInputs>
      </StyledForm>
      {searchResults?.map((user) => (
        <UserCard
          key={user.entityId}
          setRecipientId={setRecipientId}
          user={user}
        />
      ))}
    </StyledSearchUserBox>
  );
}

const StyledSearchUserBox = styled.div<{ display: boolean }>`
  position: absolute;
  z-index: 2;
  background-color: ${({ theme }) => `${theme.colors.light.main}`};
  border-style: solid;
  border-width: 0.1rem;
  border-color: ${({ theme }) => `${theme.colors.light.secondary}`};
  border-radius: ${({ theme }) => `${theme.space.generalPadding}`};
  top: 2.5rem;
  right: 0;
  width: ${({ theme }) => `calc(${theme.sizes.max} - 6rem)`};
  padding: ${({ theme }) => `0 ${theme.space.generalPadding}`};

  display: ${({ display }) => (display ? 'block' : 'none')};

  @media screen and (max-width: 800px) {
    width: calc(100vw - ${({ theme }) => theme.space.generalPadding} * 2);
  }
`;

const StyledForm = styled(Form)`
  margin-bottom: initial;
`;
