import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-5xl px-4 py-3 lg:px-6 lg:py-4 mx-auto">
      {children}
    </div>
  );
}
