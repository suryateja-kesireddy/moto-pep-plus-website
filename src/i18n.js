import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import products from "./data/products";

const resources = {
    en: {
        translation: {
            heroTitle1: "Upgrade",
            heroTitle2: "Your Drive",
            heroDesc:
                "Premium car accessories, modifications, detailing and customization services designed for automotive enthusiasts in Hyderabad.",
            productsHeading1: "Premium",
            productsHeading2: "Products",

            productsSubtitle:
                "Explore premium automotive accessories crafted for car enthusiasts and customization lovers.",
            products: "Products",
            services: "Services",
            gallery: "Gallery",
            contact: "Contact",

            exploreBtn: "Explore Products",
            contactBtn: "Contact Us",
            brandName: "MOTO PEP",
            brandSub: "CAR ACCESSORIES",
            chatBtn: "Chat",
            home: "Home",
            servicesHeading: "Premium Services",
            galleryHeading: "Automotive Gallery",
            reviewsHeading: "Customer Reviews",
            contactHeading: "Contact Us",
            sendInquiry: "Send Inquiry",
            sendMessage: "Send Message",
            visitShop: "Visit Our Shop",
            callUs: "Call Us",
            whatsapp: "WhatsApp",
            chatWithUs: "Chat With Us",
            footerTag:
                "Premium automotive accessories and customization services in Hyderabad.",

            quickLinks: "Quick Links",

            followUs: "Follow Us",

            copyright:
                "© 2026 Moto Pep Plus Yapral. All rights reserved.",
            chat: "Chat",
            service1Title: "Interior Customization",

            service1Desc:
                "Premium interior upgrades with stylish accessories and detailing.",

            service2Title: "Accessory Installation",

            service2Desc:
                "Professional fitting for mirrors, spoilers, wheel caps and more.",

            service3Title: "Car Detailing",

            service3Desc:
                "Deep cleaning and polishing for a showroom-quality finish.",

            service4Title: "Lighting Upgrades",

            service4Desc:
                "Modern lighting installations for enhanced style and visibility.",
            verifiedReviews: "9+ Verified Reviews",

            reviewsSubtitle:
                "Real customer experiences from premium automotive customization, detailing and accessory installations.",

            verifiedCustomer: "Verified Customer",

            review1:
                "Excellent job and very polite service. Highly recommended for car modifications and accessories.",

            review2:
                "Very good experience and quality products. Professional installation and customer support.",

            review3:
                "Moto Pep Plus is one of the trusted car accessories shops in Yapral with premium quality products.",
                preOwnedCars: "Pre-Owned Cars",
                SellYourCar: "Sell Your Car",
        },
    },

    te: {
        translation: {
            heroTitle1: "మీ కారును",
            heroTitle2: "అప్‌గ్రేడ్ చేయండి",
            heroDesc:
                "హైదరాబాద్‌లో ఆటోమొబైల్ ప్రియుల కోసం ప్రీమియం కార్ యాక్సెసరీస్ మరియు కస్టమైజేషన్ సేవలు.",

            productsHeading1: "ప్రీమియం",
            productsHeading2: "ఉత్పత్తులు",
            products: "ఉత్పత్తులు",

            productsSubtitle:
                "కార్ ప్రేమికుల కోసం ప్రీమియం ఆటోమోటివ్ యాక్సెసరీస్ మరియు కస్టమైజేషన్ ఉత్పత్తులు.",
            services: "సేవలు",
            gallery: "గ్యాలరీ",
            contact: "సంప్రదించండి",

            exploreBtn: "ఉత్పత్తులు చూడండి",
            contactBtn: "మమ్మల్ని సంప్రదించండి",
            brandName: "మోటో పెప్",
            brandSub: "కార్ యాక్సెసరీస్",
            chatBtn: "చాట్",
            home: "హోమ్",
            servicesHeading: "ప్రీమియం సేవలు",
            galleryHeading: "ఆటోమొబైల్ గ్యాలరీ",
            reviewsHeading: "కస్టమర్ సమీక్షలు",
            contactHeading: "మమ్మల్ని సంప్రదించండి",
            sendInquiry: "విచారణ పంపండి",
            sendMessage: "సందేశం పంపండి",
            visitShop: "మా షాప్‌ను సందర్శించండి",
            callUs: "మాకు కాల్ చేయండి",
            whatsapp: "వాట్సాప్",
            chatWithUs: "మాతో చాట్ చేయండి",
            footerTag:
                "హైదరాబాద్‌లో ప్రీమియం కార్ యాక్సెసరీస్ మరియు కస్టమైజేషన్ సేవలు.",

            quickLinks: "త్వరిత లింకులు",

            followUs: "మమ్మల్ని ఫాలో అవ్వండి",

            copyright:
                "© 2026 మోటో పెప్ ప్లస్ యాప్రాల్. అన్ని హక్కులు కలవు.",
            chat: "చాట్",
            service1Title: "ఇంటీరియర్ కస్టమైజేషన్",

            service1Desc:
                "స్టైలిష్ యాక్సెసరీస్ మరియు డీటైలింగ్‌తో ప్రీమియం ఇంటీరియర్ అప్‌గ్రేడ్స్.",

            service2Title: "యాక్సెసరీ ఇన్‌స్టాలేషన్",

            service2Desc:
                "మిర్రర్స్, స్పాయిలర్స్, వీల్ క్యాప్స్ మరియు మరిన్ని ప్రొఫెషనల్ ఫిట్టింగ్.",

            service3Title: "కార్ డీటైలింగ్",

            service3Desc:
                "షోరూమ్ ఫినిష్ కోసం డీప్ క్లీనింగ్ మరియు పాలిషింగ్.",

            service4Title: "లైటింగ్ అప్‌గ్రేడ్స్",

            service4Desc:
                "మెరుగైన స్టైల్ మరియు విజిబిలిటీ కోసం మోడర్న్ లైటింగ్ ఇన్‌స్టాలేషన్.",
            verifiedReviews: "9+ ధృవీకరించిన సమీక్షలు",

            reviewsSubtitle:
                "ప్రీమియం ఆటోమోటివ్ కస్టమైజేషన్, డీటైలింగ్ మరియు యాక్సెసరీ ఇన్‌స్టాలేషన్‌లపై నిజమైన కస్టమర్ అనుభవాలు.",

            verifiedCustomer: "ధృవీకరించిన కస్టమర్",

            review1:
                "అద్భుతమైన పని మరియు మర్యాదపూర్వక సేవ. కార్ మోడిఫికేషన్స్ మరియు యాక్సెసరీస్ కోసం బలంగా సిఫార్సు చేస్తాను.",

            review2:
                "చాలా మంచి అనుభవం మరియు నాణ్యమైన ఉత్పత్తులు. ప్రొఫెషనల్ ఇన్‌స్టాలేషన్ మరియు కస్టమర్ సపోర్ట్.",

            review3:
                "మోటో పెప్ ప్లస్ యాప్రాల్‌లో నమ్మకమైన కార్ యాక్సెసరీస్ షాప్స్‌లో ఒకటి.",
                preOwnedCars: "ప్రీ-ఓన్డ్ కార్లు",
                SellYourCar: "మీ కారును అమ్మండి",
        },
    },

    hi: {
        translation: {
            heroTitle1: "अपनी कार को",
            heroTitle2: "अपग्रेड करें",
            heroDesc:
                "हैदराबाद में ऑटोमोबाइल प्रेमियों के लिए प्रीमियम कार एक्सेसरीज़ और कस्टमाइजेशन सेवाएं।",

            productsHeading1: "प्रीमियम",
            productsHeading2: "प्रोडक्ट्स",
            products: "प्रोडक्ट्स",

            productsSubtitle:
                "कार प्रेमियों के लिए प्रीमियम ऑटोमोटिव एक्सेसरीज़ और कस्टमाइजेशन प्रोडक्ट्स।",
            services: "सेवाएं",
            gallery: "गैलरी",
            contact: "संपर्क करें",

            exploreBtn: "प्रोडक्ट्स देखें",
            contactBtn: "हमसे संपर्क करें",
            brandName: "मोटो पेप",
            brandSub: "कार एक्सेसरीज़",
            chatBtn: "चैट",
            home: "होम",
            servicesHeading: "प्रीमियम सेवाएं",
            galleryHeading: "ऑटोमोबाइल गैलरी",
            reviewsHeading: "ग्राहक समीक्षाएं",
            contactHeading: "संपर्क करें",
            sendInquiry: "पूछताछ भेजें",
            sendMessage: "मैसेज भेजें",
            visitShop: "हमारी दुकान पर आएं",
            callUs: "कॉल करें",
            whatsapp: "व्हाट्सएप",
            chatWithUs: "हमसे चैट करें",
            footerTag:
                "हैदराबाद में प्रीमियम कार एक्सेसरीज़ और कस्टमाइजेशन सेवाएं।",

            quickLinks: "क्विक लिंक",

            followUs: "हमें फॉलो करें",

            copyright:
                "© 2026 मोटो पेप प्लस याप्राल। सर्वाधिकार सुरक्षित।",
            chat: "चैट",
            service1Title: "इंटीरियर कस्टमाइजेशन",

            service1Desc:
                "स्टाइलिश एक्सेसरीज़ और डिटेलिंग के साथ प्रीमियम इंटीरियर अपग्रेड्स।",

            service2Title: "एक्सेसरी इंस्टॉलेशन",

            service2Desc:
                "मिरर, स्पॉइलर, व्हील कैप्स आदि की प्रोफेशनल फिटिंग।",

            service3Title: "कार डिटेलिंग",

            service3Desc:
                "शोरूम क्वालिटी फिनिश के लिए डीप क्लीनिंग और पॉलिशिंग।",

            service4Title: "लाइटिंग अपग्रेड्स",

            service4Desc:
                "बेहतर स्टाइल और विजिबिलिटी के लिए मॉडर्न लाइटिंग इंस्टॉलेशन।",
            verifiedReviews: "9+ सत्यापित रिव्यू",

            reviewsSubtitle:
                "प्रीमियम ऑटोमोटिव कस्टमाइजेशन, डिटेलिंग और एक्सेसरी इंस्टॉलेशन के वास्तविक ग्राहक अनुभव।",

            verifiedCustomer: "सत्यापित ग्राहक",

            review1:
                "बहुत अच्छा काम और विनम्र सेवा। कार मॉडिफिकेशन और एक्सेसरीज़ के लिए अत्यधिक अनुशंसित।",

            review2:
                "बहुत अच्छा अनुभव और क्वालिटी प्रोडक्ट्स। प्रोफेशनल इंस्टॉलेशन और ग्राहक सहायता।",

            review3:
                "मोटो पेप प्लस याप्राल में भरोसेमंद कार एक्सेसरीज़ शॉप्स में से एक है।",
                preOwnedCars: "प्री-ओन कारें",
                SellYourCar: "अपनी कार बेचें",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;