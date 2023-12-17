import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f6f6f6]`}>
        <Layout>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
              <Toaster
                toastOptions={{
                  style: { background: "black", color: "#fff" },
                }}
                position="bottom-left"
              />
            </main>
          </div>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
