import './globals.css';

import { jacquesFrancois } from '@/app/styles/fonts';

export const metadata = {
  title: 'Laeeun Sweet 22',
  description: 'my best wishes for my girl',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jacquesFrancois.className}>
      <body>{children}</body>
    </html>
  );
}
