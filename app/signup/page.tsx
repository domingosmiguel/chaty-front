/* eslint-disable react/no-children-prop */
'use client'; // this is a client component

import userContext from '@/context/userContext';
import useSignUp from '@/hooks/api/useSignUp';
import useForm from '@/hooks/useForm';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Input, InputLeftElement } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
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
  const router = useRouter();
  const [form, setForm] = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  }) as [SignUpType, Function];

  const { signUpLoading, signUp } = useSignUp();
  const { userData, setUserData } = useContext(userContext);

  useEffect(() => {
    if (Object.keys(userData).length !== 0) {
      router.push('/home');
    }
  }, [userData]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      JSON.stringify(form.password) !== JSON.stringify(form.confirmPassword)
    ) {
      alert('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(form.email, form.password);
        alert('Inscrito com sucesso! Por favor, faça login.');
        router.push('/sign-in');
      } catch (error) {
        alert('Não foi possível fazer o cadastro!');
      }
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
                name='confirmPassword'
                onChange={handleInputChange}
                value={form.confirmPassword}
                pr='1rem'
                focusBorderColor='orange'
                variant='flushed'
                type='password'
                placeholder='repeat password'
                isRequired
              />
            </InputWrap>
          </AllInputs>
          <MainButton isLoading={signUpLoading}>Continue</MainButton>
          <MainLink href='/' disabled={signUpLoading}>
            Already have a account? Sign in!
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
  confirmPassword: string;
};