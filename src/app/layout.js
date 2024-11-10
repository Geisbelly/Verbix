import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"]});
export const metadata = {
  title: "Verbix"
};


export default function RootLayout({
  children,
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex`}>
        <Sidebar/>
          <div style={{ flex: 1,  flexDirection: 'row', background:'#E8F6FF',color:'#3F3F3F', overflowY: 'auto', padding: '20px' }}>
            {children}
          </div>
      </body>
    </html>
  );
}
