
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';
import GoogleAnalyticsEvents from '@/components/analytics/GoogleAnalyticsEvents';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Jayin Khanna | Safe & Trustworthy Generative Models',
    template: '%s | Jayin Khanna',
  },
  description:
    'Jayin Khanna: researcher in safe and trustworthy generative models (diffusion, flow matching, LLM trustworthiness). Project Associate-I at IISc Bangalore; Rank 1, BSc (Research) Mathematics, Shiv Nadar University.',
  openGraph: {
    title: 'Jayin Khanna | Safe & Trustworthy Generative Models',
    description:
      'Publications, research experience and honors of Jayin Khanna (IISc Bangalore, AI Institute of South Carolina).',
    type: 'profile',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jayin Khanna',
  jobTitle: 'Project Associate-I',
  affiliation: { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Science, Bangalore' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Shiv Nadar University' },
    { '@type': 'CollegeOrUniversity', name: 'IIT Madras' },
  ],
  knowsAbout: ['Generative models', 'Diffusion models', 'Flow matching', 'AI safety', 'LLM trustworthiness'],
  sameAs: ['https://github.com/jayinkhanna', 'https://www.linkedin.com/in/jayin-khanna-95a027212'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      {/* Google Analytics Scripts */}
      {GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
            {GA_TRACKING_ID && <GoogleAnalyticsEvents />}
            <Header />
            <div className="flex-grow">
              {children}
            </div>
            <Footer /> {/* ScrollToTopButton is inside Footer */}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
