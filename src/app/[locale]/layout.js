import '../style/globals.css';
import Theme from "../theme/theme";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

// components
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Loaderpage from '../components/header/component/loaderpage';
import CacheProviderComponent from '../theme/cacheprovidercomponent';

export default async function RootLayout({ children, params }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isRtl = locale === 'ar'; // تحديد ما إذا كانت اللغة عربية
  return (
      <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <body>
        <Theme>
            <CacheProviderComponent isRtl={isRtl}>
            <NextIntlClientProvider messages={messages}>
                <Header/>
                <Loaderpage/>
                  {children}
                <Footer/>
            </NextIntlClientProvider>
            </CacheProviderComponent>
        </Theme>
      </body>
      </html>
  );
}
