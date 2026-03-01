import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Terms() {
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
          <h1 className="text-xl font-bold text-blue-700">شروط الاستخدام</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">شروط وأحكام الخدمة</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">مقدمة</h2>
            <p className="text-gray-700 mb-4">
              باستخدامك لموقعنا أو طلب خدماتنا، فإنك توافق على الشروط والأحكام التالية. يرجى قراءة هذه الشروط بعناية قبل استخدام الموقع أو طلب الخدمة.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">طبيعة الخدمة</h2>
            <p className="text-gray-700 mb-4">
              "مركز الخدمات للصيانة" هو مركز صيانة مستقل متخصص في إصلاح الأجهزة المنزلية.
            </p>
            <p className="text-gray-700 mb-4">
              نحن لسنا التوكيل الرسمي أو الوكيل المعتمد لأي ماركة تجارية، ونستخدم قطع غيار متوافقة ذات جودة عالية.
            </p>
            <p className="text-gray-700">
              جميع الخدمات المقدمة هي خدمات صيانة واستشارة فقط، وليست خدمات رسمية من الماركات المذكورة.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">الضمان</h2>
            <p className="text-gray-700 mb-4">
              نقدم ضماناً على قطع الغيار المستبدلة وأعمال الصيانة لفترة محددة يتم توضيحها في فاتورة الصيانة المسلمة للعميل.
            </p>
            <p className="text-gray-700 mb-4">
              الضمان يغطي العيوب الصناعية في قطع الغيار والأخطاء في التركيب فقط.
            </p>
            <p className="text-gray-700">
              الضمان لا يغطي الأضرار الناتجة عن سوء الاستخدام أو الإهمال أو التعديلات غير المصرح بها.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">حقوق الملكية</h2>
            <p className="text-gray-700 mb-4">
              جميع أسماء الماركات والشعارات المذكورة في الموقع هي ملك لأصحابها.
            </p>
            <p className="text-gray-700">
              تستخدم هنا فقط لأغراض التوضيح وتحديد نوع الأجهزة التي نقدم لها الدعم الفني. لا ندعي وجود أي صلة رسمية بهذه الماركات.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">المسؤولية</h2>
            <p className="text-gray-700 mb-4">
              نحن غير مسؤولين عن:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>أي أضرار ناتجة عن سوء استخدام الجهاز بعد انتهاء عملية الصيانة وتسليمه للعميل</li>
              <li>أي أضرار ناتجة عن عدم اتباع التعليمات المقدمة</li>
              <li>أي أضرار ناتجة عن الكوارث الطبيعية أو القوة القاهرة</li>
              <li>أي خسائر غير مباشرة أو عرضية</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">شروط الدفع</h2>
            <p className="text-gray-700 mb-4">
              يتم تحديد تكلفة الخدمة بناءً على نوع الجهاز والعطل المكتشف.
            </p>
            <p className="text-gray-700 mb-4">
              يتم إصدار فاتورة توضح تفاصيل الخدمة والتكلفة عند الانتهاء من الصيانة.
            </p>
            <p className="text-gray-700">
              الدفع يتم عند استلام الجهاز المصلح أو حسب الاتفاق المسبق.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">إلغاء الطلب</h2>
            <p className="text-gray-700 mb-4">
              يمكن إلغاء الطلب قبل بدء الصيانة بدون رسوم.
            </p>
            <p className="text-gray-700">
              في حالة الإلغاء بعد بدء الصيانة، قد يتم فرض رسم على الفحص والعمل المنجز.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">تعديل الشروط</h2>
            <p className="text-gray-700">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">القانون الواجب التطبيق</h2>
            <p className="text-gray-700">
              تخضع هذه الشروط لقوانين جمهورية مصر العربية.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">إخلاء المسؤولية</h2>
            <p className="text-gray-700 mb-4">
              مركز الخدمات للصيانة هو مركز صيانة مستقل ومتخصص. نحن نوفر خدمة الإصلاح للماركات المذكورة باستخدام قطع غيار متوافقة وعالية الجودة.
            </p>
            <p className="text-gray-700">
              جميع الأسماء التجارية والشعارات المذكورة هي ملك لأصحابها ولا ندعي وجود أي صلة رسمية بالتوكيل أو الوكالة الرسمية للماركات.
            </p>
          </section>

          <section className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">تواصل معنا</h2>
            <p className="text-gray-700">
              إذا كان لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا:
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
