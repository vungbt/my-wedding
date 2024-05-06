import type { Metadata } from 'next';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon-dev.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
