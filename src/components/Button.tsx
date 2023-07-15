import Link from 'next/link';
import { ReactElement } from 'react';

interface ButtonProps {
  title: string;
  children: ReactElement;
  text: string;
  link: string;
  target?: string;
}

export function Button({ title, children, text, link, target }: ButtonProps) {
  return (
    <div className="flex justify-center ">
      <Link
        target={target}
        href={link}
        title={title}
        className="bg-[#323232] rounded-3xl py-6 px-10 active:bg-[#222222] hover:bg-[#292929] transition hover:scale-110 transform duration-300 flex items-center gap-3"
      >
        {children}
        <p className="text-[#8B7F54]">{text}</p>
      </Link>
    </div>
  );
}
