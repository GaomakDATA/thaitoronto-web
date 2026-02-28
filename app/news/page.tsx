export default function NewsPage() {
  // ข้อมูลข่าวจำลอง (ในอนาคตเราสามารถดึงข้อมูลจริงจาก API ได้ครับ)
  const newsItems = [
    {
      id: 1,
      title: "อัปเดตเศรษฐกิจแคนาดาปี 2026",
      date: "28 กุมภาพันธ์ 2026",
      summary: "สรุปสถานการณ์เงินเฟ้อและทิศทางดอกเบี้ยในออนแทรีโอช่วงไตรมาสแรก...",
      tag: "เศรษฐกิจ"
    },
    {
      id: 2,
      title: "งานเทศกาลไทยในโทรอนโตประจำปี",
      date: "25 กุมภาพันธ์ 2026",
      summary: "เตรียมพบกับมหกรรมอาหารและวัฒนธรรมไทยที่ Nathan Phillips Square เร็วๆ นี้",
      tag: "ชุมชน"
    },
    {
      id: 3,
      title: "ประกาศเปลี่ยนกฎวีซ่าทำงานใหม่",
      date: "20 กุมภาพันธ์ 2026",
      summary: "รัฐบาลแคนาดาประกาศปรับปรุงเงื่อนไขการต่อใบอนุญาตทำงานสำหรับชาวต่างชาติ",
      tag: "ข่าวเด่น"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-2 inline-block">
        ข่าวสารและกิจกรรม
      </h1>

      <div className="grid gap-6">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full uppercase">
              {item.tag}
            </span>
            <h2 className="text-xl font-bold text-gray-800 mt-2 mb-1">{item.title}</h2>
            <p className="text-gray-400 text-xs mb-3">{item.date}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.summary}
            </p>
            <button className="mt-4 text-blue-600 font-semibold text-sm hover:underline">
              อ่านเพิ่มเติม →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}