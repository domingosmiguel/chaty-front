import userContext from '@/context/userContext';
import useConversation from '@/hooks/api/useConversation';
import useNewMessage from '@/hooks/api/useNewMessage';
import useForm from '@/hooks/useForm';
import useScrollToBottom from '@/hooks/useScrollToBottom';
import { FullChatData } from '@/services/messagesApi';
import { EmailIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import MainButton from '../mainButton';
import ChatUserCard from './ChatUserCard';
import Message from './Message';

export default function Conversation({
  recipientId,
  setRecipientId,
}: {
  recipientId: number;
  setRecipientId: Dispatch<SetStateAction<number>>;
}) {
  const { userData } = useContext(userContext);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = useScrollToBottom();
  const [form, setForm, clearForm] = useForm({
    newMessage: '',
  });
  const [conversationData, setConversationData] = useState<FullChatData | null>(
    null
  );
  const { postNewMessageLoading, postNewMessageError, postNewMessage } =
    useNewMessage();

  const {
    conversation,
    conversationLoading,
    conversationError,
    getConversation,
  } = useConversation(userData?.token, recipientId);

  useEffect(() => {
    setConversationData(conversation);
  }, [conversation]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollToBottom(recipientId, messagesContainerRef);
  }, [conversationData]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const fetchData = async () => {
      getConversation(userData?.token, recipientId);
    };

    fetchData();

    const interval = setInterval(async () => {
      try {
        await fetchData();
      } catch (error) {
        console.log('Error fetching chat data.');
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [recipientId]); // eslint-disable-line react-hooks/exhaustive-deps

  function submitMessageAndUpdate() {
    if (form.newMessage !== '') {
      try {
        postNewMessage(userData?.token, form.newMessage, recipientId || 0);
        clearForm();
      } catch (err) {
        console.log('Failed to send message ):');
      }
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(event.target);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      submitMessageAndUpdate();
    }
  };

  return (
    <Container>
      <ChatUserCard
        user={{
          pictureUrl: conversationData?.entityImg,
          username: conversationData?.entityUsername,
        }}
        setRecipientId={setRecipientId}
      />
      <MessagesContainer>
        <MessagesScroll ref={messagesContainerRef}>
          {conversationData?.messages?.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              owner={message.from === userData?.user.entityId}
            />
          ))}
        </MessagesScroll>
      </MessagesContainer>
      <StyledInputContainer>
        <StyledInputGroup size='md'>
          <InputLeftElement
            pointerEvents='none'
            children={<EmailIcon color='gray.300' />} // eslint-disable-line react/no-children-prop
          />
          <StyledInput
            name='newMessage'
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            focusBorderColor='black'
            value={form.newMessage}
            variant='unstyled'
            type='text'
            placeholder='message'
            isRequired
          />
          <StyledInputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={
              <Send>
                <MainButton
                  isLoading={postNewMessageLoading}
                  onClick={submitMessageAndUpdate}
                >
                  Send
                </MainButton>
              </Send>
            }
          />
        </StyledInputGroup>
      </StyledInputContainer>
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.space.generalPadding}`};
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: ${({ theme }) => `0 calc(${theme.space.generalPadding} * 10)`};
  background-color: white;
  display: flex;
  position: relative;

  @media screen and (max-width: 1090px) {
    padding: ${({ theme }) => `0 ${theme.space.generalPadding}`};
  }
`;

const MessagesScroll = styled.div`
  padding: ${({ theme }) => `${theme.space.generalPadding} 0`};
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const StyledInputContainer = styled.div`
  box-shadow: none;
  padding: ${({ theme }) => `${theme.space.generalPadding} 0 0`};
  height: fit-content !important;
  max-width: none;
  border-top: 0.05rem solid black;
  display: flex;
`;

const StyledInputRightElement = styled(InputRightElement)`
  width: fit-content;
`;

const StyledInputGroup = styled(InputGroup)`
  background-color: white;
  border-radius: ${({ theme }) => `calc(${theme.space.generalPadding} * 1.5)`};
  height: fit-content !important;
`;

const StyledInput = styled(Input)`
  padding-right: 5.5rem;
  height: 2.5rem;
`;

const Send = styled.div`
  width: 5rem;
  height: 100%;
  margin: -0.5rem ${({ theme }) => `calc(${theme.space.generalPadding} / 2)`} 0;
  padding: ${({ theme }) => `calc(${theme.space.generalPadding} / 2) 0`};
`;
