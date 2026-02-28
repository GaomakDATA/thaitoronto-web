export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">ติดต่อเรา</h1>
      <p className="text-center text-gray-600 mb-10">
        มีคำถาม ข้อเสนอแนะ หรือสนใจลงโฆษณาในรายการวิทยุ ติดต่อทีมงานได้เลยครับ
      </p>

      <form className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อของคุณ</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="สมชาย แคนาดา" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="somchai@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความ</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="พิมพ์ข้อความของคุณที่นี่..."></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
          ส่งข้อความ
        </button>
      </form>
    </div>
  );
}