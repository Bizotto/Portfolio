import { Github, InstagramIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

interface MyLinksProps {
  linkedIn: string;
  github: string;
  Instagram: string;
}

export function MyLinks({ github, linkedIn, Instagram }: MyLinksProps) {
  return (
    <div className="flex items-center gap-2 text-[#8B7F54]">
      <Link
        className="flex group h-10 w-10 items-center justify-center rounded-full bg-[#C5BFAA25] hover:scale-110 transform duration-300 p-2 ease-in-out"
        target="_blank"
        href={linkedIn}
      >
        <LinkedinIcon className="group-hover:text-[#C5BFAA] transition duration-300 ease-in-out transform group-hover:scale-110" />
      </Link>
      <Link
        className="flex group h-10 w-10 items-center justify-center rounded-full bg-[#C5BFAA25] hover:scale-110 transform duration-300 p-2 ease-in-out"
        target="_blank"
        href={github}
      >
        <Github className="group-hover:text-[#C5BFAA] transition duration-300 ease-in-out transform group-hover:scale-110" />
      </Link>
      <Link
        className="flex group h-10 w-10 items-center justify-center rounded-full bg-[#C5BFAA25] hover:scale-110 transform duration-300 p-2 ease-in-out"
        target="_blank"
        href={Instagram}
      >
        <InstagramIcon className="group-hover:text-[#C5BFAA] transition duration-300 ease-in-out transform group-hover:scale-110 " />
      </Link>
    </div>
  );
}
