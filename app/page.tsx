/* eslint-disable react/no-children-prop */
'use client'; // this is a client component

import MainButton from '@/components/mainButton';
import MainLink from '@/components/mainLink';
import {
  AllInputs,
  Form,
  FormTittle,
  FormWrapper,
  InputWrap,
  Logo,
  Name,
  ResponsivePage,
  Slogan,
  TextWrapper,
  VisualIdentityWrapper,
} from '@/components/styledComponent';
import userContext from '@/context/userContext';
import useSignIn from '@/hooks/api/useSignIn';
import useForm from '@/hooks/useForm';
import mainLogo from '@/public/images/mainLogo.png';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Input, InputLeftElement } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

export default function SignIn() {
  const router = useRouter();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const { signInLoading, signIn } = useSignIn();
  const { userData, setUserData } = useContext(userContext);

  useEffect(() => {
    if (userData) {
      router.push('/home');
    }
  }, [router, userData]);

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(event.target);
  };

  return (
    <ResponsivePage>
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
    </ResponsivePage>
  );
}
