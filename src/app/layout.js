import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"]});
export const metadata = {
  title: "Verbix"
};


export default function RootLayout({
  children,
}) {
  return (
    <html lang="pt-br">
      <body >
        <Navbar/>
        <div className={`${inter.className} flex`}>
        <Sidebar/>
          <div style={{ flex: 'auto', background:'#E8F6FF',color:'#3F3F3F', overflowY: 'auto' }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
