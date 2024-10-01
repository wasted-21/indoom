import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // يمكنك إزالة هذا إذا كنت لا تستخدم ملفات ترجمة خارجية
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: localStorage.getItem('lang') || 'en', // تحديد اللغة بناءً على `localStorage`
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "welcome": "Welcome",
          "home": "Home",
          "carinfo": "Car Info",
          "comparison": "Comparison",
          "workshop": "Workshop",
          "dealer": "Dealer",
          "carshop": "Car Shop",
          "auctions": "Auctions",
          "services": "Services",
          "about": "About us",
          "support": "Support",
          "mail": "Mail",
          "chat": "Chat",


          "signin": "Signin",
          "signup": "Signup",
          "logout": "Logout",


          "error": "Error",
          "errorpage": "Page Not Found",

          "more": "More",
        },
      },
      ar: {
        translation: {
          "welcome": "مرحبا",
          "home": "الصفحة الرئيسية",
          "carinfo": "معلومات عن السيارت",
          "comparison": "مقارنة",
          "workshop": "ورش الصيانة",
          "dealer": "تجار قطع الغيار",
          "carshop": "متجر سيارات",
          "auctions": "مزادات",
          "services": "الخدمات",
          "about": "معلومات عنا",
          "support": "الدعم الفني",
          "mail": "ايميل",
          "chat": "محادثة",

          "signin": "تسجيل الدخول",
          "signup": "انشاء حساب",
          "logout": "تسجيل الخروج",

          "error": "خطاء",
          "errorpage": "الفصحة ليست موجوده",

          "more": "المزيد",
        },
      },
    },
  });

/*

// إضافة خاصية تغيير اتجاه النص بناءً على اللغة
i18n.on('languageChanged', (lng) => {
  if (lng === 'ar') {
    document.documentElement.dir = 'rtl'; // عند اختيار العربية، يتم تعيين الاتجاه إلى اليمين
  } else {
    document.documentElement.dir = 'ltr'; // عند اختيار الإنجليزية أو غيرها يتم تعيين الاتجاه إلى اليسار
  }
});

*/
export default i18n;
