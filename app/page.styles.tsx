import { InputGroup, Stack } from '@chakra-ui/react';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';

export const Page = styled(Div100vh)`
  background-color: ${({ theme }) => theme.colors.light.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const VisualIdentityWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 8rem;
  margin-left: 2rem;
`;
export const FormWrapper = styled(Div100vh)`
  width: 100%;
  max-width: ${({ theme }) => `calc(${theme.sizes.max} + 4rem)`};
  height: fit-content;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.orange};
  box-shadow: 1rem 1rem 3rem ${({ theme }) => theme.colors.light.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.logo};
  color: ${({ theme }) => theme.colors.light.secondary};
  font-size: 3.5rem;
  line-height: 4.4rem;
  margin-bottom: 0.5rem;
`;
export const Slogan = styled.p`
  font-family: ${({ theme }) => theme.fonts.logo};
  color: ${({ theme }) => theme.colors.light.secondary};
  font-size: 1.2rem;
  line-height: 2.9rem;
  white-space: nowrap;
`;
export const FormTittle = styled.p`
  font-family: ${({ theme }) => theme.fonts.logo};
  color: ${({ theme }) => theme.colors.light.secondary};
  font-size: 1.5rem;
  line-height: 2.9rem;
`;
export const Form = styled.form`
  max-width: ${({ theme }) => theme.sizes.max};
  width: 100%;
  margin-bottom: 1rem;
`;
export const AllInputs = styled(Stack)`
  margin: 0.25rem 0;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
`;
export const InputWrap = styled(InputGroup)`
  border: 0 none;
  outline: 0;
  font-family: ${({ theme }) => theme.fonts.body};
`;
