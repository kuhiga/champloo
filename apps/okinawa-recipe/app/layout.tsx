import Navbar from '../components/ui/Navbar';
import './global.css';

export const metadata = {
  title: 'MyChampuru',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="retro">
      <body>
        {/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
