"use client";
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DrinkList from '@/components/DrinkList';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <Hero />
          <DrinkList/>
          <Footer/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
