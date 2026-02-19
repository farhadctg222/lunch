import Countdown from "./componet/countdown";


export const metadata = {
  title: "AdvocateListBD.com — শিগগিরই চালু হচ্ছে",
  description:
    "বাংলাদেশের যাচাইকৃত আইনজীবী ও চেম্বার ডিরেক্টরি। ওয়েবসাইট শিগগিরই চালু হচ্ছে। সমন্বয়কের সাথে যোগাযোগ করুন: 01305573617",
};

export default function Home() {
  const phone = "01305573617";

  // ✅ 10 days from now (server time)
  const tenDaysLater = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString();

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-emerald-600 to-teal-600 p-6 md:p-8">
          <p className="text-emerald-50/90 text-sm md:text-base">
            www.advocateListBD.com
          </p>
          <h1 className="text-white text-2xl md:text-4xl font-bold mt-2">
            ওয়েবসাইট শিগগিরই চালু হচ্ছে 🚀
          </h1>
          <p className="text-emerald-50/90 mt-3 text-sm md:text-base">
            যাচাইকৃত আইনজীবী • চেম্বার তথ্য • বিভাগভিত্তিক সার্চ • সহজ যোগাযোগ
          </p>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
              দ্রুত উদ্বোধন হবে — প্রস্তুতি চলছে
            </h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              AdvocateListBD.com এ আইনজীবীর তথ্য যাচাই করে প্রকাশ করা হবে। প্রোফাইল যুক্ত/আপডেট করতে
              সমন্বয়কের সাথে যোগাযোগ করুন।
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1">✅</span>
                <p className="text-slate-700">বিভাগ/বিল্ডিং অনুযায়ী আইনজীবী খোঁজা যাবে</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1">✅</span>
                <p className="text-slate-700">চেম্বার ঠিকানা, সময় ও যোগাযোগ তথ্য থাকবে</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1">✅</span>
                <p className="text-slate-700">যাচাইকৃত প্রোফাইলকে অগ্রাধিকার দেওয়া হবে</p>
              </div>
            </div>
          </div>

          {/* ✅ Countdown + Contact */}
          <div className="space-y-4">
            <Countdown targetISO={tenDaysLater} />

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-800">
                সহায়তা / তথ্য যোগ করতে যোগাযোগ
              </h3>
              <p className="text-slate-600 mt-2">
                প্রোফাইল যুক্ত/আপডেট বা যেকোনো সহায়তার জন্য কল করুন।
              </p>

              <div className="mt-4 grid gap-3">
                <a
                  href={`tel:${phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
                >
                  📞 Call Co-ordinator: {phone}
                </a>

                <a
                  href={`https://wa.me/88${phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white border border-emerald-200 text-emerald-700 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition"
                >
                  💬 WhatsApp Message
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                (সময়: সকাল ৮টা – রাত ৫টা)
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 md:px-10 py-5 border-t border-slate-200 text-sm text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© {new Date().getFullYear()} www.advocateListBD.com</p>
          <p>Bangladesh Advocate & Chamber Directory</p>
        </div>
      </div>
    </main>
  );
}

