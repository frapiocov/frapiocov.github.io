'use client';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'light',
  },
});

export default theme;