'use client'; // this is a client component

import { UserProvider } from '@/context/userContext';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import Styles from './styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = extendTheme(Styles);
  return (
    <html lang='en'>
      <GlobalStyles />
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={Styles}>
          <UserProvider>
            <body>{children}</body>
          </UserProvider>
        </ThemeProvider>
      </ChakraProvider>
    </html>
  );
}
