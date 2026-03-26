import { Inter, Outfit, Space_Mono } from 'next/font/google';
import './globals.css';
import { PortfolioProvider } from '../components/PortfolioContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Ritik Awachat | Shopify App Developer',
  description: 'I build high-performance Shopify apps that increase revenue. Full stack development with a focus on commerce ROI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${spaceMono.variable}`}>
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
      </body>
    </html>
  );
}
