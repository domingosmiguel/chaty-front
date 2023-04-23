import { AllInputs, Form, InputWrap } from '@/components/styledComponent';
import userContext from '@/context/userContext';
import useConversations from '@/hooks/api/useConversations';
import useForm from '@/hooks/useForm';
import { ChatSample } from '@/services/messagesApi';
import { UsersSearch } from '@/services/userApi';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputLeftElement } from '@chakra-ui/react';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
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
  const [conversationsData, setConversationsData] = useState<
    ChatSample[] | null
  >(null);

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

  const fetchData = async () => {
    if (userData?.token) {
      return getConversations(userData.token);
    }
  };

  const updateData = useCallback((data?: ChatSample[] | null) => {
    if (data) {
      setConversationsData(data);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await fetchData();

        updateData(data);
      } catch (error) {
        console.log('Error fetching conversations data.');
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <StyledTitle>Conversations</StyledTitle>
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
              placeholder='search messages'
              isRequired
            />
          </InputWrap>
        </AllInputs>
      </StyledForm>
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
  margin-top: ${({ theme }) => `${theme.space.generalPadding}`};
`;

const StyledForm = styled(Form)`
  padding: ${({ theme }) => `${theme.space.generalPadding} 0`};
  margin-bottom: initial;
`;
