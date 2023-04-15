import {
  AllInputs,
  Form,
  FormTittle,
  FormWrapper,
  InputWrap,
} from '@/components/styledComponent';
import userContext from '@/context/userContext';
import useConversation from '@/hooks/api/useConversation';
import useNewMessage from '@/hooks/api/useNewMessage';
import useForm from '@/hooks/useForm';
import { EmailIcon } from '@chakra-ui/icons';
import { Input, InputLeftElement } from '@chakra-ui/react';
import { useContext } from 'react';
import styled from 'styled-components';
import Message from './Message';
import UsernameAndPicture from './UsernameAndPicture';

export default function Conversation({ recipientId }: { recipientId: number }) {
  const { userData } = useContext(userContext);
  const [form, setForm] = useForm({
    newMessage: '',
  }) as [{ newMessage: string }, Function];

  const { postNewMessageLoading, postNewMessageError, postNewMessage } =
    useNewMessage();

  const { conversation, conversationLoading, conversationError } =
    useConversation(userData?.token, recipientId);

  async function submitMessageAndUpdate() {
    try {
      await postNewMessage(userData?.token, form.newMessage, recipientId);
    } catch (err) {
      alert('falha no envio da mensagem ):');
    }
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitMessageAndUpdate();
  };

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
      <UsernameAndPicture
        user={{
          pictureUrl: conversation?.entityImg,
          username: conversation?.entityUsername,
        }}
      />
      <MessagesContainer>
        {conversation?.messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            owner={message.from === userData?.user.id}
          />
        ))}
      </MessagesContainer>
      <InputContainer>
        <FormWrapper>
          <Form onSubmit={submitForm}>
            <FormTittle>Login:</FormTittle>
            <AllInputs spacing={0}>
              <InputWrap size='lg'>
                <InputLeftElement
                  pointerEvents='none'
                  // eslint-disable-next-line react/no-children-prop
                  children={<EmailIcon color='gray.300' />}
                />
                <Input
                  name='newMessage'
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  value={form.newMessage}
                  focusBorderColor='orange'
                  variant='flushed'
                  type='text'
                  placeholder='Message'
                  isRequired
                />
              </InputWrap>
            </AllInputs>
            <Send className={`${postNewMessageLoading}`}>Continue</Send>
          </Form>
        </FormWrapper>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div``;

const MessagesContainer = styled.div``;

const InputContainer = styled.div``;

const Send = styled.button``;
