export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        
        {/* ชื่อสถานี */}
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Thai Toronto Radio</h1>
        <p className="text-gray-500 mb-6">สถานีวิทยุและข่าวสารเพื่อคนไทยในแคนาดา</p>

        {/* ส่วนกล่องวิทยุ */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <div className="animate-pulse bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <span className="text-white text-3xl">📻</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">ฟังรายการสด (Live)</h2>
          
          {/* เครื่องเล่นเสียง (เปลี่ยนลิงก์ src เป็นสตรีมวิทยุจริงได้ในอนาคต) */}
          <audio controls className="w-full">
            <source src="https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" type="audio/mpeg" />
            เบราว์เซอร์ของคุณไม่รองรับเครื่องเล่นเสียงครับ
          </audio>
        </div>

      </div>
    </main>
  );
}