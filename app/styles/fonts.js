import { Jacques_Francois, Open_Sans } from 'next/font/google';

export const jacquesFrancois = Jacques_Francois({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const openSans = Open_Sans({
  weight: '600',
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-sans-serif',
});
