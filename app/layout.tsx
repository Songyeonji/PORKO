import type { Metadata } from 'next';
import './globals.css';
import QueryProviders from '@/context/queryProvider';
import AuthProvider from '@/context/authProvider';
import Navbar from '@/components/Navbar';
import { suit } from './font';

export const metadata: Metadata = {
  // FIXME -> 추후 메타데이터 수정
  title: 'PORKO',
  description: 'MZ특화 금융앱 PORKO !!!'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko' className='hide-scrollbar bg-gray-200'>
      <body
        className={`${suit.className} relative mx-auto h-dvh tracking-tight text-black xs:w-[520px]`}
      >
        <AuthProvider>
          <QueryProviders>
            {children}
            <Navbar />
          </QueryProviders>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
