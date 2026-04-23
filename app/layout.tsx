import type {Metadata} from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });
const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito-sans' });

export const metadata: Metadata = {
  title: 'Training and Development - Tobams Group',
  description: 'Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunitoSans.variable} font-nunito-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
