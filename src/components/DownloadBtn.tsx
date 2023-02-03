import { ReactNode } from "react";

interface DownloadBtnProps {
  onClick?: () => void;
  className?: string;
  title?: string;
  children: ReactNode;
}

export default function DownloadBtn({
  onClick,
  children,
  className,
  title,
}: DownloadBtnProps) {
  return (
    <button
      className={`px-4 py-2 text-white bg-green-500 font-bold text-2xl rounded-md mt-4 flex items-baseline ${className}`}
      onClick={onClick}
      title={title}
    >
      <svg
        viewBox="0 0 96 96"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 fill-gray-700"
      >
        <g>
          <path d="M90,54a5.9966,5.9966,0,0,0-6,6V78H12V60A6,6,0,0,0,0,60V84a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V60A5.9966,5.9966,0,0,0,90,54Z" />
          <path d="M43.7578,64.2422a5.9979,5.9979,0,0,0,8.4844,0l18-18a5.9994,5.9994,0,0,0-8.4844-8.4844L54,45.5156V12a6,6,0,0,0-12,0V45.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844Z" />
        </g>
      </svg>
      {children}
    </button>
  );
}
