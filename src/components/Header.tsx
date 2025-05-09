"use client";

import LanguageSelector from "@/components/LanguageSelector";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      <LanguageSelector />
    </header>
  );
}
