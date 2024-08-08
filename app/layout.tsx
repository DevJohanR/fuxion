"use client";
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DrinkList from '@/components/DrinkList';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import VideoPlayer from '@/components/Video';

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
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/2 p-4">
              <VideoPlayer />
            </div>
            <div className="md:w-1/2 p-4">
              <DrinkList />
            </div>
          </div>
          <Footer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
