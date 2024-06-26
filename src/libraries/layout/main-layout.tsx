import React, { ReactNode } from 'react';
import { HeaderLayout } from './header-layout';
import FooterLayout from './footer-layout';

type MainLayoutProps = {
  children: ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <HeaderLayout />
      <main className="overflow-x-hidden">{children}</main>
      <FooterLayout />
    </>
  );
}
