import "../globals.css";
import { LocaleProvider } from "../../components/LocaleProvider";
import { Providers } from "../../components/Providers";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ]
}

export const metadata: Metadata = {
  title: {
    template: '%s | ATA - Aprann Travay Avanse',
    default: 'ATA - Aprann Travay Avanse | Platfòm pou jèn yo nan Ayiti'
  },
  description: 'Platfòm nan pou jèn yo nan Ayiti yo aprann konpetans nouvo, jwenn travay ak avanse nan lavi yo.',
  keywords: ['Haiti', 'Education', 'Jobs', 'Skills', 'Youth', 'Kreyòl', 'Français'],
  authors: [{ name: 'ATA Team' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ht_HT',
    url: 'https://ata-haiti.com',
    title: 'ATA - Aprann Travay Avanse',
    description: 'Platfòm pou jèn yo nan Ayiti',
    siteName: 'ATA'
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/manifest.json'
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className="min-h-screen">
        <Providers>
          <LocaleProvider locale={locale}>
            {children}
          </LocaleProvider>
        </Providers>
      </body>
    </html>
  );
}
