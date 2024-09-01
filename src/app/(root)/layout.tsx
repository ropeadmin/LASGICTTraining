import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "MWCE",
  description: "Learn and thrive in the digital world today by mastering tech skills that drive innovation.",
  icons: {
    icon: "/icons/logo.svg"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <main>
        {children}
      </main>
  );
}
