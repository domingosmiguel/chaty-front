import { Pacifico } from 'next/font/google';

const logo = Pacifico({ subsets: ['latin'], weight: '400' });

const Styles = {
  colors: {
    orange: '#ff6600',
    light: { main: '#f7f7f5', secondary: '#202a36' },
    dark: { main: '#202a36', secondary: '#f7f7f5' },
  },
  fonts: {
    body: "'Raleway', sans-serif",
    logo: logo.style.fontFamily,
  },
  sizes: {
    max: '20rem',
  },
  space: {
    generalPadding: '0.5rem',
  },
};

export default Styles;
