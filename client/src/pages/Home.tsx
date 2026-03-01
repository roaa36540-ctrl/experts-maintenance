import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Zap, Shield, Clock, MapPin, CheckCircle, Lightbulb, AlertCircle, Wrench, Droplet, Wind, Snowflake, Waves, Flame, Microwave, Thermometer, Box, Utensils, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * DESIGN PHILOSOPHY: Expert Authority & Reliability
 * - Color: Deep Navy (#1E3A5F), Gold Accent (#D4A017), White
 * - Typography: Cairo font for Arabic authenticity
 * - Layout: Structured sections with expert credibility signals
 * - Trust signals: Certified technicians, 2-year warranty, nationwide coverage
 * - Conversion: Sticky CTA, floating buttons, multiple touch points
 */

// FAQ Accordion Component
function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-blue-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-blue-50 transition-colors text-right"
      >
        <ChevronDown
          size={20}
          className={`text-blue-700 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <h3 className="text-lg font-bold text-blue-900 flex-1 mr-4">{question}</h3>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-blue-50 border-t border-blue-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  const services = [
    {
      id: 1,
      title: "إصلاح الغسالات الأوتوماتيك والمجففات",
      icon: Waves,
      faults: "توقف الدوران، تسريب المياه، أصوات مزعجة، عطل التجفيف",
      points: [
        "تشخيص دقيق: فحص شامل للمحرك والحشيات والمضخة وأنظمة التحكم الإلكترونية",
        "إصلاح متكامل: تغيير الحشيات المتهالكة والخراطيم والأحزمة وإصلاح المحرك",
        "قطع غيار معتمدة: نستخدم حصرياً قطع غيار مطابقة للمواصفات الأصلية",
        "ضمان سنتين كاملتين: على جميع أعمال الإصلاح والقطع المستبدلة",
        "زيارة منزلية سريعة: نصل إليك خلال ساعات قليلة من تلقي طلبك"
      ],
      image: "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663390656223/gacAxSHtSCPQzLNg.jpg?Expires=1803857120&Signature=I41M7T8uGF9D~3Z3ES0Om5n3Gm82GBhslqNzNEC8ultYVGYFY4IGARA8mhXh~4oZxSRKaCPBvTyUVFZgvCmcGfi46IYVn2nc7pm3H-WV9siTXA0XB2hqnmsFESwDZnBSnipeKNfXPzbhwlpkhCh45CQ7VOEPqzaRvsm6la33AVGos69v4LpivVN9Nt1-e5Fauh3O-cuoBTElLOVYS2F~zAArkI8Dhxr86TuZjdzg~nrsdjTnzdfzn8KA~1AGs~pQbQWv6sl0X0YLcchujmuFYdF2IPKvtTA05WT~6rqKRxM5D1AkFGPB6PwCi3mR0-J755zRgokZm0N9eRgU7QQQ9w__&Key-Pair-Id=K2HSFNDJXOU9YS",
      ctas: [
        { text: "حجز موعد فوري", action: "book" },
        { text: "اتصل بالخبراء", action: "call" }
      ]
    },
    {
      id: 2,
      title: "صيانة الثلاجات والفريزرات العميقة",
      icon: Snowflake,
      faults: "ضعف التبريد، تسريب المياه، ضوضاء الضاغط، تجمد الطعام",
      points: [
        "فحص دورة التبريد: كشف التسريبات وإعادة ضخ الفريون بالكمية الدقيقة",
        "إصلاح الضاغط: استبدال الضاغط التالف أو معالجة مشاكل دورة التبريد",
        "تنظيف الملفات: تنظيف احترافي للمروحة والملفات لاستعادة الكفاءة الكاملة",
        "معالجة التسريبات: فحص وإصلاح مواسير التصريف المسدودة أو التالفة",
        "ضمان شامل: سنتان كاملتان على الإصلاح مع ضمان الأداء الأمثل"
      ],
      image: "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663390656223/gqmftsTJtycmrmvT.jpg?Expires=1803857120&Signature=M-hlcPGDnTM7oW92eYjHS4PPfNYJSFXpESzomR~nPa2unSeUC675HbIYyBPyrcGkeb5e8saemqHCMDaZWCdO25hnG9o3B6gPIXqkj0JVYH-OoHIMazxmASNQ8Nt9SgH2QMVrWcprwcowX3-wF58CxnBSCCGPNvva5vM6QKHjOgnfUBSS3Z9-GJPgH-9mjV0Y9etTHwZeoloF42XzYR~L3ZWKtJK8pp-nyknO1Q7F2cvN6VwFSOaiv7RrofnTLyBX4~1mxCpVZAxsJQIZOweCS14fi73Y7A~-zqm7iAKJvq5emmFSq81f-NNDFzX4cCj8yDiaLeuPNoejg0aeCZsx1w__&Key-Pair-Id=K2HSFNDJXOU9YS",
      ctas: [
        { text: "تواصل مع خبير التبريد", action: "contact" },
        { text: "اطلب الخدمة الآن", action: "request" }
      ]
    },
    {
      id: 3,
      title: "صيانة مكيفات الهواء والتكييف المركزي",
      icon: Wind,
      faults: "ضعف التبريد، تسريب الفريون، ضوضاء المحرك، عطل التشغيل",
      points: [
        "صيانة وقائية دورية: تنظيف المرشحات والملفات الداخلية والخارجية بمعدات متخصصة",
        "كشف التسريبات الدقيق: أجهزة إلكترونية حديثة لرصد أي تسريب في دورة الفريون",
        "ضخ الفريون: إعادة ملء الفريون بالكمية المحددة وفق مواصفات الشركة المصنعة",
        "إصلاح الأعطال الكهربائية: فحص وإصلاح المكثفات والمحركات والدوائر الإلكترونية",
        "ضمان الأداء الأمثل: سنتان على الإصلاح مع ضمان كفاءة التبريد المثالية"
      ],
      image: "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663390656223/ZndTdGsjlOWxRqzL.jpg?Expires=1803857120&Signature=HBENV~DdwDMoY0QgLfta3MK7pNl30-k0FkYDqMd0VHW~zIXhCP42zDx1VEfutYlWmwhQw2ronKMa026S4mppIJX71KK-3a8tmFKkvBPiVWynNtq69tjtHZRRYGtYn~Nk9FczIoSbhhQbTDgeoPtdzJAb8Nb-Tbpej9iMshMo8iMaeUgo309FNDCVhqIIDB3bsYrtKPB7imcAMM7pUKb0O8IT4QiMQbbymatQjTnCi3FQI3X2RjGJhvth7VJvnWFFAHbFeUEm1qbXOFjtoHGLrVpKC~-YTMq3TlmF611se3Kn~tTy-Bbcnnqu5h9upuKuRhVtbG3guAxHXUjLgF1evw__&Key-Pair-Id=K2HSFNDJXOU9YS",
      ctas: [
        { text: "حجز موعد فوري", action: "book" },
        { text: "اتصل بالخبراء", action: "call" }
      ]
    },
    {
      id: 4,
      title: "إصلاح غسالات الصحون والأطباق",
      icon: Utensils,
      faults: "عدم النظافة الكافية، تسريب المياه، عطل التجفيف، أخطاء الدورة",
      points: [
        "فحص رشاشات المياه: تنظيف وفحص ذراعي الرش لضمان توزيع المياه الصحيح",
        "إصلاح دورات الغسيل: فحص اللوحة الإلكترونية وإصلاح مشاكل برامج الغسيل",
        "معالجة التسريبات: استبدال الأختام والخراطيم والصمامات التالفة",
        "تنظيف عميق شامل: تنظيف الفلاتر والمضخة والأجزاء الداخلية بالكامل",
        "ضمان الجودة الكاملة: سنتان على جميع قطع الغيار وأعمال الإصلاح"
      ],
      image: "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663390656223/InBQpyUqSYeuHwuN.jpg?Expires=1803857120&Signature=BGvT1GLQ8LJjdwKREJgyIOm0A7hfThIJ15TrUJFLjN3SBciYDwkD5WNyWLKI43HRoufyX3qE20QbLsl6dE0vnfZdiuag42GD8X3kzVxbH~OXQyv2imq44AyW3dmq7jCvZjl4J0-Ch63o1h0XDKuQ3kyil6vwqBzy3SNWw8deGnHfZcm-c8Oth1n6HcipkisYfqJm3LMDEGEj-S1kTYlfypHw13b1uMLotKG9Ni5RVeLDoMBulAQH91yQui95V3jJrMn-xI-C2xkPpS8Sf1IlxbngVlxoIrF8RQMJ-Tb9PlS4MPD4zSvdhqpW0QhwmATzVGhX~v3Gx6~LLV~WTDVHjA__&Key-Pair-Id=K2HSFNDJXOU9YS",
      ctas: [
        { text: "تواصل مع خبير الصيانة", action: "contact" },
        { text: "اطلب الخدمة الآن", action: "request" }
      ]
    },
    {
      id: 5,
      title: "إصلاح أفران الميكروويف والأفران الكهربائية",
      icon: Microwave,
      faults: "عدم التسخين، تلف الداخل، عطل التشغيل، أصوات غير طبيعية",
      points: [
        "فحص عنصر التسخين: تشخيص وإصلاح أو استبدال عنصر التسخين المعطوب",
        "إصلاح الدوائر الإلكترونية: فحص وإصلاح المكثفات والمحولات والدوائر الكهربائية",
        "استبدال القطع التالفة: استخدام قطع غيار مطابقة للمواصفات الأصلية فقط",
        "اختبار الأداء والأمان: فحص شامل للأداء والسلامة قبل تسليم الجهاز",
        "ضمان السلامة الكاملة: سنتان مع ضمان السلامة الكهربائية والأداء"
      ],
      image: "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663390656223/dYMNCnIEjPaKxVJf.jpg?Expires=1803857120&Signature=R2Q1C2q84Iop4iQAoUJ6jJVDyzSL1LSpgIzZsnddq2YXrp6cgdIghbjoPNTwZIlaodgzICUOUNvP65ZJkt5Fb-zQdzOg2qKyxThVxBmJlvKTPEH8VTTLHw8EVHgD-0F3UbG9aFCCfEMpjoCma~4LtA8m0aVDiXy~5WAdc1S0GkBcRO542DLUeixFNepj7G7Wmp1MU9q5~GdXtH~EhtFss4KalZW~XfNMxY3c~vXKMROiAjMaWIaxXH0gs1MnSQlqtL2hSqv2I9-j8dGeKRswncEQtN8AMdMusI5FDClXejntn6yPeIGmrWzlUCZdv4WR2nzIK3ypQULQRxozEX4aWg__&Key-Pair-Id=K2HSFNDJXOU9YS",
      ctas: [
        { text: "حجز موعد فوري", action: "book" },
        { text: "اتصل بالخبراء", action: "call" }
      ]
    },
    {
      id: 6,
      title: "إصلاح البوتاجازات وأفران الغاز",
      icon: Flame,
      faults: "عدم الاشتعال، تسريب الغاز، ضعف اللهب، عطل الفرن",
      points: [
        "فحص أمان شامل: كشف التسريبات وفحص الصمامات والوصلات بأجهزة متخصصة",
        "تنظيف الفوهات الاحترافي: تنظيف فوهات الغاز لضمان الاشتعال الصحيح والمتساوي",
        "إصلاح نظام الإشعال: فحص وإصلاح أو استبدال نظام الإشعال الكهربائي",
        "استبدال القطع التالفة: قطع غيار أصلية وموثوقة لجميع ماركات البوتاجاز",
        "ضمان السلامة: سنتان مع الالتزام الكامل بمعايير السلامة المعتمدة"
      ],
      image: "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663390656223/UVZkCLBRaNilUaPT.jpg?Expires=1803857120&Signature=ValSAv06~TOgznQLi33W4iQX-dkanTJbzCutfb3pCwc3~DunyZrqqMR0-UkvN3HIij8heyznooZY3DOVdaghntnslwhyuTDCEawKdsclotcK4ckZU38Jda25o0BfJfeV0-LKw2UOhMBaybcuKPQ59SQcBjfANjgyYcdix~G6gGjVTwt6Rfxr3EH-EaQrHQxYhINCHqrqvJw1rG5kWA1JQMFCJ8jQy8k79JPT2LupoyFgYwYuuvVhbF9TVsCBVlpnD2dTBcurw1iibZQ1IFBgMxz~PmWDnjUyOd3VW4xitW0VxA0wcYyXkG~XEJfAbnnQTy6LeDN-pcC~0TyHDg0mEA__&Key-Pair-Id=K2HSFNDJXOU9YS",
      ctas: [
        { text: "تواصل مع خبير الغاز", action: "contact" },
        { text: "اطلب الخدمة الآن", action: "request" }
      ]
    }
  ];

  const brands = [
    "أريستون", "بيكو", "بوش", "دايو", "إنديست", "كلفينيتور",
    "كيريازي", "إل جي", "سامسونج", "شارب", "يونيون إير", "ويستنجهاوس",
    "ويرلبول", "وايت بوينت", "وايت ويل", "زانوسي", "توشيبا"
  ];

  const handleCTA = (action: string) => {
    if (action === "call") {
      window.location.href = "tel:01157680948";
    } else if (action === "contact" || action === "request") {
      window.location.href = "https://wa.me/201157680948?text=مرحبا، أود الاستفسار عن خدمات مركز الخبراء للصيانة";
    } else {
      setShowContactForm(true);
    }
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
        {/* Top Section: Logo and Company Name */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <img
              src="https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663390656223/VoBpzremPKllpZdR.png?Expires=1803857120&Signature=oK6mz5KhyFvqiZtyImoTY0o6v1VPE2QPph0pRT5BGjykCdGpoVygb64Dsxc4TMbRzumGwueN5c3rVQ0~FqfooNMkNWk5f-sl4RHqv0lqCV0YD8oRaTuMUlf~edaARXOTZX5~9oHnpwsIIrozBTl3Y~~Pcq1T9P~dYthLMRF66GDdh22bBOSaDiMxi3nBHSjHZF7KhEkEK8vA1H6DKXALDRpNVDnzBEMY9ZizfeHAoZw5lZyh5BSlh~5vnsq4Mze8jxx8I2R-Q56i1S3v2W-98LtQ-rBF0ae-PjgpaUGK5dUYGvELbPo0XHk1XAAkhHPz9wf9C4x1ez8fgEQbOjj2cQ__&Key-Pair-Id=K2HSFNDJXOU9YS"
              alt="شعار مركز الخبراء للصيانة"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-700">مركز الخبراء للصيانة</h1>
              <p className="text-sm text-gray-600">خبراء متخصصون في إصلاح الأجهزة المنزلية</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Contact CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 md:py-3">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-6 overflow-x-auto">
              {/* Hotline */}
              <a href="tel:15912" className="group flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-red-100 transition-colors flex-shrink-0 md:w-auto justify-center">
                <div className="bg-red-500 text-white p-1.5 md:p-2.5 rounded-full group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">الخط الساخن</p>
                  <p className="text-base md:text-lg font-bold text-red-600">15912</p>
                </div>
              </a>

              {/* Mobile */}
              <a href="tel:01157680948" className="group flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-blue-200 transition-colors flex-shrink-0 md:w-auto justify-center">
                <div className="bg-blue-600 text-white p-1.5 md:p-2.5 rounded-full group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">موبايل</p>
                  <p className="text-base md:text-lg font-bold text-blue-700">01157680948</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/201157680948" className="group flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-green-100 transition-colors flex-shrink-0 md:w-auto justify-center">
                <div className="bg-green-500 text-white p-1.5 md:p-2.5 rounded-full group-hover:scale-110 transition-transform flex-shrink-0">
                  <MessageCircle size={16} />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">واتساب</p>
                  <p className="text-sm font-bold text-green-600">تواصل</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gray-900" style={{ height: 'clamp(280px, 60vw, 680px)' }}>
        {/* Hero Image - Modern */}
        <img
          src="/hero_new.jpg"
          alt="مركز الخبراء للصيانة - خبراء متخصصون في إصلاح الأجهزة المنزلية"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        {/* Gradient overlay for CTA buttons only at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* CTA Buttons at bottom */}
        <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
          <a href="tel:15912" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-7 rounded-full text-base md:text-lg transition-all shadow-lg">
            اتصل الآن: 15912
          </a>
          <a href="https://wa.me/201157680948" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-7 rounded-full text-base md:text-lg transition-all shadow-lg">
            واتساب خدمة العملاء
          </a>
        </div>
      </section>

      {/* Comprehensive Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">حلول صيانة شاملة لجميع أجهزتك</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">يضم مركز الخبراء فريقاً من المهندسين والفنيين المتخصصين لإصلاح كافة أنواع الأجهزة المنزلية</p>
          <div className="max-w-4xl mx-auto">
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-center text-blue-900 font-semibold text-lg mb-6">
                خبراؤنا متخصصون في صيانة جميع أنواع الأجهزة المنزلية
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700">
                <div className="text-center flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <Wind className="text-blue-700" size={32} />
                  <span className="font-semibold">مكيفات الهواء</span>
                </div>
                <div className="text-center flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <Snowflake className="text-blue-700" size={32} />
                  <span className="font-semibold">الثلاجات والفريزر</span>
                </div>
                <div className="text-center flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <Waves className="text-blue-700" size={32} />
                  <span className="font-semibold">الغسالات الأوتوماتيك</span>
                </div>
                <div className="text-center flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <Flame className="text-blue-700" size={32} />
                  <span className="font-semibold">البوتاجازات</span>
                </div>
                <div className="text-center flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <Microwave className="text-blue-700" size={32} />
                  <span className="font-semibold">أفران الميكروويف</span>
                </div>
                <div className="text-center flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <Thermometer className="text-blue-700" size={32} />
                  <span className="font-semibold">السخانات الكهربائية</span>
                </div>
                <div className="text-center flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <Box className="text-blue-700" size={32} />
                  <span className="font-semibold">الفريزرات العميقة</span>
                </div>
                <div className="text-center flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <Utensils className="text-blue-700" size={32} />
                  <span className="font-semibold">غسالات الصحون</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/hero_section.jpg"
              alt="خبير صيانة محترف من مركز الخبراء للصيانة"
              className="w-full h-72 md:h-96 object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Trust Ribbon */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center">
              <Shield className="text-blue-700" size={32} />
              <div className="text-right">
                <p className="font-bold text-blue-900">قطع غيار مطابقة للمواصفات</p>
                <p className="text-sm text-blue-700">جودة معتمدة ومضمونة</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Zap className="text-blue-700" size={32} />
              <div className="text-right">
                <p className="font-bold text-blue-900">ضمان سنتان كاملتان</p>
                <p className="text-sm text-blue-700">على جميع أعمال الإصلاح</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Clock className="text-blue-700" size={32} />
              <div className="text-right">
                <p className="font-bold text-blue-900">خدمة طوارئ 24/7</p>
                <p className="text-sm text-blue-700">متاح على مدار الساعة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Banner */}
      <section className="bg-blue-700 text-white py-6">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <MapPin size={24} />
          <p className="text-lg font-semibold">نغطي جميع محافظات جمهورية مصر العربية - خبراؤنا يصلونك أينما كنت</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">لماذا تختارنا؟</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">نحن لسنا مجرد مركز صيانة — نحن شركاء نجاحك وراحتك في المنزل</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">فنيين معتمدين</h3>
              <p className="text-gray-600 text-sm">جميع فنيينا حاصلين على شهادات معتمدة وخبرة تزيد عن 10 سنوات في مجال الصيانة</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">ضمان سنتين كاملتين</h3>
              <p className="text-gray-600 text-sm">ضمان شامل على جميع الإصلاحات وقطع الغيار بدون أي تكاليف إضافية أو مفاجآت</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">أسعار ثابتة بدون مفاجآت</h3>
              <p className="text-gray-600 text-sm">نحدد السعر قبل بدء العمل — لا توجد تكاليف خفية أو فاتورة مفاجئة بعد الانتهاء</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">خدمة طوارئ 24/7</h3>
              <p className="text-gray-600 text-sm">متاحين على مدار الساعة لحالات الطوارئ — نصلك في نفس اليوم بدون تأخير</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">مميزاتنا</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">ما يجعلنا الخيار الأول لآلاف العملاء في جميع أنحاء مصر</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">ضمان سنتين كاملتين</h3>
                <p className="text-gray-600 text-sm">على جميع الإصلاحات وقطع الغيار</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">خدمة 24/7</h3>
                <p className="text-gray-600 text-sm">متاحون على مدار الساعة لحالات الطوارئ</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">فنيون معتمدون</h3>
                <p className="text-gray-600 text-sm">خبرة تزيد عن 10 سنوات في الصيانة</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">أسعار واضحة مسبقاً</h3>
                <p className="text-gray-600 text-sm">تقدير السعر قبل بدء العمل بدون تكاليف خفية</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Wrench className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">قطع غيار أصلية</h3>
                <p className="text-gray-600 text-sm">نستخدم قطع غيار معتمدة لجميع الماركات</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">تغطية شاملة</h3>
                <p className="text-gray-600 text-sm">نخدم جميع محافظات مصر بدون استثناء</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">من نحن - مركز الخبراء للصيانة</h2>
            <p className="text-lg text-gray-700 mb-4">
              مركز الخبراء للصيانة هو مؤسسة متخصصة تضم نخبة من المهندسين والفنيين المعتمدين في مجال إصلاح الأجهزة المنزلية.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              نعتمد على أحدث المعدات التشخيصية والأدوات المتخصصة لضمان دقة التشخيص وجودة الإصلاح في أقصر وقت ممكن.
            </p>
            <p className="text-lg text-gray-700">
              نصل إليك في جميع محافظات مصر ونعمل على مدار الساعة طوال أيام الأسبوع لضمان حصولك على الخدمة في الوقت المناسب.
            </p>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-900 font-semibold">مركز الخبراء للصيانة - مركز مستقل ومتخصص</p>
              <p className="text-sm text-blue-800 mt-2">
                نحن مركز صيانة مستقل ولا نمثل أي توكيل رسمي أو وكالة معتمدة للماركات المذكورة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">خدماتنا المتخصصة</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">فريق خبرائنا مستعد لإصلاح جميع أعطال أجهزتك المنزلية باحترافية عالية</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon && <service.icon className="text-blue-700" size={28} />}
                    <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                  </div>

                  {/* Bullet Points with Checkmarks */}
                  <div className="space-y-2 mb-4 flex-grow">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 flex-col mt-auto">
                    {service.ctas.map((cta, idx) => (
                      <Button
                        key={idx}
                        onClick={() => handleCTA(cta.action)}
                        variant={idx === 0 ? "default" : "outline"}
                        className={idx === 0 ? "bg-blue-700 hover:bg-blue-800" : ""}
                        size="sm"
                      >
                        {cta.text}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">الماركات التي يتخصص فيها خبراؤنا</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">خبراؤنا مدربون على صيانة جميع الماركات العالمية والمحلية الشهيرة</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((brand, idx) => (
              <div
                key={brand}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon circle */}
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300 flex items-center justify-center">
                    <Wrench className="text-blue-700" size={24} />
                  </div>

                  {/* Brand name */}
                  <p className="font-bold text-gray-900 text-lg group-hover:text-blue-900 transition-colors duration-300">{brand}</p>

                  {/* Checkmark indicator */}
                  <div className="mt-3 flex justify-center">
                    <CheckCircle className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-700 text-center">
            <p className="text-blue-900 font-bold text-lg mb-2">✓ جميع الماركات في نطاق خبرتنا</p>
            <p className="text-sm text-blue-800">
              يستخدم خبراؤنا قطع غيار مطابقة للمواصفات الأصلية وعالية الجودة لجميع الماركات. فريقنا المتخصص مؤهل لصيانة جميع الأجهزة بأعلى معايير الجودة والاحترافية.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">نتائج عمل خبرائنا - قبل وبعد الإصلاح</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">شاهد كيف يحول خبراؤنا الأجهزة المعطوبة إلى أجهزة تعمل بكفاءة مثالية</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1: Washing Machine */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img src="/before_washing_real.jpg" alt="قبل إصلاح الغسالة" className="w-full h-48 object-cover" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">قبل</div>
                </div>
                <div className="relative">
                  <img src="/after_washing_real.jpg" alt="بعد إصلاح الغسالة" className="w-full h-48 object-cover" />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">بعد</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-blue-900 mb-2">إصلاح غسالة أوتوماتيك</h3>
                <p className="text-sm text-gray-700 mb-2"><strong>العطل:</strong> تسريب مياه وتوقف الدوران تماماً</p>
                <p className="text-sm text-gray-700 mb-2"><strong>الحل:</strong> استبدال المضخة والحشيات وإصلاح المحرك</p>
                <p className="text-sm text-gray-700"><strong>النتيجة:</strong> غسالة تعمل بكفاءة كاملة مع ضمان سنتين</p>
              </div>
            </Card>

            {/* Case 2: Refrigerator */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img src="/before_fridge_real.jpg" alt="قبل إصلاح الثلاجة" className="w-full h-48 object-cover" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">قبل</div>
                </div>
                <div className="relative">
                  <img src="/after_fridge_real.jpg" alt="بعد إصلاح الثلاجة" className="w-full h-48 object-cover" />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">بعد</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-blue-900 mb-2">إصلاح ثلاجة عائلية</h3>
                <p className="text-sm text-gray-700 mb-2"><strong>العطل:</strong> تجمد الطعام وتراكم الثلج الزائد</p>
                <p className="text-sm text-gray-700 mb-2"><strong>الحل:</strong> إصلاح الضاغط وإعادة ضخ الفريون وتنظيف الملفات</p>
                <p className="text-sm text-gray-700"><strong>النتيجة:</strong> ثلاجة تبرد بدرجة حرارة مثالية ومنتظمة</p>
              </div>
            </Card>

            {/* Case 3: Air Conditioner */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img src="/before_ac_real.jpg" alt="قبل صيانة المكيف" className="w-full h-48 object-cover" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">قبل</div>
                </div>
                <div className="relative">
                  <img src="/after_ac_real.jpg" alt="بعد صيانة المكيف" className="w-full h-48 object-cover" />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">بعد</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-blue-900 mb-2">صيانة مكيف سبليت</h3>
                <p className="text-sm text-gray-700 mb-2"><strong>العطل:</strong> ضعف التبريد وتراكم الأوساخ في الفلاتر</p>
                <p className="text-sm text-gray-700 mb-2"><strong>الحل:</strong> تنظيف شامل وإعادة ضخ الفريون وإصلاح المكثف</p>
                <p className="text-sm text-gray-700"><strong>النتيجة:</strong> مكيف يعمل بأقصى كفاءة وتبريد فعال</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">ماذا يقول عملاؤنا</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">آلاف العملاء الراضين يثقون في خبراء مركزنا لإصلاح أجهزتهم المنزلية</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/customer_samia.jpg"
                  alt="سامية حسن"
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">سامية حسن</h3>
              <p className="text-sm text-blue-700 font-semibold mb-3">إصلاح الغسالة الأوتوماتيك</p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                الخبير اللي جه كان محترف جداً وعارف شغله. شخّص العطل في دقائق وأصلح الغسالة في أقل من ساعتين. الضمان سنتين ده بيريح البال.
              </p>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/customer_karim.jpg"
                  alt="كريم مصطفى"
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">كريم مصطفى</h3>
              <p className="text-sm text-blue-700 font-semibold mb-3">صيانة مكيف سبليت</p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                المكيف كان بيعمل صوت وما بيبردش. الخبير جه وعمل فحص شامل وأصلح المشكلة بسعر معقول. الخدمة احترافية والتعامل ممتاز.
              </p>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/customer_dina.jpg"
                  alt="دينا سمير"
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">دينا سمير</h3>
              <p className="text-sm text-blue-700 font-semibold mb-3">إصلاح الثلاجة</p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                الثلاجة كانت بتتجمد وما بتبردش صح. الخبير اكتشف إن الفريون خلص وأصلح التسريب وملأ الفريون. دلوقتي بتشتغل تمام التمام.
              </p>
            </Card>

            {/* Testimonial 4 */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/customer_hassan.jpg"
                  alt="حسن رمضان"
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">حسن رمضان</h3>
              <p className="text-sm text-blue-700 font-semibold mb-3">إصلاح البوتاجاز</p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                البوتاجاز كان مش بيشتعل وكنت خايف من تسريب الغاز. الخبير جه بسرعة وعمل فحص أمان شامل وأصلح المشكلة. شكراً على الاحترافية.
              </p>
            </Card>

            {/* Testimonial 5 */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/customer_rania.jpg"
                  alt="رانيا عادل"
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">رانيا عادل</h3>
              <p className="text-sm text-blue-700 font-semibold mb-3">إصلاح الميكروويف</p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                الميكروويف وقف فجأة ومش بيشتغل. الخبير جه في نفس اليوم وأصلحه بكفاءة. الخدمة على مدار الساعة دي ميزة رائعة جداً.
              </p>
            </Card>

            {/* Testimonial 6 */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/customer_tarek.jpg"
                  alt="طارق نبيل"
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">طارق نبيل</h3>
              <p className="text-sm text-blue-700 font-semibold mb-3">إصلاح غسالة الصحون</p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                غسالة الصحون كانت بتعمل صوت وما بتغسلش صح. الخبير عمل تنظيف شامل وغيّر الأختام. دلوقتي بتشتغل بشكل مثالي وهادي.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">مناطق الخدمة</h2>
          <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">خبراؤنا يصلونك أينما كنت في مصر — تغطية شاملة لجميع المحافظات</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {[
              "القاهرة", "الجيزة", "الإسكندرية", "المنصورة", "طنطا",
              "الشرقية", "السويس", "المنيا", "أسيوط", "سوهاج",
              "الفيوم", "بني سويف", "القليوبية", "الدقهلية", "البحيرة"
            ].map((city) => (
              <div key={city} className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 transition-colors rounded-lg p-3">
                <MapPin className="text-blue-300 flex-shrink-0" size={16} />
                <span className="font-semibold text-sm">{city}</span>
              </div>
            ))}
          </div>
          <div className="text-center p-6 bg-blue-800 rounded-xl border border-blue-700">
            <p className="text-blue-100 font-semibold text-lg mb-2">✓ نغطي جميع محافظات جمهورية مصر العربية</p>
            <p className="text-blue-300 text-sm mb-4">لم تجد محافظتك في القائمة؟ اتصل بنا وسنتحقق من تغطيتنا لمنطقتك</p>
            <a href="tel:15912" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all">
              اتصل بنا: 15912
            </a>
          </div>
        </div>
      </section>

      {/* Maintenance Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">نصائح خبرائنا للصيانة الوقائية</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">اتبع نصائح خبرائنا للحفاظ على أجهزتك وإطالة عمرها الافتراضي</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Washing Machine Tips */}
            <Card className="p-6 border-l-4 border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <Droplet className="text-blue-700" size={28} />
                <h3 className="text-xl font-bold text-blue-900">الغسالات الأوتوماتيك والمجففات</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>نظف الفلتر شهرياً:</strong> فلتر الخيوط والنسالة يجب تنظيفه بانتظام لضمان الكفاءة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>افحص الخراطيم دورياً:</strong> تأكد من سلامة خراطيم المياه وعدم وجود تشققات</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>جفف الحشيات بعد الغسيل:</strong> امسح حشيات الباب لمنع تراكم الرطوبة والعفن</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>لا تحمّل الغسالة زيادة:</strong> الحمل الزائد يتلف المحرك والأحزمة بسرعة</span>
                </li>
              </ul>
            </Card>

            {/* Refrigerator Tips */}
            <Card className="p-6 border-l-4 border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-blue-700" size={28} />
                <h3 className="text-xl font-bold text-blue-900">الثلاجات والفريزرات العميقة</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>نظف الملفات الخلفية:</strong> نظف ملفات التبريد الخلفية كل 6 أشهر لتحسين الكفاءة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>راقب درجة الحرارة:</strong> اضبط الثلاجة على 3-5 درجة مئوية للحفاظ على الطعام</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>تأكد من سلامة الحشيات:</strong> حشيات الباب المتهالكة تضاعف استهلاك الكهرباء</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>ابعد الثلاجة عن الحرارة:</strong> لا تضعها بجوار الفرن أو في أماكن مشمسة</span>
                </li>
              </ul>
            </Card>

            {/* Air Conditioning Tips */}
            <Card className="p-6 border-l-4 border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-blue-700" size={28} />
                <h3 className="text-xl font-bold text-blue-900">مكيفات الهواء والتكييف المركزي</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>نظف الفلاتر كل أسبوعين:</strong> الفلاتر المسدودة تقلل كفاءة التبريد وترفع الفاتورة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>صيانة سنوية دورية:</strong> تنظيف الملفات الداخلية والخارجية قبل الصيف</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>فحص الفريون سنوياً:</strong> تأكد من مستويات الفريون لضمان التبريد الأمثل</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>لا تضبط درجة حرارة منخفضة جداً:</strong> يزيد الضغط على الضاغط ويقصر عمره</span>
                </li>
              </ul>
            </Card>

            {/* Kitchen Appliances Tips */}
            <Card className="p-6 border-l-4 border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-blue-700" size={28} />
                <h3 className="text-xl font-bold text-blue-900">البوتاجاز وأفران الميكروويف</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>نظف الفوهات بعد الطبخ:</strong> الفوهات المسدودة تسبب اشتعالاً غير منتظم وهدر الغاز</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>افحص وصلات الغاز دورياً:</strong> تأكد من عدم وجود تسريبات بشكل منتظم</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>نظف الميكروويف بعد كل استخدام:</strong> يمنع تراكم الأوساخ والروائح الكريهة</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={20} />
                  <span><strong>ممنوع الأواني المعدنية في الميكروويف:</strong> تسبب شرارات وتتلف الجهاز فوراً</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Important Notice */}
          <div className="max-w-3xl mx-auto p-6 bg-blue-50 border-l-4 border-blue-700 rounded-lg">
            <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
              <AlertCircle className="text-blue-700" size={24} />
              متى تحتاج لخبير متخصص؟
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• عند ملاحظة أي تسريب للمياه أو رطوبة غير طبيعية حول الجهاز</li>
              <li>• عند سماع أصوات غريبة أو طقطقة أو اهتزاز غير معتاد</li>
              <li>• عند توقف الجهاز عن العمل كلياً أو جزئياً</li>
              <li>• عند ظهور رائحة حرق أو دخان من الجهاز</li>
              <li>• عند ارتفاع فاتورة الكهرباء بشكل مفاجئ وغير مبرر</li>
            </ul>
            <p className="mt-4 text-sm text-blue-800 font-semibold">لا تخاطر بمحاولة الإصلاح بنفسك - اتصل بخبرائنا فوراً على 15912!</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">أسئلة يسألها عملاؤنا</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQAccordion question="ما هي ساعات عمل مركز الخبراء للصيانة؟" answer="مركز الخبراء للصيانة يعمل 24 ساعة يومياً، 7 أيام في الأسبوع. خبراؤنا متاحون في أي وقت لتلقي طلبات الصيانة والطوارئ. الخط الساخن: 15912" />
            <FAQAccordion question="هل تشمل خدماتكم جميع محافظات مصر؟" answer="نعم، يصل خبراؤنا إلى جميع محافظات جمهورية مصر العربية. لدينا شبكة واسعة من الفنيين المتخصصين في كل محافظة لضمان سرعة الاستجابة." />
            <FAQAccordion question="ما الماركات التي يتخصص فيها خبراؤكم؟" answer="خبراؤنا مدربون على صيانة جميع الماركات العالمية والمحلية الشهيرة مثل أريستون، بيكو، بوش، إل جي، سامسونج، ويرلبول، زانوسي، وغيرها. نستخدم قطع غيار مطابقة للمواصفات الأصلية." />
            <FAQAccordion question="ما مدة ضمان الإصلاح في مركز الخبراء؟" answer="نقدم ضماناً استثنائياً لمدة سنتين كاملتين على جميع أعمال الإصلاح والقطع المستبدلة. الضمان يشمل الأداء والجودة والسلامة الكهربائية." />
            <FAQAccordion question="كيف يتم تحديد تكلفة الصيانة؟" answer="التكلفة تتحدد بعد الفحص المجاني وتشخيص العطل. تختلف حسب نوع الجهاز وطبيعة العطل والقطع المطلوبة. نقدم تقديراً شفافاً قبل البدء في الإصلاح." />
            <FAQAccordion question="كم يستغرق إصلاح الجهاز؟" answer="معظم الأعطال الشائعة تُصلح في 1-4 ساعات. الأعطال المعقدة قد تحتاج وقتاً أطول. نخبرك بالوقت المتوقع بدقة قبل البدء في العمل." />
            <FAQAccordion question="هل تقدمون خدمة الصيانة الوقائية الدورية؟" answer="نعم، نقدم برامج صيانة وقائية دورية لجميع الأجهزة المنزلية. الصيانة الدورية تطيل عمر الجهاز وتقلل احتمالية الأعطال المفاجئة وتوفر تكاليف الإصلاح." />
            <FAQAccordion question="كيف أتواصل مع مركز الخبراء للصيانة؟" answer="يمكنك التواصل معنا بعدة طرق: الاتصال على الخط الساخن 15912، أو الموبايل 01157680948، أو مراسلتنا عبر الواتساب. نرد فوراً ونرسل لك الخبير في أقرب وقت." />
          </div>
        </div>
      </section>

      {/* FAQ Simple Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-blue-900 mb-2">هل تستخدمون قطع غيار أصلية؟</h3>
              <p className="text-gray-700">نستخدم قطع غيار مطابقة للمواصفات الأصلية ومعتمدة من موردين موثوقين. جميع القطع تأتي مع شهادات الجودة وضمان المورد.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-blue-900 mb-2">هل يمكن إصلاح الجهاز في المنزل؟</h3>
              <p className="text-gray-700">نعم، خبراؤنا يأتون إليك في منزلك ويجرون الإصلاح في الموقع. لا داعي لنقل الجهاز إلا في حالات الأعطال المعقدة جداً.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-blue-900 mb-2">ما مدى سرعة الاستجابة لطلبات الطوارئ؟</h3>
              <p className="text-gray-700">نستجيب لطلبات الطوارئ خلال ساعة واحدة في معظم المناطق. نعمل على مدار الساعة لضمان وصول الخبير إليك في أسرع وقت ممكن.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">تواصل مع خبرائنا الآن</h2>
          <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">فريق خبرائنا جاهز لمساعدتك في أي وقت - اتصل بنا الآن وسنصل إليك بأسرع وقت</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <Phone size={40} className="mx-auto mb-4" />
              <p className="font-bold mb-2">الخط الساخن</p>
              <a href="tel:15912" className="text-blue-100 hover:text-white text-lg font-bold">15912</a>
            </div>
            <div className="text-center">
              <Phone size={40} className="mx-auto mb-4" />
              <p className="font-bold mb-2">رقم الموبايل</p>
              <a href="tel:01157680948" className="text-blue-100 hover:text-white">01157680948</a>
            </div>
            <div className="text-center">
              <MessageCircle size={40} className="mx-auto mb-4" />
              <p className="font-bold mb-2">واتساب الخبراء</p>
              <a href="https://wa.me/201157680948" className="text-blue-100 hover:text-white">راسلنا على واتساب</a>
            </div>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => window.location.href = "tel:01157680948"}
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold"
            >
              احجز زيارة الخبير الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">مركز الخبراء للصيانة</h3>
              <p className="text-sm">نخبة من الخبراء المتخصصين في إصلاح جميع الأجهزة المنزلية بأعلى معايير الجودة والاحترافية.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">روابط مهمة</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white">سياسة الخصوصية</Link></li>
                <li><Link href="/terms" className="hover:text-white">شروط الاستخدام</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">تواصل مع الخبراء</h3>
              <p className="text-sm mb-2">الخط الساخن: <a href="tel:15912" className="hover:text-white">15912</a></p>
              <p className="text-sm mb-2">الموبايل: <a href="tel:01157680948" className="hover:text-white">01157680948</a></p>
              <p className="text-sm">خدمة طوارئ متاحة 24/7</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-center mb-4">
              مركز الخبراء للصيانة هو مركز صيانة مستقل ومتخصص. نقدم خدمات إصلاح الأجهزة المنزلية باستخدام قطع غيار مطابقة للمواصفات وعالية الجودة. جميع الأسماء التجارية والعلامات المذكورة هي ملك لأصحابها ولا نمثل أي توكيل رسمي أو وكالة معتمدة لهذه الماركات.
            </p>
            <p className="text-xs text-center text-gray-500">
              © 2026 مركز الخبراء للصيانة. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Hotline Button */}
        <a
          href="tel:15912"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse font-bold"
        >
          <Phone size={20} />
          <span className="text-sm">15912</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/201157680948?text=مرحبا، أود الاستفسار عن خدمات مركز الخبراء للصيانة"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse"
        >
          <MessageCircle size={20} />
          <span className="text-sm font-semibold">واتساب</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:01157680948"
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse"
        >
          <Phone size={20} />
          <span className="text-sm font-semibold">اتصل</span>
        </a>
      </div>
    </div>
  );
}
