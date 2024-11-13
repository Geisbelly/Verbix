import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Verbix"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar className="w-64 h-full fixed" />
          <main >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
