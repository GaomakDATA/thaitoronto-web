import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // นำเข้าเครื่องมือทำลิงก์ของ Next.js

const inter = Inter({ subsets: ["latin"] });

// ส่วนนี้คือการตั้งค่าชื่อเว็บที่จะไปโผล่บนแท็บเบราว์เซอร์ครับ
export const metadata: Metadata = {
  title: "Thai Toronto - Radio & News",
  description: "สถานีวิทยุและข่าวสารเพื่อชุมชนคนไทยในแคนาดา",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={inter.className}>
        
        {/* --- แถบเมนูด้านบน (Navbar) --- */}
        <nav className="bg-blue-800 text-white p-4 shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            
            {/* โลโก้/ชื่อเว็บ ด้านซ้าย */}
            <div className="text-xl font-bold">
              <Link href="/">🍁 Thai Toronto</Link>
            </div>
            
            {/* เมนูลิงก์ ด้านขวา */}
            <ul className="flex space-x-6 text-sm md:text-base">
              <li><Link href="/" className="hover:text-blue-300 transition-colors">หน้าแรก</Link></li>
              <li><Link href="/news" className="hover:text-blue-300 transition-colors">ข่าวสาร</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300 transition-colors">ติดต่อเรา</Link></li>
            </ul>

          </div>
        </nav>

        {/* --- ส่วนเนื้อหาหลัก (กล่องวิทยุของเราจะมาโผล่ตรง {children} นี้ครับ) --- */}
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
        
        {/* --- ส่วนท้ายเว็บ (Footer) --- */}
        <footer className="bg-gray-900 text-gray-400 text-center p-6 text-sm">
          <p>© 2026 Thai Toronto Web. All rights reserved.</p>
          <p className="mt-1">สถานีวิทยุชุมชนคนไทยในโทรอนโตและพื้นที่ใกล้เคียง</p>
        </footer>

      </body>
    </html>
  );
}