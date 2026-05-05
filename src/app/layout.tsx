import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trinity Advisory — Courses',
  description: 'Internal coaching courses reference for the Trinity Advisory team.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
