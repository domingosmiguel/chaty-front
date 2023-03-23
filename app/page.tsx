/* eslint-disable react/no-children-prop */
'use client'; // this is a client component

import userContext from '@/context/userContext';
import useSignIn from '@/hooks/api/useSignIn';
import useForm from '@/hooks/useForm';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Input, InputLeftElement } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import mainLogo from '../public/mainLogo.png';
import MainButton from './mainButton';
import MainLink from './mainLink';
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
} from './page.styles';
export default function SignIn() {
  const router = useRouter();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  }) as [SignUpType, Function];

  const { signInLoading, signIn } = useSignIn();
  const { userData, setUserData } = useContext(userContext);

  useEffect(() => {
    if (Object.keys(userData).length !== 0) {
      router.push('/home');
    }
  }, [userData]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const userData = await signIn(form.email, form.password);
      setUserData(userData);
      alert('Login realizado com sucesso!');
      router.push('/home');
    } catch (err) {
      alert('Não foi possível fazer o login!');
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(e.target);

  return (
    <Page>
      <VisualIdentityWrapper>
        <TextWrapper>
          <Name>Chaty</Name>
          <Slogan>Connecting people...</Slogan>
        </TextWrapper>
        <Logo src={mainLogo.src} />
      </VisualIdentityWrapper>
      <FormWrapper>
        <Form onSubmit={submit}>
          <FormTittle>Login:</FormTittle>
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
          </AllInputs>
          <MainButton isLoading={signInLoading}>Continue</MainButton>
          <MainLink href='/signup' disabled={signInLoading}>
            First time here? Sign up!
          </MainLink>
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
