import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ChevronLeft size={18} />
              العودة للرئيسية
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-blue-700">سياسة الخصوصية</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">سياسة الخصوصية</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">مقدمة</h2>
            <p className="text-gray-700 mb-4">
              في "مركز الخبراء للصيانة"، نحرص على حماية خصوصية عملائنا وزوار موقعنا. تشرح هذه الوثيقة طبيعة المعلومات التي نجمعها وأسلوب التعامل معها وحمايتها.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">جمع المعلومات</h2>
            <p className="text-gray-700 mb-4">
              نقوم بجمع المعلومات التي تقدمها لنا طواعية عند الاتصال بنا أو ملء استمارة طلب الصيانة (مثل الاسم، رقم الهاتف، والعنوان).
            </p>
            <p className="text-gray-700">
              قد نجمع أيضاً معلومات تقنية عن زيارتك لموقعنا مثل عنوان IP والمتصفح المستخدم لتحسين تجربة المستخدم.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">استخدام البيانات</h2>
            <p className="text-gray-700 mb-4">
              نستخدم البيانات الشخصية التي نجمعها للأغراض التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>تقديم خدمة الصيانة المطلوبة</li>
              <li>التواصل معك بخصوص طلبك أو الخدمة المقدمة</li>
              <li>تحسين جودة خدماتنا</li>
              <li>الرد على استفساراتك والإجابة على أسئلتك</li>
              <li>إرسال تحديثات عن الخدمات الجديدة (بموافقتك)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">حماية البيانات</h2>
            <p className="text-gray-700 mb-4">
              نحن نلتزم بعدم بيع أو مشاركة بياناتك الشخصية مع أي طرف ثالث لأغراض تسويقية.
            </p>
            <p className="text-gray-700">
              نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-gray-700 mb-4">
              قد يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل حركة المرور من خلال إعلانات جوجل.
            </p>
            <p className="text-gray-700">
              يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">حقوقك</h2>
            <p className="text-gray-700 mb-4">
              لديك الحق في:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>الوصول إلى بياناتك الشخصية</li>
              <li>تصحيح أي معلومات غير صحيحة</li>
              <li>حذف بياناتك الشخصية</li>
              <li>الاعتراض على معالجة بياناتك</li>
            </ul>
            <p className="text-gray-700">
              للقيام بأي من هذه الطلبات، يرجى التواصل معنا على الرقم 01157680948.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">التغييرات على السياسة</h2>
            <p className="text-gray-700">
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إخطارك بأي تغييرات جوهرية من خلال البريد الإلكتروني أو إشعار بارز على الموقع.
            </p>
          </section>

          <section className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">تواصل معنا</h2>
            <p className="text-gray-700">
              إذا كان لديك أي أسئلة حول هذه السياسة أو ممارسات الخصوصية لدينا، يرجى التواصل معنا:
            </p>
            <p className="text-gray-700 mt-4">
              <strong>الهاتف:</strong> <a href="tel:01157680948" className="text-blue-700 hover:underline">01157680948</a>
            </p>
            <p className="text-gray-700">
              <strong>الوقت:</strong> متاح 24/7
            </p>
          </section>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-blue-700 hover:bg-blue-800">
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
