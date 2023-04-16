import {
  AllInputs,
  Form,
  FormWrapper,
  InputWrap,
} from '@/components/styledComponent';
import userContext from '@/context/userContext';
import useConversations from '@/hooks/api/useConversations';
import useForm from '@/hooks/useForm';
import { UsersSearch } from '@/services/userApi';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputLeftElement } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useContext } from 'react';
import styled from 'styled-components';
import ConversationCard from './ConversationCard';
import NoConversation from './NoConversation';

export default function Conversations({
  setRecipient,
}: {
  setRecipient: Dispatch<SetStateAction<UsersSearch | undefined>>;
}) {
  const [form, setForm] = useForm({
    searchMessages: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setForm(event.target);
    alert('Function not implemented.');
  };

  const { userData } = useContext(userContext);

  const {
    conversations,
    conversationsLoading,
    conversationsError,
    getConversations,
  } = useConversations(userData?.token);

  return (
    <>
      <StyledTitle>Conversas</StyledTitle>
      <StyledFormContainer>
        <StyledForm>
          <AllInputs spacing={0}>
            <InputWrap size='sm'>
              <InputLeftElement
                pointerEvents='none'
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color='gray.300' />}
              />
              <Input
                name='searchMessages'
                onChange={handleInputChange}
                value={form.searchMessages}
                pr='1rem'
                focusBorderColor='black'
                variant='flushed'
                type='text'
                placeholder='Pesquisar mensagens'
                isRequired
              />
            </InputWrap>
          </AllInputs>
        </StyledForm>
      </StyledFormContainer>
      {conversations && conversations.length > 0 ? (
        conversations.map((chat) => (
          <ConversationCard
            key={chat.entityId}
            chat={chat}
            handleClick={() => {
              setRecipient({
                entityId: chat.entityId,
              });
            }}
          />
        ))
      ) : (
        <NoConversation />
      )}
    </>
  );
}

const StyledTitle = styled.div`
  font: ${({ theme }) => `1.5rem ${theme.fonts.body}`};
  margin-top: ${({ theme }) => `${theme.space.generalPadding}`}; ;
`;

const StyledFormContainer = styled(FormWrapper)`
  background-color: transparent;
  box-shadow: none;
  padding: ${({ theme }) => `${theme.space.generalPadding} 0`};
  height: fit-content !important;
`;

const StyledForm = styled(Form)`
  margin-bottom: initial;
`;