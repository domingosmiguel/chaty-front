/* eslint-disable react/no-children-prop */
'use client'; // this is a client component

import useForm from '@/hooks/useForm';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Input, InputLeftElement } from '@chakra-ui/react';
import mainLogo from '../../public/mainLogo.png';
import MainButton from '../mainButton';
import MainLink from '../mainLink';
import {
  AllInputs,
  Form,
  FormTittle,
  FormWrapper,
  InputWrap,
  Logo,
  Name,
  Page,
  Slogan,
  TextWrapper,
  VisualIdentityWrapper,
} from '../page.styles';
export default function SignUp() {
  const [form, setForm] = useForm({
    email: '',
    user: '',
    password: '',
    repeatPassword: '',
  }) as [SignUpType, Function];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(e.target);

  return (
    <Page>
      <VisualIdentityWrapper>
        <TextWrapper>
          <Name>Chaty</Name>
          <Slogan>Conecting people...</Slogan>
        </TextWrapper>
        <Logo src={mainLogo.src} />
      </VisualIdentityWrapper>
      <FormWrapper>
        {/* <Form onSubmit={handleSubmission}> */}
        <Form>
          <FormTittle>Sign Up:</FormTittle>
          <AllInputs spacing={0}>
            <InputWrap size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon color='gray.300' />}
              />
              <Input
                name='email'
                onChange={handleInputChange}
                value={form.email}
                focusBorderColor='orange'
                variant='flushed'
                type='email'
                placeholder='email'
                isRequired
              />
            </InputWrap>
            <InputWrap size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<LockIcon color='gray.300' />}
              />
              <Input
                name='password'
                onChange={handleInputChange}
                value={form.password}
                pr='1rem'
                focusBorderColor='orange'
                variant='flushed'
                type='password'
                placeholder='password'
                isRequired
              />
            </InputWrap>
            <InputWrap size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<LockIcon color='gray.300' />}
              />
              <Input
                name='repeatPassword'
                onChange={handleInputChange}
                value={form.repeatPassword}
                pr='1rem'
                focusBorderColor='orange'
                variant='flushed'
                type='password'
                placeholder='repeat password'
                isRequired
              />
            </InputWrap>
          </AllInputs>
          <MainButton>Continue</MainButton>
          <MainLink href='/'>Already have a account? Sign in!</MainLink>
        </Form>
      </FormWrapper>
    </Page>
  );
}

export type SignUpType = {
  email: string;
  user: string;
  password: string;
  repeatPassword: string;
};
