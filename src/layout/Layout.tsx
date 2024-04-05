import { ReactNode, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#08081b] text-orange-600">
      <NavBar openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <main className="max-w-7xl px-4 py-8 sm:py-16 w-full mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
