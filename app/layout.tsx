import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';
import { zhCN } from '@clerk/localizations';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={zhCN}>
      <html lang="zh-CN">
        <body>
          <SignedOut>
            <SignInButton mode="modal">登录</SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton showName={true} />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
