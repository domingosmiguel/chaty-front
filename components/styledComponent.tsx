import { InputGroup, Stack } from '@chakra-ui/react';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';

export const Page = styled(Div100vh)`
  background-color: ${({ theme }) => theme.colors.light.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResponsivePage = styled(Page)`
  @media screen and (max-width: 1020px) {
    flex-direction: column;
  }
`;
export const VisualIdentityWrapper = styled.section`
  flex-grow: 1;
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

  @media screen and (max-width: 1020px) {
    margin-left: 4rem;
  }
  @media screen and (max-width: 480px) {
    margin-left: 1rem;
  }
  @media screen and (max-width: 390px) {
    margin-left: 0;
  }
`;
export const FormWrapper = styled(Div100vh)`
  width: 100%;
  max-width: ${({ theme }) => `calc(${theme.sizes.max} + 4rem)`};
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.orange};
  box-shadow: 1rem 1rem 3rem ${({ theme }) => theme.colors.light.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1020px) {
    max-width: 100%;
  }
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
