import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

export const metadata = {
  title: "Opulence",
  description: "A budget is not restriction but a guide to financial freedom.",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}

          <Header />

          <main className="min-h-screen overflow-x-hidden">
            <div>{children}</div>
          </main>
          {/* footer */}
          <footer className="bg-purple-200 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              Made with Love ❤️ by Rajat Yadav Labs
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
