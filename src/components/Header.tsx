import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { MyLinks } from './MyLinks';

export function Header() {
  return (
    <header className="flex mx-auto max-w-7xl mb-6 itens-center justify-between">
      <Link className="flex gap-3 items-center" href="">
        <div className="p-3 rounded-full bg-[#464646]">
          <EnvelopeIcon width={30} height={30} />
        </div>
        <p className="text-[#8B7F54]">Entre em contato comigo!</p>
      </Link>
      <MyLinks
        github="https://github.com/Bizotto"
        linkedin="https://www.linkedin.com/in/nicolas-bizotto/"
        instagram="https://www.instagram.com/0bizotto/"
      />
    </header>
  );
}
