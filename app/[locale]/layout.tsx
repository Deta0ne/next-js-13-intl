import './globals.css';
import type { Metadata } from 'next';

import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
    const locale = useLocale();

    // Validate that the incoming `locale` parameter is a valid locale
    if (params.locale !== locale) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    );
}
